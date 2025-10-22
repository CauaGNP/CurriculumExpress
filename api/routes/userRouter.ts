import {
  createUser,
  deleteUserById,
  getAddressByUserId,
  getAllDatasbyUserId,
  getAllExperienceByUserId,
  getAllSkillsByUserId,
  getAllUsers,
  getProfileSummaryByUserId,
  getUserById,
  updateUserById,
} from "../controller/userController.js";
import { Router } from "express";

const router = Router();

router.get("/", getAllUsers);
router.get("/:userId", getUserById);
router.get("/:userId/address", getAddressByUserId);
router.get("/:userId/skill", getAllSkillsByUserId);
router.get("/:userId/experience", getAllExperienceByUserId);
router.get("/:userId/profile-summary", getProfileSummaryByUserId);
router.get("/:userId/infos", getAllDatasbyUserId);
router.post("/", createUser);
router.put("/:userId", updateUserById);
router.delete("/:userId", deleteUserById);

export default router;
