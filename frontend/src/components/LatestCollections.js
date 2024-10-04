import React from "react";
import ProductCard from "./ProductCard";
import Text from "./Text";

const LatestCollections = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        {/* <h2>LATEST COLLECTIONS</h2> */}
        <Text first={"LATEST"} second={"COLLECTIONS"}/>
        <p style={{margin:'0px 0px 35px 0px'}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the
        </p>
      </div>
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gap: '16px', 
        justifyContent: 'center', 
        width: '100%', 
        maxWidth: '1200px',
        marginBottom:'30px' 
      }}>
        {products?.slice(0,10).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default LatestCollections;
