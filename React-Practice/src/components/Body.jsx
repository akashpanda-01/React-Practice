import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import Shimmer from "./Shimmer";
import resData from "../utils/mockData";
import { useState } from "react";

function filterData(searchText, allRestaurants) {
  if(!searchText.trim()){
   return allRestaurants;
  };

  const filterData = allRestaurants.filter((restaurant) => (
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase())
  ));
  return filterData;
};

const Body = () => {
  let [restaurantList, setRestaurantList] = useState(resData);
  let [searchText, setSearchText] = useState("");
  let [allRestaurants] = useState(resData);

  return restaurantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Your Favorites"
        onChange={(e) => setSearchText(e?.target?.value)}
      />

      <button
        className="search-btn"
        onClick={() => {
          let data = filterData(searchText, allRestaurants);
          setRestaurantList(data);
        }
      }
      >
        Search
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          const filterRes = restaurantList.filter((res) => {
            return res.info.avgRating > 4;
          });
          setRestaurantList(filterRes);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="body-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
