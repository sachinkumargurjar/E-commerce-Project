import React from "react";
import { useParams, useLocation } from "react-router-dom";
import CartDescription from "../components/CartDescription";
import Footer from "../components/Footer";
import Text from "../components/Text";

const Cart = () => {
  return (
    <div>
      <Text first={"YOUR"} second={"CART"} />
      <CartDescription />
      <Footer />
    </div>
  );
};

export default Cart;
