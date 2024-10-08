import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  TextField,
  Button,
  Typography,
  Box,
  Alert,
  Container,
  Paper,
} from "@mui/material";

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

  const handleSignup = async () => {
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

    try {
      const response = await fetch(url, options);
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Sign up failed.");
      }

      console.log("Signup successful:", data);
      setError("Successfully signed up.");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      setError(error.message);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("formData  ", formData);
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    handleSignup(); // Call the handleLogin function
  };

  return (
    <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 4, borderRadius: 2 }}>
        <Typography variant="h5" align="center" sx={{ mb: 2 }}>
          Sign Up
        </Typography>
        {error && <Alert severity="error">{error}</Alert>}
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ mt: 1 }}
          // sx={{
          //   display: "flex",
          //   flexDirection: "column",
          //   gap: 2,
          //   minWidth: 400,
          //   margin: "auto",
          //   padding: 2,
          // }}
        >
          <TextField
            label="Name"
            type="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: "#f5f5f5" }}
          />
          <TextField
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: "#f5f5f5" }}
          />
          <TextField
            label="Password"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: "#f5f5f5" }}
          />
          <TextField
            label="ConfirmPassword"
            type="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            fullWidth
            margin="normal"
            variant="outlined"
            sx={{ backgroundColor: "#f5f5f5" }}
          />
          <Button type="submit" variant="contained" fullWidth sx = {{mt:2}}>
            SignUp
          </Button>
          <Link
            to="/login"
            style={{
              textDecoration: "none",
              display: "block",
              marginTop: "16px",
              textAlign: "center",
            }}
          >
            <Button variant="outlined" fullWidth>
              Log In
            </Button>
          </Link>
        </Box>
      </Paper>
    </Container>
  );
}
