import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import PermIdentityRoundedIcon from "@mui/icons-material/PermIdentityRounded";
import ShoppingBagOutlinedIcon from "@mui/icons-material/ShoppingBagOutlined";
import { Box, Tabs, Tab } from "@mui/material";
import { useSelector, connect } from "react-redux";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems.cartItems);
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;

  const getCurrentTab = () => {
    switch (path) {
      case "/collections":
        return 1;
      case "/about":
        return 2;
      case "/contact":
        return 3;
      default:
        return 0;
    }
  };

  const [selectedTab, setSelectedTab] = useState(getCurrentTab);

  useEffect(() => {
    setSelectedTab(getCurrentTab());
  }, [path]);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  const handleCart = () => {
    navigate("/cart");
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      <div style={{ marginRight: "20px" }}>
        <ShoppingCartIcon />
        <p
          style={{
            fontSize: "10px",
            margin: "0",
            color: "red",
            fontWeight: "500",
          }}
        >
          E-COMMERCE
        </p>
      </div>
      <div>
        <Box sx={{ flexGrow: 1, position: "relative" }}>
          <Tabs
            value={selectedTab}
            onChange={handleTabChange}
            textColor="inherit"
            aria-label="navbar tabs"
            sx={{
              paddingBottom: 1,
              position: "relative",
              "& .MuiTab-root": {
                fontSize: "10px",
                color: "inherit",
                fontWeight: "600",
              },
              "& .MuiTabs-indicator": {
                backgroundColor: "black",
                height: "2px",
              },
            }}
          >
            <Tab component={Link} to="/" label="Home" />
            <Tab component={Link} to="/collections" label="Collections" />
            <Tab component={Link} to="/about" label="About" />
            <Tab component={Link} to="/contact" label="Contact" />
          </Tabs>
        </Box>
      </div>

      <div style={{ display: "flex", alignItems: "center" }}>
        <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <SearchIcon style={{ paddingRight: "15px" }} />
        </button>
        <button
          style={{
            background: "none",
            border: "none",
            padding: 0,
            cursor: "pointer",
          }}
        >
          <PermIdentityRoundedIcon style={{ paddingRight: "15px" }} />
        </button>
        <button
          style={{
            display: "flex",
            alignItems: "center",
            background: "none",
            border: "none",
            padding: "0",
            cursor: "pointer",
            position: "relative",
          }}
          onClick={handleCart}
        >
          <ShoppingBagOutlinedIcon style={{ fontSize: "24px" }} />

          <span
            style={{
              position: "absolute",
              top: "12px",
              right: "-5px",
              backgroundColor: "black",
              color: "white",
              borderRadius: "50%",
              width: "15px",
              height: "15px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "12px",
            }}
          >
            {cartItems.length}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
