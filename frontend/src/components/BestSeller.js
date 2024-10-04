import React from "react";
import Product from "./ProductCard";
import Text from "./Text";

const BestSeller = ({ products }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
        <Text first={"BEST"} second={"SELLERS"}/>
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
        padding: '0 16px' 
      }}>
        {products?.filter(item => item.bestseller)?.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default BestSeller;
