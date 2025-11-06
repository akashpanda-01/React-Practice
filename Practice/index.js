// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const RestaurantMenu = () => {
  // const { restaurantId } = useParams();
  // const [menu, setMenu] = useState(null);

  // useEffect(() => {
  //   getRestaurantInfo();
  // }, []);

  async function getRestaurantInfo() {
  try {
    const PROXY = "https://thingproxy.freeboard.io/fetch/";
    const url =
      PROXY +
      `https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0035068&lng=77.5890953&restaurantId=642768`;

    const data = await fetch(url);
    const json = await data.json();   // ✅ Will work now
    console.log( "Hello World" ,json);

    setMenu(json?.data);
  } catch (err) {
    console.error("Error fetching:", err);
  }
}


  // if (!menu) return <h1>Loading...</h1>;

  // return (
  //   <div>
  //     <h1>{menu.cards[0].card.card.info.name}</h1>

  //     <h2>Dishes</h2>
  //     {menu.cards[2].groupedCard.cardGroupMap.REGULAR.cards
  //       .filter((c) => c.card.card.itemCards)
  //       .map((category) => (
  //         <div>
  //           <h3>{category.card.card.title}</h3>

  //           {category.card.card.itemCards.map((item) => (
  //             <div>
  //               <h4>{item.card.info.name}</h4>
  //               <p>₹{item.card.info.price / 100}</p>
  //               <p>{item.card.info.description}</p>
  //             </div>
  //           ))}
  //         </div>
  //       ))}
  //   </div>
  // );
// };

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<RestaurantMenu />);