import React from "react";
// import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [menu, setMenu] = useState();
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, [resId]);
  // console.log("ID from Params", resId);

  async function getRestaurantInfo() {
    try {
      
      const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=${resId}&catalog_qa=undefined&submitAction=ENTER`;
      const data = await fetch(url);

      const json = await data?.json();
      setMenu(json?.data?.cards[0]?.card?.card?.info);
      console.log(json?.data?.cards);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Restaurant id : {resId}</h1>
      <h2>{menu?.name}</h2>
      {menu?.cloudinaryImageId && (
        <img src={IMG_CDN_URL + menu.cloudinaryImageId} alt="restaurant" />
      )}
    </div>
  );
};

export default RestaurantMenu;
