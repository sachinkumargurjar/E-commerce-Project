import React from "react";
import Navbar from "../components/Navbar";
import LatestCollections from "../components/LatestCollections";
import LatestArrivals from "../components/LatestArrivals";
import BestSeller from "../components/BestSeller";
import Policy from "../components/Policy";
import Footer from "../components/Footer";
import { products } from "../assets/assets/assets";

const Home = () => {
  return (
    <div>
      <LatestArrivals />
      <LatestCollections products={products} />
      <BestSeller products={products} />
      <Policy />
      <Footer />
    </div>
  );
};

export default Home;
