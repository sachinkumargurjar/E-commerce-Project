import React, { useState } from "react";
import { Link,useNavigate, useLocation } from "react-router-dom";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async () => {
    const url = "http://localhost:5000/user/login"; // Update this URL based on your backend endpoint
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(formData), // Send the entire formData object
    };

    try {
      const response = await fetch(url,options);
      const data = await response.json();
      if(!response.ok){
        throw new Error (data.message || "login failed");
      }

      console.log(data);
      
      const token = data.token;

      sessionStorage.setItem("jwt", token);

      setError("Login successful");
      setFormData(
        {
          email:"",
          password:""
        }
      )
      navigate(from, { replace: true });
      
    } catch (error) {
      console.log("error", error)
      setError(error.message)
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = formData;
    if (!email || !password) {
      setError("All fields are required.");
      return;
    }

    handleLogin(); // Call the handleLogin function
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        minWidth: 400,
        margin: "auto",
        marginTop:"32.573px",
        padding: 2,
      }}
    >
      <Typography variant="h5" align="center">
        Log In
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <TextField
        label="Password"
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">
        Log In
      </Button>
      <Link to="/signup" style={{ textDecoration: "none", width:"20px" }}>
        <button>Sign Up</button>
      </Link>
    </Box>
  );
}
