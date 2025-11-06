import React from "react";
import "./Shimmer.css";
function Shimmer({ count = 12 }) {
  return (
    <div className="restaurant">
      {Array(count)
        .fill("")
        .map((_, index) => (
          <div className="shimmer-card" key={index}>
            <div className="shimmer-img"></div>
            <div className="shimmer-line short"></div>
            <div className="shimmer-line long"></div>
          </div>
        ))}
    </div>
  );
}

export default Shimmer;
