import React from "react";
import "./Header.css";


const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src="../assets/FoodVilla.png" />
    </a>
  );
};

const Header = () => {
  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};


export default Header;