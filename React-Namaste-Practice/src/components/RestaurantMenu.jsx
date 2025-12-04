import React from "react";
// import { IMG_CDN_URL } from "../constants";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../utils/constants";
const RestaurantMenu = () => {
  const [menu, setMenu] = useState(null);
  const { resId } = useParams();

  useEffect(() => {
    getRestaurantInfo();
  }, []);
  console.log("ID from Params", resId);

  async function getRestaurantInfo() {
    try {
      // const PROXY = "https://thingproxy.freeboard.io/fetch/";
      const url = `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=274797&catalog_qa=undefined&submitAction=ENTER`
      const data = await fetch(url);
      console.log("Hello", data );
      
      const json = await data?.json();
      console.log("king", json);
      setMenu(json?.data);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div>
      <h1>Restaurant id : {resId}</h1>
      <h2>{menu?.name}</h2>
      {menu?.cloudinaryImageId && (
        <img
          src={IMG_CDN_URL + menu.cloudinaryImageId}
          alt="restaurant"
        />
      )}
    </div>
  );
};

export default RestaurantMenu;
