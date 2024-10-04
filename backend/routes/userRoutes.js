import express from "express";
import {
  createUser,
  getAllUsers,
  getUser,
  updatePatchUser,
  updatePutUser,
  deleteUser,
} from "../controllers/userController.js";

import {signup} from "../controllers/authController.js"

const router = express.Router();

router.post("/signup",signup);

router.get("/", getAllUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/:id", updatePutUser);
router.patch("/:id", updatePatchUser);
router.delete("/:id", deleteUser);

export { router as userRoutes };
