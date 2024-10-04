import React from "react";
import CartSummary from "../components/CartSummary";
import { useLocation } from "react-router-dom";
import Footer from "../components/Footer";
import Payment from "../components/Payment";
import { Link } from "react-router-dom";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    padding: "20px",
    maxWidth: "1200px",
    margin: "0% 6% 0% 0%",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  formContainer: {
    flex: "0 0 50%",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#fff",
  },
  summaryContainer: {
    flex: "0 0 50%",
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    backgroundColor: "#f8f9fa",
  },
  section: {
    marginBottom: "20px",
  },
  sectionTitle: {
    fontSize: "20px",
    marginBottom: "10px",
    color: "#333",
  },
  inputField: {
    margin: "10px 0",
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  },
  inputRow: {
    display: "flex",
    justifyContent: "space-between",
    gap: "10px",
  },
  button: {
    marginTop: "20px",
    padding: "10px 20px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    width: "100%",
  },
};

const PlaceOrder = () => {
  const location = useLocation();
  const { state } = location;
  console.log("state   ",state);

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={styles.container}>
        <div style={styles.formContainer}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              marginTop: "-20px",
            }}
          >
            <h2 style={{ fontWeight: "500" }}>
              <span style={{ color: "grey" }}>DELIVERY </span>
              <span style={{ color: "black" }}>INFORMATION</span>
            </h2>
            <div
              style={{
                borderBottom: "2px solid black",
                width: "100px",
                marginLeft: "10px",
              }}
            ></div>
          </div>
          <div style={styles.section}>
            <div style={styles.inputRow}>
              <input
                type="text"
                placeholder="First Name"
                style={{ ...styles.inputField, flex: "1" }}
              />
              <input
                type="text"
                placeholder="Last Name"
                style={{ ...styles.inputField, flex: "1" }}
              />
            </div>
            <input type="email" placeholder="Email" style={styles.inputField} />
          </div>

          <div style={styles.section}>
            <input type="text" placeholder="Street" style={styles.inputField} />
            <div style={styles.inputRow}>
              <input
                type="text"
                placeholder="City"
                style={{ ...styles.inputField, flex: "1" }}
              />
              <input
                type="text"
                placeholder="State"
                style={{ ...styles.inputField, flex: "1" }}
              />
            </div>
            <div style={styles.inputRow}>
              <input
                type="text"
                placeholder="Zip Code"
                style={{ ...styles.inputField, flex: "1" }}
              />
              <input
                type="text"
                placeholder="Country"
                style={{ ...styles.inputField, flex: "1" }}
              />
            </div>
          </div>

          <div style={styles.section}>
            <input
              type="tel"
              placeholder="Phone Number"
              style={styles.inputField}
            />
          </div>
        </div>

        <div style={styles.summaryContainer}>
          <CartSummary price={state?.price}/>
          <Payment />
          <Link to="/orders" style={{ textDecoration: "none" }}>
            <button style={styles.button} >Place Order</button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceOrder;
