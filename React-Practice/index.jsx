import React from "react";
import ReactDOM from "react-dom/client";
// let heading = document.createElement("h1")
// heading.innerHTML="Hello World";
// let root = document.getElementById("root").appendChild(heading);

const heading = React.createElement(
  "h1",
  { id: "heading" },
  "Hello World React",
);

const title = (
  <h1>Hello World</h1>
);

const Heading = () => {
  return (
  <h1>React Component</h1>
)};
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

const container = React.createElement("div", {}, [
  React.createElement("h1", {}, "Hello World"),
  React.createElement("ul", {}, [
    React.createElement("li", {}, "About us"),
    React.createElement("li", {}, "Contact"),
    React.createElement("li", {}, "Home"),
  ]),
]);

console.log(heading);
console.log(title);
console.log(Heading);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  container,
);
