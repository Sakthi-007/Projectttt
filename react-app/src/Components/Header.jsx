

import React from "react";
import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const fullcart = useSelector((state) => state.cart.fullcart);
  const cartlength = fullcart.length;

  return (
    <header className="header">
      <h2>EduVoyage</h2>
      <nav className="nav">
        <Link to="/home"><h3>Home</h3></Link>
        <Link to="/about"><h3>About</h3></Link>
        <Link to="/cart"><h3>Cart: {cartlength}</h3></Link>
      </nav>
    </header>
  );
};

export default Header;

