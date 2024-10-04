import React from "react";
import Button from "@mui/material/Button";

const NewsLetter = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "10px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ marginTop: "50px", fontWeight: "700", fontSize: "22px" }}>
          Subscribe now & get 20% off
        </p>
        <p style={{ marginTop: "-10px" }}>
          Sign up for our newsletter and receive exclusive offers and
          promotions.
        </p>
      </div>
      <div>
        <input
          placeholder="Enter your email"
          style={{ width: "450px", height: "30px" }}
        ></input>
        <Button variant="contained" style={{ backgroundColor: "#161718" }}>
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default NewsLetter;
