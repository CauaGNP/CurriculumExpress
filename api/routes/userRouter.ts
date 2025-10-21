import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserById,
} from "../controller/userController.js";
import { Router } from "express";

const router = Router();

router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);

export default router;
