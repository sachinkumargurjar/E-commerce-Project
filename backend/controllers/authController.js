import express from "express";
import User from "../models/user.js"; // Make sure this is imported correctly
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, req, res) => {
  const token = signToken(user._id);
  res.cookie("jwt", token, {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
    secure: false,
    // sameSite: "Strict"
  });

  user.password = undefined; // Remove password from output
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

export const signup = async (req, res, next) => {
  try {
    console.log("Request body: ", req.body);
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
    });
    console.log("newUser  ", newUser);
    createSendToken(newUser, 201, req, res);
  } catch (error) {
    console.error("Error creating user:", error);
    res.status(400).json({
      status: "fail",
      message: error.errors ? error.errors : error.message,
    });
  }
};

export const login = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Both email and password are required." });
  }

  // console.log(email,password);

  const user = await User.findOne({ email }).select("+password");
  // console.log(user);
  if (!user || !(await user.correctPassword(password, user.password))) {
    return res.status(400).json({ error: "email or password is not correct" });
  }
  createSendToken(user, 200, req, res);
};
