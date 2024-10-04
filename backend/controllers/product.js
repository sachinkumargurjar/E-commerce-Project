import express from "express";
import mongoose from "mongoose";
import product from "../models/product.js";

const router = express.Router();

export const createProduct = async (req, res) => {
  //   console.log("req.body  ", req.body);
  const newproduct = req.body;

  const newProduct = new product({
    ...newproduct,
  });

  try {
    await newProduct.save();
    res.status(201).json(newProduct);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
export const getAllProduct = async (req, res) => {
  try {
    const products = await product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "error message   ", error });
  }
};

export const getProduct = async (req, res) => {
  const { id } = req.params;

  // console.log("id  ",id);
  try {
    const prod = await product.findById(id);
    res.status(200).json(prod);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
export const updateputProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedproduct = req.body;
    const prod = await product.findByIdAndUpdate(id, updatedproduct, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const updatePatchProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const updatedproduct = req.body;
    const prod = await product.findByIdAndUpdate(id, updatedproduct, {
      new: true,
      runValidators: true,
    });
    res.status(200).json(prod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const prod = await product.findByIdAndDelete(id);
    res.status(200).json({ message: "product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export default router;
