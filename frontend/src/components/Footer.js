import React from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Footer = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "100px",
      }}
    >
      <div
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginRight: "200px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <ShoppingCartIcon />
          <p style={{ color: "red" }}>E-COMMERCE</p>
        </div>
        <div>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </p>
        </div>
      </div>
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "space-between",
          margin: "1%",
        }}
      >
        <div>
          <h3>COMPANY</h3>
          <p>Home</p>
          <p>ABOUT Us</p>
          <p>Delivery</p>
          <p>Privacy Policy</p>
        </div>
        <div>
          <h3>GET IN TOUCH</h3>
          <p>+1-212-456-7890</p>
          <p>contact@ecommerce.com</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
