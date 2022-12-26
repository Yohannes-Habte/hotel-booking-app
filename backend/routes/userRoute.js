import express from "express";
import {deleteUser, getAllUsers, getOneUser, updateUserData, userPost } from "../controllers/userController.js";
import { verifyAdmin, verifyUser } from "../middleware/verifyToken.js";


const router = express.Router();

// Register a user
router.post("/", verifyUser, userPost );
router.put("/:id", verifyUser, updateUserData );
router.delete("/:id", verifyUser, deleteUser);
router.get("/:id", verifyUser, getOneUser);
router.get("/", verifyAdmin, getAllUsers);

export default router; 