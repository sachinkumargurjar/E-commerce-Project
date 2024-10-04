import React, { useState } from "react";
import ProductCard from "./ProductCard";
import Sorting from "./Sorting";
import Text from "./Text";

const AllCollections = ({ newProducts,setNewProducts }) => {
  // console.log("products    ", products);
  // const [sortedProducts, setSortedProducts] = useState(products);
  // console.log("sortedProducts         ", sortedProducts);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "100%",
        }}
      >
        <Text first={"ALL"} second={"COLLECTIONS"} />
        <Sorting setNewProducts={setNewProducts} newProducts={newProducts} />
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr)",
          gap: "20px",
          width: "100%",
        }}
      >
        {newProducts?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllCollections;
