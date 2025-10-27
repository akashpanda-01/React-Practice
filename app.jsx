import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header.jsx";
import Body from "./src/components/Body.jsx";
import Footer from "./src/components/Footer.jsx";

let AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
