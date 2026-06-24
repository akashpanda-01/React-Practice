import { useState, useEffect } from "react";
import { API_MENU } from "./Constant";

function useFilterRestaurant() {
  const [filterRestaurant, setFilterRestaurant] = useState([]);
  const [allRestaurants, setAllRestaurants] = useState([]);

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    try {
      const data = await fetch(API_MENU);
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
  return { filterRestaurant, allRestaurants, setAllRestaurants, setFilterRestaurant};
}

export default useFilterRestaurant;
