import React from "react";
import { assets } from "../assets/assets/assets";
import Footer from "../components/Footer";
import Box from "@mui/material/Box";
import NewsLetter from "../components/NewsLetter";

const About = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyItems: "center",
      }}
    >
      <h3 style={{textAlign:'center',margin:"30px 0px"}}>ABOUT US</h3>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "50px",
          maxHeight: "420px",
          overflow: "hidden",
          marginBottom:'30px'
        }}
      >
        <div>
          <img
            src={assets.about_img}
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
          <p>
            Forever was born out of a passion for innovation and a desire to
            revolutionize the way people shop online. Our journey began with a
            simple idea: to provide a platform where customers can easily
            discover, explore, and purchase a wide range of products from the
            comfort of their homes. Since our inception, we've worked tirelessly
            to curate a diverse selection of high-quality products that cater to
            every taste and preference. From fashion and beauty to electronics
            and home essentials, we offer an extensive collection sourced from
            trusted brands and suppliers.
          </p>
          <h5>Our Mission</h5>
          <p>
            Our mission at Forever is to empower customers with choice,
            convenience, and confidence. We're dedicated to providing a seamless
            shopping experience that exceeds expectations, from browsing and
            ordering to delivery and beyond.
          </p>
        </div>
      </div>
      <div>
        <h3>WHY CHOOSE US ------------</h3>
        <div style={{ display: "flex", marginTop:'-20px'}}>
          <Box component="section" sx={{ p: 2,  paddingLeft:'0px'}}>
            <h4>Quality Assurance:</h4>
            <p>
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </Box>
          <Box component="section" sx={{ p: 2, }}>
            <h4>Convenience:</h4>
            <p>
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </Box>
          <Box component="section" sx={{ p: 2, border: "2px bold grey" }}>
            <h4>Exceptional Customer Service:</h4>
            <p>
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </Box>
        </div>
      </div>
      <NewsLetter/>
      <Footer/>
    </div>
  );
};

export default About;
