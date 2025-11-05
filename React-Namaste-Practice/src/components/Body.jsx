import React, { useState, useEffect } from "react";
// import Dynamic from "./Dynamic.jsx";
// import { restaurantData } from "../constants.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { NavigationType } from "react-router-dom";
import { NavLink } from "react-router-dom";

// function filterData(searchText, restaurants) {
//   let filterData = restaurants.filter((restaurant) =>
//     restaurant.name.toLowerCase().includes(searchText.toLowerCase())
//   );
//   return filterData;
// }

// const searchResult = "true";

const Body = () => {
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);

  // const [search, setSearch] = useState("True");

  // function changeBoolean(currentVal) {
  //   if (currentVal == "true") {
  //     setSearch("False");
  //   } else if (currentVal == "false") {
  //     setSearch("True");
  //   }
  // }

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/search/v3?lat=13.0035068&lng=77.5890953&str=Banana%20Leaf&trackingId=3008b9e9-845e-715a-e069-f2ef56971fc1&submitAction=ENTER&queryUniqueId=eeb9b741-2a11-dde6-bd87-bbf9072ce4d6"
      );
      const json = await data.json();
      const restaurantArray =
        json.data?.cards[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards[1]?.card?.card?.restaurants.map(
          (c) => c?.info
        );
      setFilteredRestaurants(restaurantArray);

      setAllRestaurants(restaurantArray || []);
    } catch (err) {}
  }

  function filterData(searchText, allRestaurants) {
    return allRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }
  // if (!allRestaurants.length === 0) {
  //   <Shimmer />;
  // } else {

  // }

  // async function getRestaurants() {
  //   try {
  //     const data = await fetch(
  //       "https://www.swiggy.com/dapi/restaurants/search/v3?lat=18.9690247&lng=72.8205292&str=banglore&trackingId=4a0f1243-faea-e50e-3094-ebc13eaea56c&submitAction=ENTER&queryUniqueId=be51db7c-2fbd-c0a7-a42e-0f5b05e3f4df"
  //     );
  //     const json = await data.json();
  //     // console.log(json);

  //     setRestaurants(
  //       json?.data?.cards[0]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards
  //         ?.restaurants
  //     );

  // const apiRestaurants =
  //   json?.data?.cards?.[1]?.groupedCard?.cardGroupMap?.RESTAURANT?.cards?.map(
  //     (r) => r.card.card.info
  //   ) || [];

  // if (apiRestaurants.length > 0) {
  //   setRestaurants(apiRestaurants);
  // }
  //   } catch (err) {
  //     console.log(err);
  //   }
  // }

  // let searchText = "KFC";
  // console.log(searchInput);
  // const searchClick = false;

  return allRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="search-container">
        {/* <div>
          <button onClick={() => changeBoolean(search.toLowerCase())}>
            Search
          </button>
          {search}
        </div> */}
        <input
          type="text"
          className="search-input"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            if (searchText.trim() === "") {
              setFilteredRestaurants(allRestaurants);
            } else {
              let data = filterData(searchText, allRestaurants);
              setFilteredRestaurants(data);
            }
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurant">
        {filteredRestaurants.length === 0 ? (
          <h1>No Data Found</h1>
        ) : (
          filteredRestaurants.map((res) => (
            <NavLink to={"/restaurant/" + res?.id}>
              <RestaurantCard restaurant={res}/>
            </NavLink>
          ))
        )}
        {/* <Dynamic /> */}
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
