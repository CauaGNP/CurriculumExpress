import {
  createProfileSummary,
  deleteProfileSummary,
  getAllProfileSummary,
  getProfilleSummaryById,
  updateProfileSummary,
} from "@/service";
import { Router } from "express";

const router = Router();

router.get("/", getAllProfileSummary);
router.get("/:profileSummaryId", getProfilleSummaryById);
router.post("/", createProfileSummary);
router.put("/:profileSummaryId", updateProfileSummary);
router.delete("/:profileSummaryId", deleteProfileSummary);

export default router;
