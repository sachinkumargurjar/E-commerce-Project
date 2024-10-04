import React from "react";

const Text = ({first,second}) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        fontWeight: "600",
      }}
    >
      <h2>
        <span style={{ color: "grey" }}>{first}</span>
        <span style={{ color: "black" }}> {second}</span>
      </h2>
      <div
        style={{
          borderBottom: "2px solid black",
          width: "100px",
          marginLeft: "10px",
        }}
      ></div>
    </div>
  );
};

export default Text;
