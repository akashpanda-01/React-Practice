import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";


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
          <NavLink to={"/"}><li>Home</li></NavLink>
          <NavLink to={"/about"}><li>About</li></NavLink>
          <NavLink to={"/contact"}><li>Contact</li></NavLink>
          <NavLink><li>Cart</li></NavLink>
        </ul>
      </div>
    </div>
  );
};


export default Header;