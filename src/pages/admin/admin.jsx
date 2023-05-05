import React, { useContext, useState } from "react";
import { PRODUCTS } from "../../products";
import { Item } from "./item";
import { ShopContext } from "../../context/shop-context";
import "./admin.css";
import PopUp from "../../PopUp";
import iphone from "../../assets/ajfon.webp";

export const Admin = () => {
  const [buttonPopup, setButtonPopup] = useState(false);
  const { products } = useContext(ShopContext);
  return (
    <div className="admin">
      <button className="addProducts" onClick={() => setButtonPopup(true)}>
        ADD PRODUCTS
      </button>
      <div className="items">
        {products.map((product) => (
          <Item data={product} />
        ))}
      </div>
      <PopUp trigger={buttonPopup} setTrigger={setButtonPopup}></PopUp>
    </div>
  );
};
