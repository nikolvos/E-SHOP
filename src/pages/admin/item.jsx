import React, { useContext, useState } from "react";
import { Trash } from "phosphor-react";
import { PRODUCTS } from "../../products";
import { ShopContext } from "../../context/shop-context";
import iphone from "../../assets/ajfon.webp";
import removeThis from "../../assets/iphone-x.png";
import watch from "../../assets/watch.jpg";
import computer from "../../assets/comp.jpg";
import macbook from "../../assets/macbookpro.jfif";
import iMac from "../../assets/imac.jpg";
import pill from "../../assets/beats pill.jpg";

export const Item = (props) => {
  const updateItemName = (newName, itemId) => {
    setProducts((products) =>
      products.map((product) => {
        if (product.id == itemId) {
          return {
            ...product,
            productName: newName,
          };
        }
        return product;
      })
    );
  };

  const updateItemPrice = (newPrice, itemId) => {
    setProducts((products) =>
      products.map((product) => {
        if (product.id == itemId) {
          return {
            ...product,
            price: newPrice,
          };
        }
        return product;
      })
    );
  };

  const { id, productName, price, productImage } = props.data;
  const { removeProduct, setProducts } = useContext(ShopContext);
  return (
    <div className="item">
      <img src={productImage} />
      <div className="description">
        <input
          defaultValue={productName}
          type="text"
          onChange={(e) => updateItemName(e.target.value, id)}
        />

        <input
          value={price}
          type="number"
          onChange={(e) => updateItemPrice(e.target.value, id)}
        />
      </div>

      <Trash
        className="trash"
        size={60}
        color="#ff0000"
        weight="thin"
        onClick={() => removeProduct(id)}
      />
    </div>
  );
};
