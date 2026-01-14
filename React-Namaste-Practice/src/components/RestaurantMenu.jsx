import React from "react";
import Shimmer from "./Shimmer.jsx";
// import swiggyMenuMock from "../utils/swiggyMenuMock.jsx";
import { PUBLIC_API } from "../utils/constants.jsx";

// import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const RestaurantMenu = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const { resId } = useParams();

  // console.log("ResId is", resId);

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);
  // console.log("ID from Params", resId);

  async function getRestaurantInfo() {
    try {
      // const PROXY = "https://corsproxy.io/?";
      const url = PUBLIC_API + resId;
      const data = await fetch(url);
      const json = await data.json();

      // console.log(json);

      // const restaurantInfo = swiggyMenuMock?.data?.cards?.find(
      //   (c) => c?.card?.card?.info
      // )?.card?.card?.info;

      // const restaurantInfo = json?.data?.cards?.find((c) => c?.card?.card?.info)
      //   ?.card?.card?.info;

      setMeals(json?.meals || []);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  if(loading){
    return <Shimmer />
  }

  if (!meals.length) {
    return <h1>No Meal Found</h1>
  }

  return (
    <div>
      <h1>Restaurant Data</h1>

      {meals.map((meal) => (
        <div key={meal.idMeal}>
          <h2>{meal?.strMeal}</h2>
          {meal?.strMealThumb && (
            <img src={meal.strMealThumb} alt="restaurant" />
          )}
          <p>{meal.strInstructions}</p>
        </div>
      ))}
    </div>
  )
};

export default RestaurantMenu;
