import { useState, useEffect } from "react";
import { resMenu } from "../utils/mockData";

const RestaurantMenu = () => {
  const [menu, setMenu] = useState(resMenu);
  console.log(resMenu);

  //   const {name, imageId, price, id, ratings} = menu?.card?.info;

  return (
    <div>
      {resMenu.map((item) => (
        <div className={"menuCard"} key={item.card.info.id}>
          <h1>Name: {item.card.info.name}</h1>,
          <div>Price: {item.card.info.price}</div>,
          <p>Rating: {item.card.info.ratings.rating}</p>
        </div>
      ))}
    </div>
  );
};

export default RestaurantMenu;
