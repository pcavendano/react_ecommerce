import React from "react"
import {Switch, Route} from "react-router-dom"
import Header from "./components/Header.js"
import Cart from "./pages/Cart.js"
import Photos from "./pages/Photos.js"

function App() {    
    return (
        <div>
            <Header />
            <Switch>
                <Route exact path="/react_ecommerce/">
                    <Photos/>
                </Route>
                <Route path="/react_ecommerce/cart">
                    <Cart/>
                </Route>
            </Switch>
        </div>
    )
}

export default App