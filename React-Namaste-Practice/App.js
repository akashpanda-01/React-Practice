import React from "react";
import ReactDOM from "react-dom/client";

// const heading = React.createElement(
//   "h1",
//   { style: { color: "red"}, key: "h1"},
//   "Namaste React"
// );
// const heading2 = React.createElement(
//   "h1",
//   { style: { color: "blue"}, key: "h2"},
//   "Hello React World"
// );

// const container = React.createElement(
//   "div",
//   { id: "container" },
//   React.createElement("ul", {}, [
//     React.createElement("li", { key: "1" }, "About us"),
//     React.createElement("li", { key: "2" }, "Menu"),
//   ])
// );

// const heading = <h1 id="title" key="heading">Namaste React</h1>;

// const header1 = function () {
//   return <h1 id="title" key="header1">Hello Jiii</h1>;
// };

// const Header = function () {
//   return <h1 id="title" key="Header">World</h1>;
// };

const resturantData = [
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      data: {
        id: "375559",
        name: "Priya Restaurant",
        cloudinaryImageId: "fkcm08zqjevtrpy6cisj",
        locality: "Sampur",
        areaName: "Kalinga Nagar",
        costForTwo: "₹250 for two",
        cuisines: ["South Indian", "Indian", "North Indian", "Sweets"],
        avgRating: 4.5,
        parentId: "161363",
        avgRatingString: "4.5",
        totalRatingsString: "23K+",
        promoted: true,
        adTrackingId:
          "cid=33453737~p=0~adgrpid=33453737#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=375559~plpr=COLLECTION~eid=c8ffdbba-4230-4387-9a47-7237b17719f1~srvts=1759811896169~collid=80377",
        sla: {
          deliveryTime: 49,
          lastMileTravel: 8.5,
          serviceability: "SERVICEABLE",
          slaString: "45-55 mins",
          lastMileTravelString: "8.5 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-10-07 23:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "Rxawards/_CATEGORY-North%20Indian.png",
              description: "Delivery!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "Rxawards/_CATEGORY-North%20Indian.png",
                    description: "Delivery!",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹49",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "33453737",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=375559&source=collection&query=Poori",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      data: {
        id: "124810",
        name: "Venus Inn Restaurant",
        cloudinaryImageId: "chpsikawio6otxuyvyab",
        locality: "Buddha Nagar",
        areaName: "Bapuji Nagar",
        costForTwo: "₹250 for two",
        cuisines: ["South Indian", "Indian"],
        avgRating: 4.5,
        veg: true,
        parentId: "222728",
        avgRatingString: "4.5",
        totalRatingsString: "68K+",
        sla: {
          deliveryTime: 30,
          lastMileTravel: 2.1,
          serviceability: "SERVICEABLE",
          slaString: "30-40 mins",
          lastMileTravelString: "2.1 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-10-07 22:00:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {},
            textExtendedBadges: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹29",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=124810&source=collection&query=Poori",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      data: {
        id: "78382",
        name: "Idli Bhavan",
        cloudinaryImageId: "hagqhze7n5xnp4nzfvnm",
        locality: "Patia",
        areaName: "Chandrasekharpur",
        costForTwo: "₹200 for two",
        cuisines: ["South Indian", "Chinese", "Indian"],
        avgRating: 4.4,
        veg: true,
        parentId: "105861",
        avgRatingString: "4.4",
        totalRatingsString: "21K+",
        promoted: true,
        adTrackingId:
          "cid=33453840~p=1~adgrpid=33453840#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=78382~plpr=COLLECTION~eid=28597446-04df-490a-aead-f2cb179062fd~srvts=1759811896169~collid=80377",
        sla: {
          deliveryTime: 40,
          lastMileTravel: 8.8,
          serviceability: "SERVICEABLE",
          slaString: "40-50 mins",
          lastMileTravelString: "8.8 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-10-07 22:30:00",
          opened: true,
        },
        badges: {},
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {},
          },
        },
        aggregatedDiscountInfoV3: {
          header: "ITEMS",
          subHeader: "AT ₹9",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.8",
            ratingCount: "3.4K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "33453840",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=78382&source=collection&query=Poori",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      data: {
        id: "107331",
        name: "Truptee Restaurant",
        cloudinaryImageId: "ekh3zfwz39sjiabbnmqr",
        locality: "Patharagadia",
        areaName: "Unit 4",
        costForTwo: "₹250 for two",
        cuisines: ["Indian", "Chinese"],
        avgRating: 4.4,
        veg: true,
        parentId: "9486",
        avgRatingString: "4.4",
        totalRatingsString: "7.3K+",
        sla: {
          deliveryTime: 20,
          lastMileTravel: 1.4,
          serviceability: "SERVICEABLE",
          slaString: "15-20 mins",
          lastMileTravelString: "1.4 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-10-07 22:30:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "android/static-assets/icons/big_rx.png",
                    description: "bolt!",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹199",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "4.0",
            ratingCount: "1.7K+",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=107331&source=collection&query=Poori",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      data: {
        id: "964413",
        name: "Mysore Xpress Cafe",
        cloudinaryImageId:
          "RX_THUMBNAIL/IMAGES/VENDOR/2024/9/27/7c74ede8-d5f5-4ace-b4e6-58cc6463e659_964413.jpg",
        locality: "Patia",
        areaName: "Patia",
        costForTwo: "₹250 for two",
        cuisines: ["South Indian", "Snacks"],
        avgRating: 4.5,
        veg: true,
        parentId: "565345",
        avgRatingString: "4.5",
        totalRatingsString: "846",
        promoted: true,
        adTrackingId:
          "cid=33453813~p=2~adgrpid=33453813#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=964413~plpr=COLLECTION~eid=56fc0848-f4a9-4676-8348-fdf6578d91ea~srvts=1759811896169~collid=80377",
        sla: {
          deliveryTime: 36,
          lastMileTravel: 9.6,
          serviceability: "SERVICEABLE",
          slaString: "35-40 mins",
          lastMileTravelString: "9.6 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-10-07 13:00:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        aggregatedDiscountInfoV2: {},
        type: "F",
        badgesV2: {
          entityBadges: {
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
            textExtendedBadges: {},
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "--",
          },
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
        campaignId: "33453813",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=964413&source=collection&query=Poori",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget",
    },
  },
  {
    card: {
      "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
      data: {
        id: "106173",
        name: "Shree Kunj",
        cloudinaryImageId: "fftinvb61fuv5g11pfwq",
        locality: "Ashok Nagar",
        areaName: "Ashok Nagar",
        costForTwo: "₹250 for two",
        cuisines: ["Sweets", "Snacks", "South Indian"],
        avgRating: 4.4,
        veg: true,
        parentId: "21918",
        avgRatingString: "4.4",
        totalRatingsString: "7.6K+",
        sla: {
          deliveryTime: 27,
          lastMileTravel: 1.7,
          serviceability: "SERVICEABLE",
          slaString: "25-30 mins",
          lastMileTravelString: "1.7 km",
          iconType: "ICON_TYPE_EMPTY",
        },
        availability: {
          nextCloseTime: "2025-10-07 22:40:00",
          opened: true,
        },
        badges: {
          imageBadges: [
            {
              imageId: "android/static-assets/icons/big_rx.png",
              description: "bolt!",
            },
            {
              imageId: "v1695133679/badges/Pure_Veg111.png",
              description: "pureveg",
            },
          ],
        },
        isOpen: true,
        type: "F",
        badgesV2: {
          entityBadges: {
            textExtendedBadges: {},
            textBased: {},
            imageBased: {
              badgeObject: [
                {
                  attributes: {
                    imageId: "android/static-assets/icons/big_rx.png",
                    description: "bolt!",
                  },
                },
                {
                  attributes: {
                    imageId: "v1695133679/badges/Pure_Veg111.png",
                    description: "pureveg",
                  },
                },
              ],
            },
          },
        },
        aggregatedDiscountInfoV3: {
          header: "₹125 OFF",
          subHeader: "ABOVE ₹249",
          discountTag: "FLAT DEAL",
          logoCtx: {
            text: "BENEFITS",
          },
        },
        orderabilityCommunication: {
          title: {},
          subTitle: {},
          message: {},
          customIcon: {},
          commsStyling: {},
        },
        differentiatedUi: {
          displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          differentiatedUiMediaDetails: {
            mediaType: "ADS_MEDIA_ENUM_IMAGE",
            lottie: {},
            video: {},
          },
        },
        reviewsSummary: {},
        displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        restaurantOfferPresentationInfo: {},
        externalRatings: {
          aggregatedRating: {
            rating: "3.8",
            ratingCount: "928",
          },
          source: "GOOGLE",
          sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
        },
        ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
      },
      analytics: {},
      cta: {
        link: "swiggy://menu?restaurant_id=106173&source=collection&query=Poori",
        text: "RESTAURANT_MENU",
        type: "DEEPLINK",
      },
      widgetId: "collectionV5RestaurantListWidget",
    },
  },
];

const Title = () => {
  return (
    <a href="/">
      <img
        id="logo"
        alt="logo"
        src="https://i.pinimg.com/736x/e6/17/f1/e617f1bfb9af4d9cf132cd3dec0da072.jpg"
      />
    </a>
  );
};

const Header = () => {
  return (
    <>
      <div id="header">
        <Title />
        <div id="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const ResturantCard = ({resturant}) => {
  // let {} =  /re
  console.log(resturant);
  return (
    <>
      <div id="card">
        <img src={`https://media-assets.swiggy.com/swiggy/image/upload/${resturant.card.data.cloudinaryImageId}`}/>
        <h3>{resturant.card.data.name}</h3>
        <h4>{resturant.card.data.cuisines}</h4>
        <h5>{resturant.card.data.avgRating} Stars</h5>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <div className="resturant">
      <ResturantCard resturant={resturantData[0]} />
      <ResturantCard resturant={resturantData[1]} />
      <ResturantCard resturant={resturantData[2]} />
      <ResturantCard resturant={resturantData[3]} />
      <ResturantCard resturant={resturantData[4]} />
      <ResturantCard resturant={resturantData[5]} />
    </div>
  );
};

const Footer = () => {
  return <h3>Hello World</h3>;
};

let AppLayout = () => {
  return (
    <div>
      <Header />
      <Body />
      <Footer />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
