import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext.jsx";

const Title = () => {
  return (
    <a href="/">
      <img
        className="logo"
        alt="logo"
        src="../../assets/FoodVilla.png"
        // src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
      />
    </a>
  );
};

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onlineStatus  = useOnlineStatus();
  const {loggedInUser} = useContext(UserContext)

  return (
    <>
      <div className="header">
        <Title />
        <div className="nav-items">
          <ul>
            <li className="status">Online Status: {onlineStatus ? "✅" : "🔴"}</li>

            <NavLink className="nav-link" to={"/"}>
              <li>Home</li>
            </NavLink>
            <NavLink className="nav-link" to={"/about"}>
              <li>About</li>
            </NavLink>
            <NavLink className="nav-link" to={"/contact"}>
              <li>Contact</li>
            </NavLink>
            <NavLink className="nav-link" to={"/cart"}>
              <li>Cart</li>
            </NavLink>
          </ul>
        </div>
        <div className="UserLogged">
          <li className="">{loggedInUser}</li>
          {isLoggedIn ? (
            <button onClick={() => setIsLoggedIn(false)} className="btn-logged">
              Login
            </button>
          ) : (
            <button onClick={() => setIsLoggedIn(true)} className="btn-logged">
              Logout
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default Header;
