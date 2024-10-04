import express from "express";
import {
  createProduct,
  getAllProduct,
  getProduct,
  updatePatchProduct,
  updateputProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAllProduct);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.put("/:id", updateputProduct);
router.patch("/:id", updatePatchProduct);
router.delete("/:id", deleteProduct);

export { router as productRoutes };
