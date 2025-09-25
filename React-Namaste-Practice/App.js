const heading = React.createElement("h1", {style: {color: "red"}}, "Namaste React");
const heading2 = React.createElement("h1", {style:{color:"blue"}}, "Hello React World");

const container = React.createElement("div", {}, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(container);