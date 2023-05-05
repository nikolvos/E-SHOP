import React, { useContext } from "react";
import "./PopUp.css";
import { useState, useRef } from "react";
import { ShopContext } from "./context/shop-context";
import { UploadImage } from "./uploadImage.jsx";
import iphone from "./assets/ajfon.webp";
import removeThis from "./assets/iphone-x.png";
import watch from "./assets/watch.jpg";
import computer from "./assets/comp.jpg";
import macbook from "./assets/macbookpro.jfif";
import iMac from "./assets/imac.jpg";
import pill from "./assets/beats pill.jpg";

function PopUp(props) {
  const { products } = useContext(ShopContext);
  const PriceInput = useRef();
  const NameInput = useRef();
  const PhotoInput = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    var price = PriceInput.current.value;
    var name = NameInput.current.value;
    var photo = PhotoInput.current.value;
    var id = products.length + 1;

    var product = {
      productName: name,
      price: price,
      productImage: `${photo}`,
      id: id,
    };
    products.push(product);

    props.setTrigger(false);
  };

  return props.trigger ? (
    <div className="popup">
      <div className="popup-inner">
        <form onSubmit={handleSubmit}>
          <h2 className="title-alter"> New Product </h2>
          <input
            type="text"
            name="Product Name"
            placeholder="Name.."
            ref={NameInput}
          />
          <input
            type="price"
            name="Price input"
            placeholder="Price in euros.."
            ref={PriceInput}
          />{" "}
          <input
            type="text"
            name="Photo"
            placeholder="Photo.."
            ref={PhotoInput}
          />
          <br />
          <button className="close-btn" onClick={() => props.setTrigger(false)}>
            Cancel
          </button>
          <button className="done-btn" type="submit">
            Done
          </button>
        </form>

        {props.children}
      </div>
    </div>
  ) : (
    ""
  );
}

export default PopUp;
