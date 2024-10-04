import React, { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

const SideBar = ({ products, setNewProducts }) => {
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedSubcategories, setSelectedSubcategories] = useState([]);

  useEffect(() => {
    console.log("selectedCategories   ",selectedCategories);
    console.log("selectedSubcategories   ",selectedSubcategories);

    const filteredProducts = products.filter(
      (item) =>
        (selectedCategories.length === 0 ||
          selectedCategories.includes(item.category)) &&
        (selectedSubcategories.length === 0 ||
          selectedSubcategories.includes(item.subCategory))
    );
    console.log(filteredProducts);
    setNewProducts(filteredProducts);
  }, [selectedCategories, selectedSubcategories]);

  const handleCategoryChange = (event) => {
    const category = event.target.name;
    // console.log(category);
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((cat) => cat !== category)
        : [...prev, category]
    );
    
  };

  const handleSubcategoryChange = (event) => {
    const subcategory = event.target.name;
    console.log(subcategory);
    setSelectedSubcategories((prev) =>
      prev.includes(subcategory)
        ? prev.filter((sub) => sub !== subcategory)
        : [...prev, subcategory]
    );
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignContent: "flex-start",
        justifyContent: "flex-start",
        gap: "10px",
      }}
    >
      <h3>FILTERS</h3>
      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px solid grey",
          width: "200px",
          paddingLeft: "10px",
        }}
      >
        <h4 style={{ margin: "0px 0px 10px 0px" }}>CATEGORIES</h4>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategories.includes("Men")}
                onChange={handleCategoryChange}
                name="Men"
              />
            }
            label="Men"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategories.includes("Women")}
                onChange={handleCategoryChange}
                name="Women"
              />
            }
            label="Women"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedCategories.includes("Kids")}
                onChange={handleCategoryChange}
                name="Kids"
              />
            }
            label="Kids"
          />
        </FormGroup>
      </Box>
      <Box
        component="section"
        sx={{
          p: 2,
          border: "1px solid grey",
          width: "200px",
          paddingLeft: "10px",
        }}
      >
        <h4 style={{ margin: "0px 0px 10px 0px" }}>TYPE</h4>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedSubcategories.includes("Topwear")}
                onChange={handleSubcategoryChange}
                name="Topwear"
              />
            }
            label="Topwear"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedSubcategories.includes("Bottomwear")}
                onChange={handleSubcategoryChange}
                name="Bottomwear"
              />
            }
            label="Bottomwear"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={selectedSubcategories.includes("Winterwear")}
                onChange={handleSubcategoryChange}
                name="Winterwear"
              />
            }
            label="Winterwear"
          />
        </FormGroup>
      </Box>
    </div>
  );
};

export default SideBar;
