import React from "react";
import "./RestaurantCard.css";


const CDN = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const RestaurantCard = ({data}) => {
  return (
    <div className="restaurant-card">
      <img
        alt="burger-logo"
        className="burger-logo"
        src={CDN+data?.info?.cloudinaryImageId}
      />
      <h2>{data?.info?.name}</h2>
      <h3>Cuisines: {data?.info?.cuisines}</h3>
      <h4>4 Star Rating</h4>
    </div>
  );
};

export default RestaurantCard;
