import express from "express";
import { countByCity, deleteBookedHotel, getAllHotels, getOneHotel, hotelPost, updateHotelBooking } from "../controllers/hotelController.js";
import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, hotelPost);
router.put("/:id", verifyAdmin, updateHotelBooking);
router.delete("/:id", verifyAdmin, deleteBookedHotel);
router.get("/find:id", getOneHotel);
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotels);

export default router;  