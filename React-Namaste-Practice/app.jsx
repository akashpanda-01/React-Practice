import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.jsx";
import Body from "./src/components/Body.jsx";
import Footer from "./src/components/Footer.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Contact from "./src/components/Contact.jsx";
import About from "./src/components/About.jsx";
import Error from "./src/components/Error.jsx";
import RestaurantMenu from "./src/components/RestaurantMenu.jsx";

let AppLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/restaurant/:resId",
        element: <RestaurantMenu />
      }
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);