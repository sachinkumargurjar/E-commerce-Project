import React, { useState } from "react";
import SideBar from "../components/SideBar";
import AllCollections from "../components/AllCollections";
import { products } from "../assets/assets/assets";

const Collection = () => {
  const [newProducts, setNewProducts] = useState(products);
  console.log("products", products);
  return (
    <div
      style={{
        width: "1142px",
        display: "flex",
        gap: "50px",
        marginTop: "50px",
      }}
    >
      <SideBar products={products} setNewProducts={setNewProducts} />
      <AllCollections newProducts={newProducts}  setNewProducts={setNewProducts}/>
    </div>
  );
};

export default Collection;
