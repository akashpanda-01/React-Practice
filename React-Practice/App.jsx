import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";
import Footer from "./src/components/Footer";
import "./App.css";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./src/components/About";
import Contact from "./src/components/Contact";
import Error from "./src/components/Error";
import RestaurantMenu from "./src/components/RestaurantMenu";

// let heading = document.createElement("h1")
// heading.innerHTML="Hello World";
// let root = document.getElementById("root").appendChild(heading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World React",
// );

// const title = (
//   <h1>Hello World</h1>
// );

// const Heading = () => {
//   return (
//   <h1>React Component</h1>
// )};
// const heading = React.createElement("div", { id: "parent" }, [
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am child1 h1 tag"),
//     React.createElement("h1", {}, "i am  child1 h2 tag"),
//   ]),
//   React.createElement("div", { id: "child" }, [
//     React.createElement("h1", {}, "i am child2 h1 tag"),
//     React.createElement("h1", {}, "i am child2 h2 tag"),
//   ]),
// ]);

// const container = React.createElement("div", {}, [
//   React.createElement("h1", {}, "Hello World"),
//   React.createElement("ul", {}, [
//     React.createElement("li", {}, "About us"),
//     React.createElement("li", {}, "Contact"),
//     React.createElement("li", {}, "Home"),
//   ]),
// ]);

// console.log(heading);
// console.log(title);
// console.log(Heading);

const Instamart = lazy(() => import("./src/components/Instamart.jsx"));

function AppLayout() {
  return (
    <div className="main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
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
        path: "/restaurantMenu",
        element: <RestaurantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<h1>Loading....</h1>}>
            <Instamart />
          </Suspense>
        ),
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />,
);
