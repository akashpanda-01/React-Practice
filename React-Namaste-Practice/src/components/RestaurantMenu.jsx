import React from "react";
// import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../constants";

const RestaurantMenu = () => {
  const [restaurant, setRestaurant] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  console.log("ID from Params", resId);

  async function getRestaurantInfo() {
    try {
      // const PROXY = "https://thingproxy.freeboard.io/fetch/";
      // const url = PROXY + `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=288893&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A635%2C%22primaryRestaurantId%22%3A229%2C%22cloudinaryId%22%3A%22xqwpuhgnsaf18te7zvtv%22%2C%22brandId%22%3A635%2C%22dishFamilyId%22%3A%22846613%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION`;
      const url =`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=288893&catalog_qa=undefined&metaData=%7B%22type%22%3A%22RESTAURANT%22%2C%22data%22%3A%7B%22parentId%22%3A635%2C%22primaryRestaurantId%22%3A229%2C%22cloudinaryId%22%3A%22xqwpuhgnsaf18te7zvtv%22%2C%22brandId%22%3A635%2C%22dishFamilyId%22%3A%22846613%22%2C%22enabled_flag%22%3A1%7D%2C%22businessCategory%22%3A%22SWIGGY_FOOD%22%2C%22displayLabel%22%3A%22Restaurant%22%7D&submitAction=SUGGESTION`;
      const data = await fetch(url);
      console.log(data);
      
      const json = await data?.json();
      console.log("king", json);
      setRestaurant(json?.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Restaurant id : {resId}</h1>
      <h2>{restaurant?.name}</h2>
      {restaurant?.cloudinaryImageId && (
        <img
          src={IMG_CDN_URL + restaurant.cloudinaryImageId}
          alt="restaurant"
        />
      )}
    </div>
  );
};

export default RestaurantMenu;
