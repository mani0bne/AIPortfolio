import express from "express";
import { savePortfolio } from "../controller/savePortfolioController.js";

const router = express.Router();

router.post("/save-portfolio", savePortfolio);

export default router;