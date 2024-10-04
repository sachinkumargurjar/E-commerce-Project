import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const Sorting = ({ newProducts, setNewProducts }) => {
  const [type, setType] = useState("Normal");

  const handleChange = (event) => {
    const selectedType = event.target.value;
    setType(selectedType);

    let sortedProducts;

    switch (selectedType) {
      case "ASC":
        sortedProducts = [...newProducts].sort((a, b) => a.price - b.price);
        break;
      case "DESC":
        sortedProducts = [...newProducts].sort((a, b) => b.price - a.price);
        break;
      default:
        sortedProducts = newProducts; 
    }
    setNewProducts(sortedProducts);
  };

  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-autowidth-label">Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-autowidth-label"
          id="demo-simple-select-autowidth"
          value={type}
          onChange={handleChange}
          autoWidth
        >
          <MenuItem value="Normal">Relavant</MenuItem>
          <MenuItem value="ASC">Low to High</MenuItem>
          <MenuItem value="DESC">High to Low</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default Sorting;
