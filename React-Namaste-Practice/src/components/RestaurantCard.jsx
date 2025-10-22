import React from "react";
import { IMG_CDN_URL } from "../constants";


const RestaurantCard = ({ restaurant }) => {
  return (
    <>
      <div id="card">
        <img
          // src={`https://media-assets.swiggy.com/swiggy/image/upload/${props.resturant.data.cloudinaryImageId}`}
          src={ IMG_CDN_URL + restaurant.card.data.cloudinaryImageId}
        />
        {/* <h3>{props.resturant.data.name}</h3>
        <h4>{props.resturant.data.cuisines}</h4>
        <h5>{props.resturant.data.avgRating} Stars</h5> */}
        <h3>{restaurant.card.data.name}</h3>
        <h4>{restaurant.card.data.cuisines}</h4>
        <h5>{restaurant.card.data.avgRating} Stars</h5>
      </div>
    </>
  );
};

export default RestaurantCard;