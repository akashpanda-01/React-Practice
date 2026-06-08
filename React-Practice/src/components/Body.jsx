import React, { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.css";
import Shimmer from "./Shimmer";
// import resData from "../utils/mockData";

function filterData(searchText, allRestaurants) {
  if (!searchText.trim()) {
    return allRestaurants;
  }

  return allRestaurants.filter((restaurant) =>
    restaurant?.info?.name?.toLowerCase().includes(searchText.toLowerCase()),
  );
}

const Body = () => {
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=13.0035068&lng=77.5890953&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
      );
      const json = await data.json();

      const restaurant =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      // setRestaurantList(restaurant);
      setAllRestaurants(restaurant);
      setFilterRestaurant(restaurant);
    } catch (error) {
      console.log("Failled To Fetch Restaurants", error);
    }
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
        onChange={(e) =>{
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
            <RestaurantCard key={restaurant?.info?.id} {...restaurant?.info} />
          ))}
      </div>
    </div>
  );
};

export default Body;
