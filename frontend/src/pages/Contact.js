import React from "react";
import NewsLetter from "../components/NewsLetter";
import { assets } from "../assets/assets/assets";
import Footer from "../components/Footer";
import Button from "@mui/material/Button";

const Contact = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <h3 style={{ textAlign: "center", margin: "30px 0px" }}>CONTACT US</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          maxHeight: "480px",
          margin: "0px 100px 0px 200px",
          overflow: "hidden",
        }}
      >
        <div>
          <img
            src={assets.contact_img}
            alt="About Image"
            style={{ width: "100%" }}
          />
        </div>
        <div
          style={{
            fontFamily: "Outfit, Arial, sans-serif",
            color: "rgba(75, 85, 99, 1)",
          }}
        >
          <h3>Our Store</h3>
          <p>
            54709 Willms Station <br /> Suite 350, Washington, USA <br /> <br />{" "}
            Tel: (415) 555-0132
            <br />
            Email: admin@forever.com
            <br />
            <br />
          </p>
          <h3>Careers at Forever</h3>
          <p>Learn more about our teams and job openings.</p>
          <Button variant="contained" style={{ backgroundColor: "#161718" }}>
            Explore Jobs
          </Button>
        </div>
      </div>
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Contact;
