import React, { useContext } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./components/Header.js";
import Cart from "./pages/Cart.js";
import Photos from "./pages/Photos.js";
import { Context } from "./context/ContextComponent.js";

function App() {
  const { ecommerce_route } = useContext(Context);
  console.log(`aca ${ecommerce_route} aqui`);
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={`${ecommerce_route}`}>
          <Photos />
        </Route>
        <Route path={`${ecommerce_route}/cart`}>
          <Cart />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
