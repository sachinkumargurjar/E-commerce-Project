import React from "react";
import ProductCard from "./ProductCard";
import { products } from "../assets/assets/assets";

const RelatedProducts = ({ category, subCategory }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "100%",
        }}
      >
        <h2>RELATED PRODUCTS</h2>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
          gap: "16px",
          justifyContent: "center",
          width: "100%",
          maxWidth: "1200px",
          marginBottom: "30px",
        }}
      >
        {products
          ?.filter((item1) => item1.category === category)
          ?.filter((item2) => item2.subCategory === subCategory)
          ?.slice(0, 5)
          ?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default RelatedProducts;
