import React from "react";
import { dynamicaData } from "../constants";

const Dynamic = () => {
  const { name, image, cusines, rating } = dynamicaData;
  return (
    <>
      <div id="dynamic">
        <img src={image} />
        <h2>{name}</h2>
        <h3>{cusines.join(", ")}</h3>
        <h4>{rating}</h4>
      </div>
    </>
  );
};

export default Dynamic;