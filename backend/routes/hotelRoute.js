import express from "express";
import { countByCity, countByType, deleteBookedHotel, getAllHotels, getOneHotel, hotelPost, updatedBookedHotel } from "../controllers/hotelController.js";
import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", verifyAdmin, hotelPost);
router.put("/:id",  verifyAdmin, updatedBookedHotel);
router.delete("/find/:id",  verifyAdmin, deleteBookedHotel);
router.get("/:id", getOneHotel);  
router.get("/", getAllHotels);
router.get("/countByCity", countByCity); 
router.get("/countByType", countByType);

export default router;  