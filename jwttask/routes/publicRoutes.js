import express from "express";
const router = express.Router();

import { getCountries } from "../controllers/publicController.js";

router.get("/countries", getCountries);

export default router;