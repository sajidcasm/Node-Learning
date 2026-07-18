import express from "express";
const router = express.Router();

import { signup, login, getProfile } from "../controllers/authController.js";
import authMiddleware from "../middleware/authMiddleware.js";

// Signup

router.get("/", (req,res)=>{
    res.send("You are on auth route, you can hit post api : localhost:5000/api/login or  localhost:5000/api/login ");
})


// router.post("/signup", (req, res) => {
//   res.send("Signup Route");
// });
// example 
// Login
// router.post("/login", (req, res) => {
//   res.send("Login Route");
// });
// example


router.post("/signup", signup);
router.post("/login", login);
router.get("/profile", authMiddleware, getProfile);



export default router;