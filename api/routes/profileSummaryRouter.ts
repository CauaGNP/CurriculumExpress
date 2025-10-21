import {
  createProfileSummary,
  deleteProfileSummary,
  getAllProfileSummary,
  getProfileSummaryById,
  updateProfileSummary,
} from "@/controller/profileSummaryController.ts";
import { Router } from "express";

const router = Router();

router.get("/", getAllProfileSummary);
router.get("/:profileSummaryId", getProfileSummaryById);
router.post("/", createProfileSummary);
router.put("/:profileSummaryId", updateProfileSummary);
router.get("/:profileSummaryId", deleteProfileSummary);

export default router;
