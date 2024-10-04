import React from "react";
import { assets } from "../assets/assets/assets.js";

const LatestArrivals = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "10px",
        border: "1px solid black",
        margin: "3% 0%",
        maxHeight: "420px",
        overflow: "hidden"
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "20px",
        }}
      >
        <p>OUR BESTSELLERS</p>
        <p>Latest Arrivals</p>
        <p>SHOP NOW</p>
      </div>
      <div>
        <img
          src={assets.hero_img}
          alt="Bestseller Image"
          style={{ width: "100%" }}
        />
      </div>
    </div>
  );
};

export default LatestArrivals;
