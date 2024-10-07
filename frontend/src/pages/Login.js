import React, { useState } from "react";
import { TextField, Button, Typography, Box, Alert } from "@mui/material";

export default function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = () => {
    const url = "http://localhost:5000/user/login"; // Update this URL based on your backend endpoint
    const options = {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
      },
      body: JSON.stringify(formData), // Send the entire formData object
    };

    fetch(url, options)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json();
      })
      .then((data) => {
        console.log(data);
        // Handle successful login here (e.g., redirect or update state)
      })
      .catch((error) => {
        console.error("There was a problem with the fetch operation:", error);
        setError("Login failed. Please check your credentials.");
      });
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
        maxWidth: 300,
        margin: "auto",
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
    </Box>
  );
}
