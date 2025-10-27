import React, { useState } from "react";
import "./Header.css";

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
  return (
    <>
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
        <div>
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
