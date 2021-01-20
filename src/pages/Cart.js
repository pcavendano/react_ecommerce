//this will rneder at /cart
import React,{useContext} from "react"
import {Context} from "../context/ContextComponent"
function Cart() {
    const {cartItems} = useContext(Context)
    const cartItemsElelements = cartItems.map(
        (item)=>(<h2>{item.id}</h2>))
    return (
        <main className="cart-page">
            <h1>Check out!</h1>
            {cartItemsElelements}
        </main>
    )
}

export default Cart