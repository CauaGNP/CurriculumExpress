import {
  createSkill,
  deleteSkillById,
  getAllSkills,
  getSkillById,
  updateSkillById,
} from "../controller/skillsController.js";
import { Router } from "express";

const router = Router();

router.get("/", getAllSkills);
router.get("/:skillId", getSkillById);
router.post("/", createSkill);
router.put("/:skillId", updateSkillById);
router.delete("/:skillId", deleteSkillById);

export default router;
