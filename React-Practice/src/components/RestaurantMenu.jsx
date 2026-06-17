import { useState, useEffect } from "react";
import { resMenu } from "../utils/mockData";
import "./RestaurantMenu.css";
import { MenuURL } from "../utils/Constant";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(resMenu);
  // console.log(resMenu);

  return (
    <div className="menuContainer">
      {menu.map((item) => {
        const { name, imageId, price, id, ratings } = item?.card?.info;

        return (
          <div className="menuCard" key={id}>
            <img className="menuImg" src={MenuURL+imageId} alt={name} />

            <div className="menuInfo">
              <h2>{name}</h2>
              <div className="price">₹{price / 100}</div>
              <div className="rating">★ {ratings.rating}</div>
            </div>

            <button className="addBtn">ADD</button>
          </div>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
