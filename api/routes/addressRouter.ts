import { createAddress, deleteAddressById, getAddressById, getAllAddress, updateAddressById } from "@/controller/addressController.js";
import { Router } from "express";

const router = Router();

router.get("/", getAllAddress);
router.get("/:addressId", getAddressById);
router.post("/", createAddress);
router.put("/:addressId", updateAddressById);
router.get("/:addressId", deleteAddressById);

export default router;