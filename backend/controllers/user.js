import express from "express";
import mongoose from "mongoose";
import user from "../models/user.js";

const router = express.Router();

export const createUser = async (req, res) => {
  //   console.log("req.body  ", req.body);
  const newuser = req.body;

  const newUser = new user({
    ...newuser,
  });

  try {
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const getAllUsers = async (req, res) => {
  try {
    const users = await user.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "error message   ", error });
  }
};

export const getUser = async (req, res) => {
  const { id } = req.params;

  // console.log("id  ",id);
  try {
    const use = await user.findById(id);
    res.status(200).json(use);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updatePutUser = async (req, res) => {
  const { id } = req.params;

  try {
    const updateduser = req.body;
    const use = await user.findByIdAndUpdate(id, updateduser, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(use);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updatePatchUser = async (req, res) => {
  const { id } = req.params;

  try {
    const updateduser = req.body;
    const use = await user.findByIdAndUpdate(id, updateduser, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(use);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const use = await user.findByIdAndDelete(id);
    res.status(200).json({ message: "user deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default router;
