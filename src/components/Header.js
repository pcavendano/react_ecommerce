import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../context/ContextComponent.js";

function Header() {
  const { cartItems } = useContext(Context);
  const { ecommerce_route } = useContext(Context);

  return (
    <header>
      <Link to={`/`}>
        <h2>Pic a picture</h2>
      </Link>
      <Link to={`${ecommerce_route}/cart/`}>
        <i
          className={
            cartItems.length !== 0
              ? "ri-shopping-cart-fill ri-fw ri-2x"
              : "ri-shopping-cart-line ri-fw ri-2x"
          }
        ></i>
      </Link>
    </header>
  );
}

export default Header;
