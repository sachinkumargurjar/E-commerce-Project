import { Button } from "@mui/material";
import React from "react";

const Size = ({ sizes=[], setSize }) => {

  const handleClick= (e) =>{
     console.log(e.target.value)
     setSize(e.target.value)
  }
  return (
    <div style={{display:'flex',flexDirection:'column',paddingBottom:'20px'}}>
      <h3>Select Size</h3>
      <div style={{display:'flex',gap:'10px'}}>
        {sizes?.map((size) => (
          <Button value={size} style={{border:'1px solid grey'}} onClick={handleClick}>{size}</Button>
        ))}
      </div>
    </div>
  );
};

export default Size;
