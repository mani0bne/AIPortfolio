import fs from "fs";
import { extractTextFromPDF } from "../utils/pdfParser.js";
import { generatePortfolioJSON } from "../utils/gemini.js";

export const uploadResume = async (req, res) => {
  try {
    const filePath = req.file.path;

    const resumeText = await extractTextFromPDF(filePath);
    const portfolioData = await generatePortfolioJSON(resumeText);

    fs.unlinkSync(filePath); // cleanup

    res.status(200).json(portfolioData);
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ error: "Failed to process resume" });
  }
};
