import {
  createExperience,
  deleteExperienceById,
  getAllExpirences,
  getExperienceById,
  updateExperienceById,
} from "@/controller/experienceController";
import { Router } from "express";

const router = Router();

router.get("/", getAllExpirences);
router.get("/:expirenceId", getExperienceById);
router.post("/", createExperience);
router.put("/:expirenceId", updateExperienceById);
router.delete("/:expirenceId", deleteExperienceById);

export default router;
