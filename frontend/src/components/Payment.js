import React, { useState } from "react";
import { assets } from "../assets/assets/assets";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  title: {
    fontSize: "24px",
    marginBottom: "20px",
    color: "#333",
  },
  paymentOption: {
    display: "flex",
    alignItems: "center",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
    cursor: "pointer",
    transition: "background-color 0.3s",
    width: "100%",
    position: "relative",
  },
  paymentIcon: {
    marginRight: "10px",
    width: "30px",
    height: "30px",
  },
  paymentText: {
    fontSize: "18px",
  },
  radioButton: {
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    border: "2px solid #ddd",
    marginRight: "10px",
    transition: "background-color 0.3s",
  },
  selectedRadioButton: {
    backgroundColor: "#28a745", // Green color for selected
    border: "2px solid #28a745",
  },
};

const Payment = () => {
  const [selectedPayment, setSelectedPayment] = useState(null);

  const handleSelect = (method) => {
    setSelectedPayment(method);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Choose Payment Method</h2>
      <div style={styles.paymentOption} onClick={() => handleSelect("razorpay")}>
        <div
          style={{
            ...styles.radioButton,
            ...(selectedPayment === "razorpay" ? styles.selectedRadioButton : {}),
          }}
        />
        <img
          src={assets.razorpay_logo} // Placeholder for credit/debit card icon
          alt="Razorpay"
          style={styles.paymentIcon}
        />
      </div>
      <div style={styles.paymentOption} onClick={() => handleSelect("stripe")}>
        <div
          style={{
            ...styles.radioButton,
            ...(selectedPayment === "stripe" ? styles.selectedRadioButton : {}),
          }}
        />
        <img
          src={assets.stripe_logo} // Placeholder for PayPal icon
          alt="PayPal"
          style={styles.paymentIcon}
        />
      </div>
      <div style={styles.paymentOption} onClick={() => handleSelect("cashOnDelivery")}>
        <div
          style={{
            ...styles.radioButton,
            ...(selectedPayment === "cashOnDelivery" ? styles.selectedRadioButton : {}),
          }}
        />
        <span style={styles.paymentText}>Cash on Delivery</span>
      </div>
    </div>
  );
};

export default Payment;
