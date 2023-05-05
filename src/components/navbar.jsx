import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart } from "phosphor-react";
import { Storefront } from "phosphor-react";
import { Gear } from "phosphor-react";
import "./navbar.css";
export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="links">
        <Link to="/">
          <Storefront size={32} />
        </Link>
        <Link to="/cart">
          {" "}
          <ShoppingCart size={32} />
        </Link>
        <Link to="/admin">
          <Gear size={32} />
        </Link>
      </div>
    </div>
  );
};
