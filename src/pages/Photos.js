//this is our home page, this will render on the / route
import React,{useContext} from "react"
import Image from '../components/Image.js'
import {getClass} from '../utils'
import {Context} from '../context/ContextComponent.js'

function Photos() {
    const {allPhotos} = useContext(Context)
    const imageElements =allPhotos.map((img,i)=>(
        <Image key={img.id} img={img} className={getClass(i)}/>
    ))
    return(
    <main className="photos">
        {imageElements}
    </main>
    )
}

export default Photos