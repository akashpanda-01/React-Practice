import React from "react";
import { NavLink } from "react-router-dom";
import Home from "./Home.jsx";
import About from "./About.jsx";
import Dashboard from "./Dashboard.jsx";
import "./Navbar.css";

function Navbar() {
  return (
    <div>
      <ul>
        <li>
          <NavLink
            to="/"
            className={({isActive}) => isActive ? "active-link" : ""}
          >
           Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About"
            className={({isActive}) => isActive ? "active-link" : ""}
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/Dashboard"
            className={({isActive}) => isActive ? "active-link" : ""}
          >
            Dashboard
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
