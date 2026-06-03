import React from "react";
import "./RestaurantCard.css";
import CDN from "../utils/Constant.jsx";

const RestaurantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
      <div className="restaurant-card">
        <img
          alt="cardImg-logo"
          className="cardImg-logo"
          src={CDN + cloudinaryImageId}
        />
        <h2>{name}</h2>
        <h3>Cuisines: {cuisines}</h3>
        <h4>{avgRating} Star</h4>
      </div>
  );
};

export default RestaurantCard;
