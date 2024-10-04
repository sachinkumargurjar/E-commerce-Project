import React from "react";
import { styles } from "./CartDescription";
import { Link } from "react-router-dom";

const CartSummary = ({ price }) => {
  return (
    <div style={styles.summaryContainer}>
      <div style={styles.cartSummary}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "-20px",
          }}
        >
          <h2 style={{fontWeight: "500"}}>
            <span style={{ color: "grey"}}>CART</span>
            <span style={{ color: "black"}}> TOTAL</span>
          </h2>
          <div
            style={{    
              borderBottom: "2px solid black",
              width: "100px",
            }}
          ></div>
        </div>
        <div style={styles.summaryItem}>
          <span>Subtotal:</span>
          <span>₹{price }.00</span>
        </div>
        <div style={styles.summaryItem}>
          <span>Shipping Fee:</span>
          <span>₹100.00</span>
        </div>
        <div style={styles.summaryTotal}>
          <span>Total:</span>
          <span>₹{price + 100}.00</span>
        </div>
      </div>
    </div>
  );
};

export default CartSummary;
