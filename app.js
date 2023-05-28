import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logoContainer">
                <img className="logo" src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const resData = [
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "375919",
      "name": "Pizza Time",
      "uuid": "28c206a1-3115-4199-917b-ccae77cd26da",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "lu31ld1zskrx348ygfpl",
      "cuisines": [
        "Pizzas",
        "Desserts",
        "Snacks"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 47,
      "minDeliveryTime": 47,
      "maxDeliveryTime": 47,
      "slaString": "47 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "pizza-time-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "SHOP NO 3, VISHAL PALACE, OPP BURHANI HOSPITAL, ANAND KOLIWADA, MUMBRA",
      "locality": "Opp Burhani Hospital",
      "parentId": 724,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6812456~p=1~eid=00000188-5dec-f9c6-7a29-f05a006e010e",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "UPTO ₹45",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "375919",
        "deliveryTime": 47,
        "minDeliveryTime": 47,
        "maxDeliveryTime": 47,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "3.6",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "362505",
      "name": "Noorani Restaurant",
      "uuid": "40c53fe1-44ff-422a-8fb8-81a7b2ed3052",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "oigtelhhhcrzjwlemnkj",
      "cuisines": [
        "North Indian",
        "Indian",
        "Biryani"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 0.800000011920929,
      "slugs": {
        "restaurant": "noorani-restaurant-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop-1/2 , Afreen Apartment,Opp Kausa Kabristan, Kausa Mumbra, Thane 400612",
      "locality": "Opp Kausa Kabristan",
      "parentId": 150058,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.8 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "40% OFF",
        "subHeader": "UPTO ₹80",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "362505",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 0.800000011920929,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.9",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "409750",
      "name": "Asra Fast Food",
      "uuid": "bd9173c6-0182-4bbe-88b9-e9f936cb420f",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "tsz73ppgbdias6fnn52a",
      "cuisines": [
        "Chinese"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 31,
      "minDeliveryTime": 31,
      "maxDeliveryTime": 31,
      "slaString": "31 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "asra-fast-food-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop No.5, Kausar Baug, English School, near Mumbra, Amrut Nagar, Mumbra, Thane, Maharashtra 400612, India",
      "locality": "English School",
      "parentId": 241376,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "ABOVE ₹500",
        "discountTag": "FLAT DEAL",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "409750",
        "deliveryTime": 31,
        "minDeliveryTime": 31,
        "maxDeliveryTime": 31,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "418287",
      "name": "Apsara Ice Creams",
      "uuid": "7c37d867-7989-41a4-96b9-1ca2a5641fed",
      "city": "5",
      "area": "Kalwa",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "hr8vlosrruige52jx55s",
      "cuisines": [
        "Ice Cream",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 23,
      "minDeliveryTime": 23,
      "maxDeliveryTime": 23,
      "slaString": "23 MINS",
      "lastMileTravel": 4.900000095367432,
      "slugs": {
        "restaurant": "apsara-ice-creams-parsik-nagar-kalwa",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop no 6, Moreshwar Apartment, Opp Kalwa Police Station, Old Mumbai Pune Road, Parsik Nagar, Kalwa West, Thane 400605",
      "locality": "Parsik Nagar",
      "parentId": 35219,
      "unserviceable": false,
      "veg": true,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "ribbon": [
        {
          "type": "PROMOTED"
        }
      ],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 4400,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 4400,
        "message": "",
        "title": "Delivery Charge",
        "amount": "4400",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "cid=6735756~p=4~eid=00000188-5dec-f9c6-7a29-f05b006e045a",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "4.9 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹120",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "418287",
        "deliveryTime": 23,
        "minDeliveryTime": 23,
        "maxDeliveryTime": 23,
        "lastMileTravel": 4.900000095367432,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": true,
      "avgRating": "4.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "362200",
      "name": "SAHIL FINE DINE",
      "uuid": "c6e64a3c-99a7-4f83-ab79-a115d77553e5",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "c9etjt0yvv17xsonkge9",
      "cuisines": [
        "North Indian",
        "Chinese",
        "Tandoor",
        "Seafood"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 20,
      "minDeliveryTime": 20,
      "maxDeliveryTime": 20,
      "slaString": "20 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "sahil-fine-dine-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop - 10, Alavi Apartment , Nasheman Colony Kausa Mumbra Thane - 400612",
      "locality": "Alavi Apartment",
      "parentId": 174727,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "362200",
        "deliveryTime": 20,
        "minDeliveryTime": 20,
        "maxDeliveryTime": 20,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "389768",
      "name": "Cele Joy",
      "uuid": "debf54df-7d36-4ce2-b88e-fa34c8b941b7",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "yukrlrj34nwn7fkuyoz7",
      "cuisines": [
        "Bakery",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 0.20000000298023224,
      "slugs": {
        "restaurant": "cele-joy-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop-4, Ground Floor, A Wing, Naseem Baug, Kausa Mumbra, Thane -400612",
      "locality": "Naseem Baug",
      "parentId": 243265,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.2 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "15% OFF",
        "subHeader": "UPTO ₹45",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "389768",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 0.20000000298023224,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "2.3",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "390551",
      "name": "House Of Chaats",
      "uuid": "3c4d2c8b-ea58-4605-b42b-39c5ba2ac55e",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "olblmcos5ettpmj3r4od",
      "cuisines": [
        "Snacks"
      ],
      "tags": [],
      "costForTwo": 20000,
      "costForTwoString": "₹200 FOR TWO",
      "deliveryTime": 45,
      "minDeliveryTime": 45,
      "maxDeliveryTime": 45,
      "slaString": "45 MINS",
      "lastMileTravel": 0.4000000059604645,
      "slugs": {
        "restaurant": "house-of-chaats-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop-H-1, Nasheman Colony, Kausa Mumbra, Thane,400612",
      "locality": "Nasheman Colony",
      "parentId": 247443,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.4 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "390551",
        "deliveryTime": 45,
        "minDeliveryTime": 45,
        "maxDeliveryTime": 45,
        "lastMileTravel": 0.4000000059604645,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "2.7",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "359496",
      "name": "Pizza House",
      "uuid": "e9294ab4-6489-4a2c-a4f2-67569df3ed75",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "rfyn6qxqnc0r7qzgxznj",
      "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 24,
      "minDeliveryTime": 24,
      "maxDeliveryTime": 24,
      "slaString": "24 MINS",
      "lastMileTravel": 0.699999988079071,
      "slugs": {
        "restaurant": "pizza-house-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop-H-1, Nasheman Colony, Kausa Mumbra, Thane",
      "locality": "Nasheman Colony",
      "parentId": 7782,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "0.6 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "359496",
        "deliveryTime": 24,
        "minDeliveryTime": 24,
        "maxDeliveryTime": 24,
        "lastMileTravel": 0.699999988079071,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "367744",
      "name": "Zaika Family Restaurant",
      "uuid": "3f31dfc0-1d55-40c4-843b-6845ca7d8d29",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "50+ ratings",
      "cloudinaryImageId": "pxy7j8jeq7fspujbdx2d",
      "cuisines": [
        "Indian",
        "Tandoor",
        "Chinese",
        "Mughlai"
      ],
      "tags": [],
      "costForTwo": 25000,
      "costForTwoString": "₹250 FOR TWO",
      "deliveryTime": 22,
      "minDeliveryTime": 22,
      "maxDeliveryTime": 22,
      "slaString": "22 MINS",
      "lastMileTravel": 1.399999976158142,
      "slugs": {
        "restaurant": "zaika-family-restaurant-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop-3, Ayesha Apartment , Opp Virani Petrol Pump, Kausa Mumbra",
      "locality": "Opp Virani Petrol Pump",
      "parentId": 229232,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.3 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "367744",
        "deliveryTime": 22,
        "minDeliveryTime": 22,
        "maxDeliveryTime": 22,
        "lastMileTravel": 1.399999976158142,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.8",
      "totalRatings": 50,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "49651",
      "name": "Domino's Pizza",
      "uuid": "72138b65-6145-4492-b5d1-6397e96760c5",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "1000+ ratings",
      "cloudinaryImageId": "oijhgtq6fiwkefyhlz1n",
      "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
      ],
      "tags": [],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 25,
      "minDeliveryTime": 25,
      "maxDeliveryTime": 25,
      "slaString": "25 MINS",
      "lastMileTravel": 0,
      "slugs": {
        "restaurant": "dominos-pizza-opposite-millennium-hospital-airoli",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Surme Plaza, Mumbra, Thane Shop No. 10, 11, 12 And 13, Ground Floor , Surme Plaza, Old Mumbai Pune Highway, Opposite Millennium Hospital, Village Kausa Mumbra, Thane Maharashtra 400612",
      "locality": "Opposite Millennium Hospital",
      "parentId": 2456,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "hasSurge": false,
      "sla": {
        "restaurantId": "49651",
        "deliveryTime": 25,
        "minDeliveryTime": 25,
        "maxDeliveryTime": 25,
        "lastMileTravel": 0,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.1",
      "totalRatings": 1000,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "363334",
      "name": "Bon Bon - Cake Bites",
      "uuid": "b0da866d-6427-4ff1-b09b-18e462b87a44",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "20+ ratings",
      "cloudinaryImageId": "mr0aqlck4dc2fdfp5xj4",
      "cuisines": [
        "Desserts",
        "Bakery"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 28,
      "minDeliveryTime": 28,
      "maxDeliveryTime": 28,
      "slaString": "28 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "bon-bon---cake-bites-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop-8 , Noor Baug Hall, Shimla Park, Talav Pali Road, Kausa Mumbra, Thane -400612",
      "locality": "Shimla Park",
      "parentId": 48968,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "363334",
        "deliveryTime": 28,
        "minDeliveryTime": 28,
        "maxDeliveryTime": 28,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "3.6",
      "totalRatings": 20,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "381886",
      "name": "A K Momos Hub",
      "uuid": "e8fef338-1f39-4915-b5e1-704b34d6dd3b",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "100+ ratings",
      "cloudinaryImageId": "uushpt7czikxurlrzn46",
      "cuisines": [
        "Lebanese"
      ],
      "tags": [],
      "costForTwo": 15000,
      "costForTwoString": "₹150 FOR TWO",
      "deliveryTime": 60,
      "minDeliveryTime": 60,
      "maxDeliveryTime": 60,
      "slaString": "60 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "a-k-momos-hub-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop-1, Noor Manzil,Nr Noor Baug Hall,Shimla Park , Talav Pali Road, Kausa Mumbra,Thane-400612",
      "locality": "Noor Manzil",
      "parentId": 238319,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "381886",
        "deliveryTime": 60,
        "minDeliveryTime": 60,
        "maxDeliveryTime": 60,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "4.0",
      "totalRatings": 100,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "685240",
      "name": "Fire Wings",
      "uuid": "48f9e229-dedb-45f8-af1c-9ea28e8d2a8b",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "6baf646153690aebd9feab6cf324b140",
      "cuisines": [
        "Snacks",
        "Burgers",
        "Chinese",
        "Beverages"
      ],
      "tags": [],
      "costForTwo": 40000,
      "costForTwoString": "₹400 FOR TWO",
      "deliveryTime": 36,
      "minDeliveryTime": 36,
      "maxDeliveryTime": 36,
      "slaString": "36 MINS",
      "lastMileTravel": 1.600000023841858,
      "slugs": {
        "restaurant": "fire-wings-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop No-5, Ground floor, Al Ghazi Manzil, opp. Jama Masjid, Tetavli, Kausa, Mumbra, Thane, Maharashtra 400612, India",
      "locality": "Al Ghazi Manzil",
      "parentId": 11859,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.6 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "685240",
        "deliveryTime": 36,
        "minDeliveryTime": 36,
        "maxDeliveryTime": 36,
        "lastMileTravel": 1.600000023841858,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "630405",
      "name": "Pizza food kiosk",
      "uuid": "92900425-0446-43f1-b358-6e15fe7431a3",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "mupdndj8k7c5jvbsnjpk",
      "cuisines": [
        "Pizzas"
      ],
      "tags": [],
      "costForTwo": 14900,
      "costForTwoString": "₹149 FOR TWO",
      "deliveryTime": 38,
      "minDeliveryTime": 38,
      "maxDeliveryTime": 38,
      "slaString": "38 MINS",
      "lastMileTravel": 1.7000000476837158,
      "slugs": {
        "restaurant": "pizza-food-kiosk-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Shop no:20,Al-Rizwan palace,Rashid Compound, Mumbra, Thane, Maharashtra 400612, India",
      "locality": "Al-Rizwan palace",
      "parentId": 376435,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.7 kms",
      "hasSurge": false,
      "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40",
        "discountTag": "",
        "headerTypeV2": 0
      },
      "sla": {
        "restaurantId": "630405",
        "deliveryTime": 38,
        "minDeliveryTime": 38,
        "maxDeliveryTime": 38,
        "lastMileTravel": 1.7000000476837158,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  },
  {
    "type": "restaurant",
    "data": {
      "type": "F",
      "id": "690349",
      "name": "Tandoori Shawarma",
      "uuid": "8584c84b-e47c-40a7-b266-0b213375bff0",
      "city": "5",
      "area": "Mumbra",
      "totalRatingsString": "Too Few Ratings",
      "cloudinaryImageId": "",
      "cuisines": [
        "Tandoor"
      ],
      "tags": [],
      "costForTwo": 30000,
      "costForTwoString": "₹300 FOR TWO",
      "deliveryTime": 35,
      "minDeliveryTime": 35,
      "maxDeliveryTime": 35,
      "slaString": "35 MINS",
      "lastMileTravel": 1.5,
      "slugs": {
        "restaurant": "tandoori-shawarma-mumbra-mumbra",
        "city": "mumbai"
      },
      "cityState": "5",
      "address": "Amrut Nagar, Mumbra, Thane, Maharashtra 400612, India",
      "locality": "Amrut Nagar",
      "parentId": 410461,
      "unserviceable": false,
      "veg": false,
      "select": false,
      "favorite": false,
      "tradeCampaignHeaders": [],
      "chain": [],
      "feeDetails": {
        "fees": [
          {
            "name": "distance",
            "fee": 3600,
            "message": ""
          },
          {
            "name": "time",
            "fee": 0,
            "message": ""
          },
          {
            "name": "special",
            "fee": 0,
            "message": ""
          }
        ],
        "totalFees": 3600,
        "message": "",
        "title": "Delivery Charge",
        "amount": "3600",
        "icon": ""
      },
      "availability": {
        "opened": true,
        "nextOpenMessage": "",
        "nextCloseMessage": ""
      },
      "longDistanceEnabled": 0,
      "rainMode": "NONE",
      "thirdPartyAddress": false,
      "thirdPartyVendor": "",
      "adTrackingID": "",
      "badges": {
        "imageBased": [],
        "textBased": [],
        "textExtendedBadges": []
      },
      "lastMileTravelString": "1.5 kms",
      "hasSurge": false,
      "sla": {
        "restaurantId": "690349",
        "deliveryTime": 35,
        "minDeliveryTime": 35,
        "maxDeliveryTime": 35,
        "lastMileTravel": 1.5,
        "lastMileDistance": 0,
        "serviceability": "SERVICEABLE",
        "rainMode": "NONE",
        "longDistance": "NOT_LONG_DISTANCE",
        "preferentialService": false,
        "iconType": "EMPTY"
      },
      "promoted": false,
      "avgRating": "--",
      "totalRatings": 0,
      "new": false
    },
    "subtype": "basic"
  }
]

const RestaurantCard = (props) => {
  console.log(props);
  return  (
    <div className="res-card" style={ { backgroundColor: "#f0f0f0" } }>
      <img className="res-logo" alt="Image of some food" src= {"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/" + props.resProp.data.cloudinaryImageId} />
      <h3>{ props.resProp.data.name }</h3>
      <h4>{ props.resProp.data.cuisines.join(", ") }</h4>
      <h4>{ props.resProp.data.avgRating } stars</h4>
      <h4>{ props.resProp.data.deliveryTime } minutes</h4>
    </div>
  )
}

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        { resData.map(res => <RestaurantCard key={res.data.id} resProp = { res } />) }
      </div>
    </div>
  )
}

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />); 