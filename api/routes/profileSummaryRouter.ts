import { Router } from "express";
import {
  createProfileSummary,
  deleteProfileSummary,
  getAllProfileSummary,
  getProfileSummaryById,
  updateProfileSummary,
} from "../controller/profileSummaryController.js";

const router = Router();

router.get("/", getAllProfileSummary);
router.get("/:profileSummaryId", getProfileSummaryById);
router.post("/", createProfileSummary);
router.put("/:profileSummaryId", updateProfileSummary);
router.delete("/:profileSummaryId", deleteProfileSummary);

export default router;
