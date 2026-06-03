import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import Shimmer from "./Shimmer";
import resData from "../utils/mockData";
import { useState } from "react";


const Body = () => {
  let [restaurantList, setRestaurantList] = useState(resData);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <button className="filter-btn" onClick={() => {
        const filterData = restaurantList.filter((res) => {
          return res.info.avgRating > 4
        });
        setRestaurantList(filterData);
      }
      }>Top Rated Restaurants</button>
      <div className="body-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info}/>
        ))}
      </div>
    </div>
  );
};

export default Body;
