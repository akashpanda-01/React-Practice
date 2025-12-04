import React from "react";
import { NavLink, Outlet } from "react-router-dom";

const About = () => {
  return (
    <>
      <h1>Hello</h1>
      <Outlet />
      <NavLink to={"profile"}>
        <button >Profile Btn</button>
      </NavLink>
    </>
  );
};

export default About;