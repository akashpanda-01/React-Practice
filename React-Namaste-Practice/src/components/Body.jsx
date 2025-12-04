import React, { useState } from "react";

import RestaurantCard, { withPromotedLabel } from "./RestaurantCard.jsx";
import Shimmer from "./Shimmer.jsx";
import { NavLink } from "react-router-dom";
import "./Body.css";
import useOnlineStatus from "../utils/useOnlineStatus.jsx";
import useRestaurant from "../utils/useRestaurantsa.jsx";
// import { restaurantData } from "../utils/constants.jsx";

// function filterData(searchText, restaurants) {
//   let filterData = restaurants.filter((restaurant) =>
//     restaurant.name.toLowerCase().includes(searchText.toLowerCase())
//   );
//   return filterData;
// }

// const searchResult = "true";

const Body = () => {
  const [searchText, setSearchText] = useState("");

  // const [search, setSearch] = useState("True");

  // function changeBoolean(currentVal) {
  //   if (currentVal == "true") {
  //     setSearch("False");
  //   } else if (currentVal == "false") {
  //     setSearch("True");
  //   }
  // }

  const { allRestaurants, filteredRestaurants, setFilteredRestaurants } =
    useRestaurant();

  function filterData(searchText, allRestaurants) {
    return allRestaurants.filter((restaurant) =>
      restaurant.name.toLowerCase().includes(searchText.toLowerCase())
    );
  }

  function filteredRestaurant() {
    const filtered = allRestaurants.filter((data) => data?.avgRating >= 4.2);
    console.log(filtered);
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

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <h1>You Are Offline</h1>;

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
          type="search"
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
        <button className="rated-btn" onClick={filteredRestaurant}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="restaurant">
        {filteredRestaurants.length === 0 ? (
          <h1>No Data Found</h1>
        ) : (
          filteredRestaurants.map((res) => (
            <NavLink to={"/restaurant/" + res?.id} key={res?.id}>
              {res?.promoted ? (
                <RestaurantCardPromoted restaurant={res} />
              ) : (
                <RestaurantCard restaurant={res} />
              )}
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
