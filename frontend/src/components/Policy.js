import React from "react";
import VerifiedRoundedIcon from "@mui/icons-material/VerifiedRounded";
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import ChangeCircleIcon from '@mui/icons-material/ChangeCircle';
import NewsLetter from "./NewsLetter";

const Policy = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        marginTop: "30px",
      }}
    >
      <div
        style={{ display: "flex", alignItems: "center", flexDirection: "row" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginRight: "100px",
          }}
        >
          <ChangeCircleIcon />
          <p style={{ fontWeight: "700" }}>Easy Exchange Policy</p>
          <p style={{ margin: "-10px" }}>
            We offer hassle free exchange policy.
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            marginRight: "100px",
          }}
        >
          <VerifiedRoundedIcon />
          <p style={{ fontWeight: "700" }}>7 Days Return Policy</p>
          <p style={{ margin: "-10px" }}>
            We provide 7 days free return policy
          </p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <SupportAgentIcon />
          <p style={{ fontWeight: "700" }}>Best customer support</p>
          <p style={{ margin: "-10px" }}>We provide 24/7 customer support.</p>
        </div>
      </div>
      <NewsLetter/>
    </div>
  );
};

export default Policy;
