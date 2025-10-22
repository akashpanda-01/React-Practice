import React from "react";

const Title = () => {
  return (
    <a href="/">
      <img
        id="logo"
        alt="logo"
        src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
      />
    </a>
  )
};

const Header = () => {
  return (
    <>
      <div id="header">
        <Title />
        <div id="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};


export default Header;