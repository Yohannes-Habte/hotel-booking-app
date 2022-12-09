import express from "express";
import { countByCity, deleteBookedHotel, getAllHotels, getOneHotel, hotelPost, updatedBookedHotel } from "../controllers/hotelController.js";
//import { verifyAdmin } from "../middleware/verifyToken.js";

const router = express.Router();

router.post("/", hotelPost);
router.put("/:id", updatedBookedHotel);
router.delete("/:id", deleteBookedHotel);
router.get("/:id", getOneHotel);  
router.get("/", getAllHotels);
router.get("/countByCity", countByCity);
router.get("/countByType", getAllHotels); 

export default router;  