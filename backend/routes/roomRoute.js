import express from "express";
import { deleteRoom, getAllRooms, getOneRoom, roomPost, updateRoom } from "../controllers/roomController.js";
import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/:hotelId", roomPost);
router.put("/:id", verifyAdmin, updateRoom);
router.delete("/:id/:hotelId",  deleteRoom);
router.get("/:id", getOneRoom);
router.get("/", getAllRooms);

export default router; 