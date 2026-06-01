import React from "react";
import RestaurantCard from "./RestaurantCard";
import "./Body.css";

const restaurants = [
  {
    info: {
      id: "14555",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/2a4c6a60-e313-4a2c-ba46-669ea2791e5e_14555.JPG",
      locality: "RT Nagar",
      areaName: "RT Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.1,
      parentId: "721",
      avgRatingString: "4.1",
      totalRatingsString: "22K+",
      sla: {
        deliveryTime: 45,
        lastMileTravel: 4,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 05:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.4",
          ratingCount: "2.1K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-rt-nagar-rest14555",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "376716",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Ms Ramaiah Nagar",
      areaName: "Sanjay Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.4,
      parentId: "61955",
      avgRatingString: "4.4",
      totalRatingsString: "7.7K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹140",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-ms-ramaiah-nagar-sanjay-nagar-rest376716",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "376843",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_376843.JPG",
      locality: "Ms Ramaiah Nagar",
      areaName: "Sanjay Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
      avgRating: 4.4,
      parentId: "434792",
      avgRatingString: "4.4",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹140",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/big-bowl-ms-ramaiah-nagar-sanjay-nagar-rest376843",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "64681",
      name: "Homely",
      cloudinaryImageId: "aou7zch2ztn18ttry0oa",
      locality: "Hebbala",
      areaName: "R.T. Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "South Indian",
        "Beverages",
        "Desserts",
        "Thalis",
      ],
      avgRating: 4,
      parentId: "4043",
      avgRatingString: "4.0",
      totalRatingsString: "37K+",
      sla: {
        deliveryTime: 56,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "55-65 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "C",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/homely-hebbala-r-t-nagar-rest64681",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "333800",
      name: "RNR Biryani - Taste of 1953",
      cloudinaryImageId: "n7has2d95kl7boo33ogy",
      locality: "ITI Layout",
      areaName: "New BEL Road",
      costForTwo: "₹350 for two",
      cuisines: ["Biryani", "South Indian", "Kebabs"],
      avgRating: 4.5,
      parentId: "11620",
      avgRatingString: "4.5",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 5.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "5.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
            description: "Best in Naati Style Biryani",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Naati Style Biryani",
                  imageId:
                    "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹89",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/rnr-biryani-taste-of-1953-iti-layout-new-bel-road-rest333800",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "560792",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b945185d-fa16-415e-a378-36e9ee18ca30_560792.JPG",
      locality: "Ganganagar",
      areaName: "RT Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "7.9K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-ganganagar-rt-nagar-rest560792",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "726204",
      name: "Blue Tokai Coffee Roasters",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/24/7a4a5ef1-88de-4cb6-bf40-67daa2de302f_726204.JPG",
      locality: "Sadhashiv Nagar",
      areaName: "Sadashiva Nagar",
      costForTwo: "₹600 for two",
      cuisines: ["Cafe", "Coffee", "Beverages"],
      avgRating: 4.5,
      parentId: "2682",
      avgRatingString: "4.5",
      totalRatingsString: "981",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹699",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/blue-tokai-coffee-roasters-sadhashiv-nagar-sadashiva-nagar-rest726204",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "12810",
      name: "A2B - Adyar Ananda Bhavan",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/1/7/c451c9d3-a539-42b8-9a3b-21d585c7fe6d_12810.JPG",
      locality: "RT Nagar",
      areaName: "Sanjay Nagar, New BEL Road",
      costForTwo: "₹300 for two",
      cuisines: ["South Indian", "North Indian", "Sweets", "Chinese"],
      avgRating: 4.5,
      veg: true,
      parentId: "22",
      avgRatingString: "4.5",
      totalRatingsString: "48K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 22:30:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
            description: "Best in South Indian",
          },
          {
            imageId:
              "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
            description: "Best in Indian Sweets",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in South Indian",
                  imageId:
                    "brand_cards/Badges%202026/32_Best%20in%20South%20Indian2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Indian Sweets",
                  imageId:
                    "brand_cards/Badges%202026/57_Best%20in%20Indian%20Sweets2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹29",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
          ratingCount: "8.0K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/a2b-adyar-ananda-bhavan-rt-nagar-sanjay-nagar-new-bel-road-rest12810",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17304",
      name: "KFC",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/11/b796a421-70e4-4ec1-8375-3c9bbe2124ff_17304.JPG",
      locality: "Ganganagar",
      areaName: "R T Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Fast Food", "Rolls & Wraps"],
      avgRating: 3.9,
      parentId: "547",
      avgRatingString: "3.9",
      totalRatingsString: "24K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/kfc-ganganagar-r-t-nagar-rest17304",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "23796",
      name: "Domino's Pizza",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/5/15/8a2afd17-5022-4b40-b399-5047d59c1948_23796.JPG",
      locality: "Cunningham Road",
      areaName: "Central Bangalore",
      costForTwo: "₹400 for two",
      cuisines: ["Pizzas", "Italian", "Pastas", "Desserts"],
      avgRating: 4.3,
      parentId: "2456",
      avgRatingString: "4.3",
      totalRatingsString: "18K+",
      sla: {
        deliveryTime: 20,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "15-20 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
            description: "Best in Bolt",
          },
          {
            imageId: "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
            description: "Best in Pizza",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Bolt",
                  imageId:
                    "brand_cards/Badges%202026/40_Best%20in%20Bolt2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Pizza",
                  imageId:
                    "brand_cards/Badges%202026/72_Best%20in%20Pizza2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹59",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/dominos-pizza-cunningham-road-central-bangalore-rest23796",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "231188",
      name: "Taco Bell",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/7/10/a175a8d3-aa15-4a6e-8f4a-eda1f03fdaef_231188.JPG",
      locality: "Sampige Road",
      areaName: "Malleshwaram",
      costForTwo: "₹300 for two",
      cuisines: ["Mexican", "Fast Food", "Snacks"],
      avgRating: 4.4,
      parentId: "1557",
      avgRatingString: "4.4",
      totalRatingsString: "5.8K+",
      sla: {
        deliveryTime: 51,
        lastMileTravel: 5,
        serviceability: "SERVICEABLE",
        slaString: "50-60 mins",
        lastMileTravelString: "5.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/51_Best%20in%20Global%20Flavours2026.png",
            description: "Best in Global Flavours",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Global Flavours",
                  imageId:
                    "brand_cards/Badges%202026/51_Best%20in%20Global%20Flavours2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "3.5",
          ratingCount: "318",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/taco-bell-sampige-road-malleshwaram-rest231188",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "3435",
      name: "Nandhini Deluxe",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/11/3/2e50754a-79d2-47e0-a90d-9249634476c7_3435.jpg",
      locality: "Ganganagar",
      areaName: "RT Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["North Indian", "Chinese", "Andhra", "Biryani"],
      avgRating: 4.3,
      parentId: "2451",
      avgRatingString: "4.3",
      totalRatingsString: "23K+",
      sla: {
        deliveryTime: 30,
        lastMileTravel: 2.9,
        serviceability: "SERVICEABLE",
        slaString: "25-30 mins",
        lastMileTravelString: "2.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "40% OFF",
        subHeader: "UPTO ₹80",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.1",
          ratingCount: "6.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/nandhini-deluxe-ganganagar-rt-nagar-rest3435",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "27809",
      name: "Natural Ice Cream",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/3/21/d2dec7c2-dc23-48fd-b829-f41d233da22f_27809.jpg",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹150 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.8,
      parentId: "2093",
      avgRatingString: "4.8",
      totalRatingsString: "13K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 4.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "30% OFF",
        subHeader: "UPTO ₹60",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.5",
          ratingCount: "2.6K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/natural-ice-cream-malleshwaram-rest27809",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "776939",
      name: "The Belgian Waffle Co.",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/16/bcb05119-9e50-44fb-a5dd-9a66aeb57929_776939.jpg",
      locality: "KODHANDARAMAPURAM",
      areaName: "MALLESHWARM",
      costForTwo: "₹200 for two",
      cuisines: ["Waffle", "Desserts", "Ice Cream", "Beverages"],
      avgRating: 4.5,
      veg: true,
      parentId: "2233",
      avgRatingString: "4.5",
      totalRatingsString: "1.1K+",
      sla: {
        deliveryTime: 41,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 03:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹75 OFF",
        subHeader: "ABOVE ₹599",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/the-belgian-waffle-co-kodhandaramapuram-malleshwarm-rest776939",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "333153",
      name: "Baskin Robbins - Ice Cream Desserts",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/4/24/6b6c778b-c9bf-4027-9541-ca1ff970cead_333153.JPG",
      locality: "Dinnur Main Road",
      areaName: "R T Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Desserts", "Ice Cream"],
      avgRating: 4.5,
      veg: true,
      parentId: "5588",
      avgRatingString: "4.5",
      totalRatingsString: "889",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹51",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/baskin-robbins-ice-cream-desserts-dinnur-main-road-r-t-nagar-rest333153",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "6758",
      name: "Beijing Bites",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/25/30fa9e0b-bfe8-439f-b648-78987ceade91_6758.jpg",
      locality: "RT Nagar",
      areaName: "RT Nagar",
      costForTwo: "₹450 for two",
      cuisines: ["Chinese", "Thai"],
      avgRating: 4.4,
      parentId: "103",
      avgRatingString: "4.4",
      totalRatingsString: "20K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.9,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.9 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹100 OFF",
        subHeader: "ABOVE ₹199",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
          ratingCount: "699",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/beijing-bites-rt-nagar-rest6758",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "17589",
      name: "Polar Bear",
      cloudinaryImageId: "57262fe3839f0bff174f3d7e7cc8a2b4",
      locality: "Deve Gowda Nagar",
      areaName: "R.T. Nagar",
      costForTwo: "₹300 for two",
      cuisines: ["Ice Cream", "Desserts"],
      avgRating: 4.6,
      veg: true,
      parentId: "726",
      avgRatingString: "4.6",
      totalRatingsString: "11K+",
      sla: {
        deliveryTime: 32,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 00:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
            description: "Best in Ice Cream",
          },
        ],
      },
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Ice Cream",
                  imageId:
                    "brand_cards/Badges%202026/56_Best%20in%20Ice%20Cream2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/polar-bear-deve-gowda-nagar-r-t-nagar-rest17589",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "577056",
      name: "SMOOR",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/4/15/d98c6530-06c6-4958-81dd-c2f359620b3c_577056.JPG",
      locality: "Armane Nagar",
      areaName: "Malleshwaram",
      costForTwo: "₹450 for two",
      cuisines: [
        "Asian",
        "Burgers",
        "Italian",
        "Thai",
        "Sushi",
        "Salads",
        "Pastas",
        "Pizzas",
        "Mexican",
        "Chinese",
      ],
      avgRating: 4.6,
      parentId: "3506",
      avgRatingString: "4.6",
      totalRatingsString: "1.4K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 2.8,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "2.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        subHeader: "ABOVE ₹159",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/smoor-armane-nagar-malleshwaram-rest577056",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "349727",
      name: "Paris Panini - Gourmet Sandwiches & Wraps",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/1/10/3f84f570-a8c3-4988-a53e-866b2f98d912_349727.jpg",
      locality: "Sanjay Nagar",
      areaName: "Sanjay Nagar, New BEL Road",
      costForTwo: "₹500 for two",
      cuisines: [
        "sandwich",
        "wrap",
        "Fast Food",
        "Pastas",
        "Italian",
        "Salads",
        "Healthy Food",
        "Desserts",
        "Continental",
      ],
      avgRating: 4.7,
      parentId: "21019",
      avgRatingString: "4.7",
      totalRatingsString: "10K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.7,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "4.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId: "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
            description: "Best in Gourmet",
          },
          {
            imageId:
              "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
            description: "Best in Subs & Sandwiches",
          },
          {
            imageId: "newg.png",
            description: "Gourmet",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Gourmet",
                  imageId:
                    "brand_cards/Badges%202026/53_Best%20in%20Gourmet2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Subs & Sandwiches",
                  imageId:
                    "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Gourmet",
                  imageId: "newg.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹175 OFF",
        subHeader: "ABOVE ₹899",
        discountTag: "FLAT DEAL",
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
          lottie: {},
          video: {},
        },
      },
      reviewsSummary: {},
      displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
      restaurantOfferPresentationInfo: {},
      externalRatings: {
        aggregatedRating: {
          rating: "4.3",
          ratingCount: "330",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/paris-panini-gourmet-sandwiches-and-wraps-sanjay-nagar-sanjay-nagar-new-bel-road-rest349727",
      type: "WEBLINK",
    },
  },
  {
    info: {
      id: "176071",
      name: "Brahmins' Thatte Idli",
      cloudinaryImageId: "pe1savupw5miak1g0ylt",
      locality: "Malleshwaram",
      areaName: "Malleshwaram",
      costForTwo: "₹150 for two",
      cuisines: ["South Indian"],
      avgRating: 4.5,
      veg: true,
      parentId: "1312",
      avgRatingString: "4.5",
      totalRatingsString: "9.1K+",
      sla: {
        deliveryTime: 34,
        lastMileTravel: 3,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.0 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 20:46:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      differentiatedUi: {
        displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        differentiatedUiMediaDetails: {
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
          ratingCount: "893",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/brahmins-thatte-idli-malleshwaram-rest176071",
      type: "WEBLINK",
    },
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "952468",
      name: "Pizza Hut",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2026/2/12/094804fe-3096-45c4-9a57-64a13076a65b_952468.JPG",
      locality: "JC Nagar",
      areaName: "JC Nagar",
      costForTwo: "₹350 for two",
      cuisines: ["Pizzas"],
      avgRating: 4.4,
      parentId: "721",
      avgRatingString: "4.4",
      totalRatingsString: "431",
      sla: {
        deliveryTime: 43,
        lastMileTravel: 3.8,
        serviceability: "SERVICEABLE",
        slaString: "40-45 mins",
        lastMileTravelString: "3.8 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      aggregatedDiscountInfoV2: {},
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
          rating: "4.7",
          ratingCount: "666",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/pizza-hut-jc-nagar-rest952468",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "376716",
      name: "Chinese Wok",
      cloudinaryImageId: "e0839ff574213e6f35b3899ebf1fc597",
      locality: "Ms Ramaiah Nagar",
      areaName: "Sanjay Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["Chinese", "Asian", "Tibetan", "Desserts"],
      avgRating: 4.4,
      parentId: "61955",
      avgRatingString: "4.4",
      totalRatingsString: "7.7K+",
      sla: {
        deliveryTime: 37,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹140",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/chinese-wok-ms-ramaiah-nagar-sanjay-nagar-rest376716",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "376843",
      name: "Big Bowl",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/22/deff0d02-ca1d-4ef9-9d62-b0cbeabf33d3_376843.JPG",
      locality: "Ms Ramaiah Nagar",
      areaName: "Sanjay Nagar",
      costForTwo: "₹250 for two",
      cuisines: ["North Indian", "Chinese", "Tibetan", "Desserts"],
      avgRating: 4.4,
      parentId: "434792",
      avgRatingString: "4.4",
      totalRatingsString: "4.0K+",
      sla: {
        deliveryTime: 40,
        lastMileTravel: 4.3,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "4.3 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "70% OFF",
        subHeader: "UPTO ₹140",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/big-bowl-ms-ramaiah-nagar-sanjay-nagar-rest376843",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "64681",
      name: "Homely",
      cloudinaryImageId: "aou7zch2ztn18ttry0oa",
      locality: "Hebbala",
      areaName: "R.T. Nagar",
      costForTwo: "₹200 for two",
      cuisines: [
        "Home Food",
        "South Indian",
        "Beverages",
        "Desserts",
        "Thalis",
      ],
      avgRating: 4,
      parentId: "4043",
      avgRatingString: "4.0",
      totalRatingsString: "37K+",
      sla: {
        deliveryTime: 56,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "55-65 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
            description: "OnlyOnSwiggy",
          },
        ],
      },
      isOpen: true,
      type: "C",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "OnlyOnSwiggy",
                  imageId:
                    "v1690360529/Ratnesh_Badges/Only_on_swiggy_badge_4x.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "60% OFF",
        subHeader: "UPTO ₹120",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/homely-hebbala-r-t-nagar-rest64681",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "1117347",
      name: "Mealy - Your Everyday Meal",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/10/0bf88f5d-9d67-404f-a09c-2735966daaea_1117347.JPG",
      locality: "Hebbala",
      areaName: "R.T. Nagar",
      costForTwo: "₹200 for two",
      cuisines: ["Street Food", "North Indian", "Beverages"],
      avgRating: 3.7,
      parentId: "11705",
      avgRatingString: "3.7",
      totalRatingsString: "6",
      sla: {
        deliveryTime: 63,
        lastMileTravel: 4.4,
        serviceability: "SERVICEABLE",
        slaString: "60-70 mins",
        lastMileTravelString: "4.4 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "50% OFF",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mealy-your-everyday-meal-hebbala-r-t-nagar-rest1117347",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "739910",
      name: "RNR Biryani - Taste of 1953",
      cloudinaryImageId: "67ab83a28847f7a21f473234e07912f8",
      locality: "RT Nagar",
      areaName: "RT Nagar",
      costForTwo: "₹500 for two",
      cuisines: ["Biryani", "South Indian", "Kebabs"],
      avgRating: 4.3,
      parentId: "11620",
      avgRatingString: "4.3",
      totalRatingsString: "4.4K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.7,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.7 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-02 01:00:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId:
              "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
            description: "Best in Naati Style Biryani",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "Best in Naati Style Biryani",
                  imageId:
                    "brand_cards/Badges%202026/86_Best%20in%20Naati%20Style%20Biryani2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹50",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
          rating: "4.7",
          ratingCount: "3.2K+",
        },
        source: "GOOGLE",
        sourceIconImageId: "v1704440323/google_ratings/rating_google_tag",
      },
      ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
    },
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/rnr-biryani-taste-of-1953-rt-nagar-rest739910",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "882679",
      name: "Subway",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/6/12/0df62868-129b-47bf-9f27-50fafcf2a39d_882679.jpg",
      locality: "Aramanenagar",
      areaName: "Sadashivnagar",
      costForTwo: "₹350 for two",
      cuisines: ["sandwich", "Salads", "wrap", "Healthy Food"],
      avgRating: 4.4,
      parentId: "2",
      avgRatingString: "4.4",
      totalRatingsString: "1.8K+",
      sla: {
        deliveryTime: 35,
        lastMileTravel: 3.5,
        serviceability: "SERVICEABLE",
        slaString: "30-35 mins",
        lastMileTravelString: "3.5 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {
        imageBadges: [
          {
            imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
            description: "EatRight",
          },
          {
            imageId:
              "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
            description: "Best in Subs & Sandwiches",
          },
        ],
      },
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {
            badgeObject: [
              {
                attributes: {
                  description: "EatRight",
                  imageId: "Health%20Hub/RX%20BADGE/BADGE2.png",
                  theme: "",
                },
              },
              {
                attributes: {
                  description: "Best in Subs & Sandwiches",
                  imageId:
                    "brand_cards/Badges%202026/79_Best%20in%20Subs%20&%20Sandwiches2026.png",
                  theme: "",
                },
              },
            ],
          },
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "ITEMS",
        subHeader: "AT ₹69",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/subway-aramanenagar-sadashivnagar-rest882679",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
  {
    "@type": "type.googleapis.com/swiggy.presentation.food.v2.Restaurant",
    info: {
      id: "560792",
      name: "McDonald's",
      cloudinaryImageId:
        "RX_THUMBNAIL/IMAGES/VENDOR/2025/10/3/b945185d-fa16-415e-a378-36e9ee18ca30_560792.JPG",
      locality: "Ganganagar",
      areaName: "RT Nagar",
      costForTwo: "₹400 for two",
      cuisines: ["Burgers", "Beverages", "Cafe", "Desserts"],
      avgRating: 4.2,
      parentId: "630",
      avgRatingString: "4.2",
      totalRatingsString: "7.9K+",
      sla: {
        deliveryTime: 36,
        lastMileTravel: 3.6,
        serviceability: "SERVICEABLE",
        slaString: "35-40 mins",
        lastMileTravelString: "3.6 km",
        iconType: "ICON_TYPE_EMPTY",
      },
      availability: {
        nextCloseTime: "2026-06-01 23:59:00",
        opened: true,
      },
      badges: {},
      isOpen: true,
      type: "F",
      badgesV2: {
        entityBadges: {
          imageBased: {},
          textBased: {},
          textExtendedBadges: {},
        },
      },
      aggregatedDiscountInfoV3: {
        header: "₹125 OFF",
        subHeader: "ABOVE ₹549",
        discountTag: "FLAT DEAL",
      },
      orderabilityCommunication: {
        title: {},
        subTitle: {},
        message: {},
        customIcon: {},
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
    analytics: {
      context: "seo-data-53d4dca4-ccf9-46a7-9f93-d927b68e9e63",
    },
    cta: {
      link: "https://www.swiggy.com/city/bangalore/mcdonalds-ganganagar-rt-nagar-rest560792",
      text: "RESTAURANT_MENU",
      type: "WEBLINK",
    },
    widgetId: "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo",
  },
];

const Body = () => {
  return (
    <div className="body-container">
      {restaurants.map((data) => {
        return <RestaurantCard data={data} />;
      })}
    </div>
  );
};

export default Body;
