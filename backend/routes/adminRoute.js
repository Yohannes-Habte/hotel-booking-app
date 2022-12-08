import express from "express";
import { adminPost, loginUser } from "../controllers/adminController.js";

const router = express.Router();

router.post("/", adminPost);
router.post("/login", loginUser);

export default router;