import React, {useContext} from "react"
import {Context} from "../context/ContextComponent"
import CartItem from "../components/CartItem"

function Cart() {
    const {cartItems,setCartItems} = useContext(Context)
    const totalCost = 5.99 * cartItems.length
    const cartItemElements = cartItems.map(item => {
        return <CartItem key={item.id} item={item} delete={()=>deleteItem(item)} /> 
}) 
    function deleteItem(newItem){
        const result = cartItems.filter((item)=>item.id!==newItem.id)
        setCartItems(result)
    }

    return (
        <main className="cart-page">
            <h1>Check out</h1>
            {cartItemElements}
            <p className="total-cost">Total:
            {totalCost.toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
            <div className="order-button">
                {cartItems.length!==0&&<button>Place Order</button>}
            </div>
        </main>
    )
}

export default Cart