import React from "react";
import { IMG_CDN_URL } from "../constants";
import "./RestaurantCard.css";

const RestaurantCard = ({ restaurant }) => {
  // console.log(restaurant)
  return (
    <>
      <div id="card">
        <img
          // src={`https://media-assets.swiggy.com/swiggy/image/upload/${props.resturant.data.cloudinaryImageId}`}
          src={
            restaurant.cloudinaryImageId
              ? IMG_CDN_URL + restaurant?.cloudinaryImageId
              : null
          }
          alt={restaurant?.name}
        />
        {/* <h3>{props.resturant.data.name}</h3>
        <h4>{props.resturant.data.cuisines}</h4>
        <h5>{props.resturant.data.avgRating} Stars</h5> */}
        <h3>{restaurant.name}</h3>
        <h4>{restaurant.cuisines?.join(", ")}</h4>
        <h5>{restaurant.avgRating} Stars</h5>
      </div>
    </>
  );
};

export default RestaurantCard;
