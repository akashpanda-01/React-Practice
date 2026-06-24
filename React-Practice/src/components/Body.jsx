import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import Shimmer from "./Shimmer";
import RestaurantMenu from "./RestaurantMenu";
import { NavLink } from "react-router-dom";
import useFilterRestaurant from "../utils/useFilterRestaurant";
import filterData from "../utils/useFilterData";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  const { filterRestaurant, allRestaurants, setFilterRestaurant } =
    useFilterRestaurant();
  // const filterData = useFilterText(searchText, allRestaurants);

  const isOnline = useOnlineStatus();
  if (!isOnline) {
    return (
      <h1 className={"status"}>
        🔴 You are Offline, Please Check Your Connection
      </h1>
    );
  }
  // if (filterRestaurant.length === 0) return <h1>No Restaurant Match..</h1>;
  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div>
      <input
        type="text"
        className="search-input"
        placeholder="Search Your Favorites"
        onChange={(e) => {
          setSearchText(e?.target?.value);
        }}
      />

      <button
        className="search-btn"
        onClick={() => {
          let data = filterData(searchText, allRestaurants);
          setFilterRestaurant(data);
        }}
      >
        Search
      </button>
      <button
        className="filter-btn"
        onClick={() => {
          const filterRes = allRestaurants.filter((res) => {
            return res.info.avgRating > 4;
          });
          setFilterRestaurant(filterRes);
        }}
      >
        Top Rated Restaurants
      </button>
      <div className="body-container">
        {Array.isArray(allRestaurants) &&
          filterRestaurant.map((restaurant) => (
            <NavLink to={"/restaurantMenu"} key={restaurant?.info?.id}>
              <RestaurantCard {...restaurant?.info} />
            </NavLink>
            // <RestaurantMenu RestaurantCard key={restaurant?.info?.id}/>
          ))}
      </div>
    </div>
  );
};

export default Body;
