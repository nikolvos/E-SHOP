import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import iphone from "../../assets/ajfon.webp";
import removeThis from "../../assets/iphone-x.png";
import watch from "../../assets/watch.jpg";
import computer from "../../assets/comp.jpg";
import macbook from "../../assets/macbookpro.jfif";
import iMac from "../../assets/imac.jpg";
import pill from "../../assets/beats pill.jpg";

export const CartItem = (props) => {
  const { id, productName, productImage, price } = props.data;
  const {
    cartItems,
    addToCart,
    removeFromCart,
    clearCart,
    updateCartItemCount,
  } = useContext(ShopContext);
  return (
    <div className="cartItem">
      <img src={productImage} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p>${price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}>-</button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}>+</button>
        </div>
      </div>
    </div>
  );
};
