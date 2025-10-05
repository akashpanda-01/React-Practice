import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { style: { color: "red"}, key: "h1"},
//   "Namaste React"
// );
// const heading2 = React.createElement(
//   "h1",
//   { style: { color: "blue"}, key: "h2"},
//   "Hello React World"
// );

// const container = React.createElement(
//   "div",
//   { id: "container" },
//   React.createElement("ul", {}, [
//     React.createElement("li", { key: "1" }, "About us"),
//     React.createElement("li", { key: "2" }, "Menu"),
//   ])
// );

// const heading = <h1 id="title" key="heading">Namaste React</h1>;

// const header1 = function () {
//   return <h1 id="title" key="header1">Hello Jiii</h1>;
// };

// const Header = function () {
//   return <h1 id="title" key="Header">World</h1>;
// };

const Title = () => {
  return (
    <a href="/">
      <img
        id="logo"
        alt="logo"
        src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
      />
    </a>
  );
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

let AppLayout = () => {
  return (
    <div>
      <Header />
      <Foo
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
