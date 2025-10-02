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

const container = React.createElement(
  "div",
  { id: "container" },
  React.createElement("ul", {}, [
    React.createElement("li", { key: "1" }, "About us"),
    React.createElement("li", { key: "2" }, "Menu"),
  ])
);

const heading = <h1 id="title" key="heading">Namaste React</h1>;

const Header = function () {
  return <h1 id="title" key="Header">World</h1>;
};
const header1 = function () {
  return <h1 id="title" key="header1">Hello Jiii</h1>;
};

// Composing Component
let HeadingComponent = () => {
  return (
    <div>
      {heading},
      <Header />
      {header1()}
      <h1>Hello World</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render([container, heading, <HeadingComponent />]);
