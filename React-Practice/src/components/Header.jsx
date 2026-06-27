import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Title = () => {
  return (
    <a href="/">
      <img className="logo" alt="logo" src="../assets/FoodVilla.png" />
    </a>
  );
};

const Header = () => {
  const isOnline = useOnlineStatus();

  return (
    <div className="header">
      <Title />
      <div className="nav-items">
        <ul>
        <div className={"online-status"}>Online Status: {isOnline ? "🟢" : "🔴"}</div>
          <NavLink to={"/"}>
            <li>Home</li>
          </NavLink>
          <NavLink to={"/about"}>
            <li>About</li>
          </NavLink>
          <NavLink to={"/contact"}>
            <li>Contact</li>
          </NavLink>
          <NavLink to={"/instamart"}>
            <li>Instamart</li>
          </NavLink>
          <NavLink>
            <li>Cart</li>
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Header;
