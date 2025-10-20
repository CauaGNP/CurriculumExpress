import {
  createUser,
  deleteUserById,
  getAllUsers,
  getUserById,
  updateUserbyId,
} from "@/service";
import { Router } from "express";

const router = Router();

router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.post("/", createUser);
router.put("/:userId", updateUserbyId);
router.delete("/:userId", deleteUserById);

export default router;
