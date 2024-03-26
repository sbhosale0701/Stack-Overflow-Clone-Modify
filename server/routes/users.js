import express from "express";
const router = express.Router();

// mechanism
import { login, signup } from "../controllers/auth.js";
import { getAllUsers, updateProfile } from "../controllers/users.js";
import { mobileGet, otpVerify } from "../controllers/verify.js";

// middleware
import auth from "../middleware/auth.js";

// Routes
router.post("/signup", signup);
router.post("/login", login);

router.get("/getAllUsers", getAllUsers);
router.patch("/update/:id", auth, updateProfile);

router.post("/otpsend", mobileGet);
router.post("/verify", otpVerify);

export default router;
