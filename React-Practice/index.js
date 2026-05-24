import React from "react";
import ReactDOM from "react-dom/client";
// let heading = document.createElement("h1")
// heading.innerHTML="Hello World";
// let root = document.getElementById("root").appendChild(heading);

// const heading = React.createElement(
//   "h1",
//   { id: "heading" },
//   "Hello World React",
// );
const heading = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am child1 h1 tag"),
    React.createElement("h1", {}, "i am  child1 h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "i am child2 h1 tag"),
    React.createElement("h1", {}, "i am child2 h2 tag"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root")).render(
  heading,
);