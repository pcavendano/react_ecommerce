import React,{useState,useContext} from "react"
import {Context} from '../context/ContextComponent.js'
import PropTypes from 'prop-types'
function Image({className, img}) {
    const {toggleFavorite,addImageToCart,cartItems} = useContext(Context)
    const [hovered, setHovered] = useState(false)

    function heartIcon(){
        if(img.isFavorite){
            return <i onClick={() => toggleFavorite(img.id)}
            className={"ri-heart-fill favorite"}></i>
        }else if(hovered){
            return<i onClick={() => toggleFavorite(img.id)}
      className={img.isFavorite?"ri-heart-fill favorite":"ri-heart-line favorite"}></i>
        }
}

     function cartIcon(){
         if(cartItems.some(cartItem=>cartItem.id===img.id)){
            return <i onClick={()=>addImageToCart(img)}
            className={"ri-add-circle-fill cart"}></i>
        }else if(hovered){
            return <i onClick={()=>addImageToCart(img)}
            className={"ri-add-circle-line cart"}></i>}
     }

    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img alt={img.alt} src={img.url} className="image-grid"/>
            {heartIcon()}
            {cartIcon()}
        </div>
    )
}

Image.propTypes={
    className:PropTypes.string,
    img:PropTypes.shape({
        id:PropTypes.string.isRequired,
        url:PropTypes.string.isRequired,
        isFavorite:PropTypes.bool
    })
}

export default Image
