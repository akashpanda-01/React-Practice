import React, { Children } from "react";
import ReactDOM from "react-dom/client";
import About from "./About.jsx";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";

const AppLayout = () => {
  return (
    <div>
      <NavLink to={"/"}>
        <h3>AppLayout</h3>
      </NavLink>
      <NavLink to={"/App"}>
        <h3>App</h3>
      </NavLink>
      <NavLink to={"/About"}>
        <h3>About</h3>
      </NavLink>
      <Outlet />
    </div>
  );
};

const appRouter =
  createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
      children: [
        {
          path: "/App",
          element: <App />,
        },
        {
          path: "/About",
          element: <About />,
        },
      ],
    }
  ]);

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(<RouterProvider router={appRouter} />);
