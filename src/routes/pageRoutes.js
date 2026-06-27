import express from "express";
import { getHomePage } from "../controllers/pageController.js";

const router = express.Router();

router.get("/", getHomePage);

export { router };