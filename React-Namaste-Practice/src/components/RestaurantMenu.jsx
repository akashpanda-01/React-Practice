import React from "react";
import Shimmer from "./Shimmer.jsx";
// import swiggyMenuMock from "../utils/swiggyMenuMock.jsx";

// import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);
  // console.log("ID from Params", resId);

  async function getRestaurantInfo() {
    try {
      // const PROXY = "https://corsproxy.io/?";
      const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${resId}`;
      const data = await fetch(url);
      const json = await data.json();

      // console.log(json);

      // const restaurantInfo = swiggyMenuMock?.data?.cards?.find(
      //   (c) => c?.card?.card?.info
      // )?.card?.card?.info;

      // const restaurantInfo = json?.data?.cards?.find((c) => c?.card?.card?.info)
      //   ?.card?.card?.info;

      const restaurantInfo = json.;
      console.log(restaurantInfo);

      // const restaurantMenu = restaurantInfo?.
      setMenu(restaurantInfo);
    } catch (err) {
      console.log(err);
    }
  }

  if (!menu) {
    return <Shimmer />;
  }

  console.log(menu);
  return (
    <div>
      <h1>Restaurant id : {resId}</h1>
      <h2>{menu?.strMeal}</h2>
      {menu?.strMealThumb && (
        <img src={IMG_CDN_URL + menu.cloudinaryImageId} alt="restaurant" />
      )}
      {/* {menu?.cuisines?.map()} */}
    </div>
  );
};

export default RestaurantMenu;
