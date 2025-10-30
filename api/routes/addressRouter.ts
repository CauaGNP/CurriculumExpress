import { Router } from "express";
import {
  createAddress,
  deleteAddressById,
  getAddressById,
  getAllAddress,
  updateAddressById,
} from "../controller/addressController.js";

const router = Router();

router.get("/", getAllAddress);
router.get("/:addressId", getAddressById);
router.post("/", createAddress);
router.put("/:addressId", updateAddressById);
router.delete("/:addressId", deleteAddressById);

export default router;
