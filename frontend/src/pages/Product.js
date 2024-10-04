import React,{useState,useEffect} from 'react';
import ProductDescription from '../components/ProductDescription';
import Footer from '../components/Footer';
import { products } from '../assets/assets/assets';
import { useParams } from 'react-router-dom';

const Product = () => {
  const { productId } = useParams();

  return (
    <div>
        <ProductDescription productId={productId}/>
        <Footer />
    </div>
  )
}

export default Product