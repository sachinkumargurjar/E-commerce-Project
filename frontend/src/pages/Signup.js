import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";

export default function SignUp() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, "  ", value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSignup = () => {
    console.log("sdbfkbkbekghb");
    console.log(formData);
    const url = "http://localhost:5000/user/signup"; // Update this URL based on your backend endpoint
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(formData), // Send the entire formData object
    };
    console.log("sdbfkbkbekghb");
    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log("signup successful");
        // console.log(data);
        // Handle successful login here (e.g., redirect or update state)
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError("Login failed. Please check your credentials.");
      });
    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formData  ", formData);
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    handleSignup(); // Call the handleLogin function
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 300,
        margin: "auto",
        padding: 2,
      }}
    >
      <Typography variant="h5" align="center">
        Sign Up
      </Typography>
      {error && <Alert severity="error">{error}</Alert>}
      <TextField
        label="Name"
        type="name"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
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
      <TextField
        label="ConfirmPassword"
        type="confirmPassword"
        name="confirmPassword"
        value={formData.confirmPassword}
        onChange={handleChange}
        required
      />
      <Button type="submit" variant="contained">
        SignUp
      </Button>
    </Box>
  );
}
