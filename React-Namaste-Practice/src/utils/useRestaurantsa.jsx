import React, { useState, useEffect } from "react";

const useRestaurant = () => {
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

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
  return ({
    allRestaurants,
    filteredRestaurants,
    setFilteredRestaurants
  })
};

export default useRestaurant;
