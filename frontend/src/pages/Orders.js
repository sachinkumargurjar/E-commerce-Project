import React from "react";
import p_img1 from "../assets/assets/p_img1.png";
import p_img3 from "../assets/assets/p_img3.png";
import p_img4 from "../assets/assets/p_img4.png";
import p_img5 from "../assets/assets/p_img5.png";
import Text from "../components/Text";
import Footer from "../components/Footer";

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
    margin: "0 auto",
  },
  orderItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    padding: "15px",
    border: "1px solid #ddd",
    borderRadius: "5px",
    marginBottom: "10px",
    backgroundColor: "#fff",
  },
  productDetails: {
    display: "flex",
    alignItems: "center",
    paddingRight: "20px",
    width:'450px'
  },
  productImage: {
    width: "80px", 
    height: "80px",
    borderRadius: "5px",
    marginRight: "15px",
  },
  productName: {
    fontSize: "18px",
    fontWeight: "bold",
    color: "#333",
  },
  productInfo: {
    fontSize: "14px",
    color: "#666",
    marginTop: "5px",
  },
  statusBubble: {
    padding: "10px 15px",
    borderRadius: "20px",
    backgroundColor: "#28a745",
    color: "#fff",
    fontWeight: "bold",
  },
  trackButton: {
    padding: "10px 15px",
    border: "none",
    borderRadius: "5px",
    backgroundColor: "#007bff",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

const orders = [
  {
    _id: "aaaaa",
    name: "Women Round Neck Cotton Top",
    price: 100,
    image: [p_img1],
  },
  {
    _id: "aaaac",
    name: "Girls Round Neck Cotton Top",
    price: 220,
    image: [p_img3],
},
{
    _id: "aaaad",
    name: "Men Round Neck Pure Cotton T-shirt",
    price: 110,
    image: [p_img4],
},
{
    _id: "aaaae",
    name: "Women Round Neck Cotton Top",
    price: 130,
    image: [p_img5],
},
];

const Orders = () => {
  return (
    <div style={styles.container}>
      <Text first="MY" second="ORDERS"/>
      {orders.map((order, index) => (
        <div key={index} style={styles.orderItem}>
          <div style={styles.productDetails}>
            <img
              src={order.image[0]}
              alt={order.name}
              style={styles.productImage}
            />
            <div>
              <div style={styles.productName}>{order.name}</div>
              <div style={styles.productInfo}>Quantity: 3</div>
              <div style={styles.productInfo}>Size: M</div>
              <div style={styles.productInfo}>Price: ₹{order.price}</div>
            </div>
          </div>
          <div style={styles.statusBubble}>Ready to Ship</div>
          <button style={styles.trackButton}>Track Order</button>
        </div>
      ))}
      <Footer/>
    </div>
  );
};

export default Orders;
