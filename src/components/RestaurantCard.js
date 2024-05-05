import React from "react";
import "./restaurant-card.css";
import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card">
      <img
        alt="food-image"
        className="res-logo"
        src={CDN_URL+resData.info.cloudinaryImageId}
      ></img>
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
      <h4 className="star-rating">{resData.info.avgRating + " star"}</h4>
    </div>
  );
};

export default RestaurantCard;
