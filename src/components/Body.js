import React, { useState } from "react";
import RestaurantCard from "./RestaurantCard";
import "./body.css";
import resList from "../utils/mockData";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState(resList);
  return (
    <div className="body">
      <div className="filter">
        <button className="filter-btn" onClick={() => {
          setRestaurantList(restaurantList.filter( res => res.info.avgRating > 4.0));
        }}>Filter</button>
      </div>
      <div className="res-container">
        {restaurantList?.map((res) => (
          <RestaurantCard key={res.id} resData={res} />
        ))}
      </div>
    </div>
  );
};

export default Body;
