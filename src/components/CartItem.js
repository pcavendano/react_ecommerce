import React, { useState } from "react";

function CartItem(props) {
  const [isShown, setIsShown] = useState();
  return (
    <div className="cart-item">
      <i
        onClick={() => props.delete(props.item)}
        onMouseEnter={() => setIsShown(true)}
        onMouseLeave={() => setIsShown(false)}
        className={
          isShown === true ? "ri-delete-bin-fill" : "ri-delete-bin-line"
        }
      ></i>
      <img src={props.item.url} width="130px" alt={props.item.alt} />
      <p>$5.99</p>
    </div>
  );
}

export default CartItem;
