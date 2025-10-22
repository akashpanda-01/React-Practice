import React, { useState } from "react";
import Dynamic from "./Dynamic.jsx";
import { restaurantData } from "../constants.jsx";
import RestaurantCard from "./RestaurantCard.jsx";

const Body = () => {
  const [searchInput, setSearchInput] = useState("KFC");
  const [restaurant,, setSearchText] = useState()
  // let searchText = "KFC";
  console.log(searchInput);
  const data = function filterData(){

  }
  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            filterData();
          }}
        >
          Search
        </button>
        {searchInput}
      </div>
      <div className="restaurant">
        <Dynamic />
        <Dynamic />
        <Dynamic />
        <Dynamic />
        <Dynamic />
        {restaurantData.map((res, index) => (
          <RestaurantCard key={index} restaurant={res} />
        ))}
        {/* <RestaurantCard {...restaurantData[0].card} />
      <RestaurantCard {...restaurantData[1].card} />
      <RestaurantCard {...restaurantData[2].card} />
      <RestaurantCard {...restaurantData[3].card} />
      <RestaurantCard {...restaurantData[4].card} /> */}
      </div>
    </>
  );
};

export default Body;
