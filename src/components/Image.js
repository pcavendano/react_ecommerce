import React,{useState,useContext} from "react"
import {Context} from '../context/ContextComponent.js'

function Image({className, img}) {
    const {toggleFavorite} = useContext(Context)
    console.log("pedrgrgfo")
    const [hovered, setHovered] = useState(false)
    const heartIcon = hovered && <i className={img.isFavorite?"ri-heart-fill favorite":"ri-heart-line favorite"}
    onClick={() =>toggleFavorite(img.id)}></i>
    const cartIcon = hovered && <i onClick={() => toggleFavorite(img.id)} className="ri-add-circle-line cart"></i>
    return (
        <div 
            className={`${className} image-container`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            <img src={img.url} className="image-grid"/>
            {heartIcon}
            {cartIcon}
        </div>
    )
}

export default Image
