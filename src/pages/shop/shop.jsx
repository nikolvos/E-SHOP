import React, { useContext } from "react";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import "./shop.css";
import { AppleLogo } from "phosphor-react";
import { ShopContext } from "../../context/shop-context";

export const Shop = () => {
  const { products } = useContext(ShopContext);

  return (
    <div className="shop">
      <div className="shopTitle">
        <AppleLogo size={172} color="#28b886" weight="duotone" />
        <h1>APPLE SHOP </h1>
      </div>

      <div className="products">
        {products.map((product) => (
          <Product data={product} />
        ))}
      </div>
    </div>
  );
};
