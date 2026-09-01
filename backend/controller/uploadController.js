import fs from "fs";
import { extractTextFromPDF } from "../utils/pdfParser.js";
import { generatePortfolioJSON } from "../utils/gemini.js";
<<<<<<< HEAD
import { generatePortfolioData } from "../utils/groqService.js";
=======
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135

export const uploadResume = async (req, res) => {
  try {
    const filePath = req.file.path;

<<<<<<< HEAD
    // ✅ Extract text
    const resumeText = await extractTextFromPDF(filePath);

    let portfolioData;

    try {
      // 🔥 TRY GEMINI FIRST
      portfolioData = await generatePortfolioJSON(resumeText);
      console.log("✅ Gemini used");

    } catch (err) {
      console.log("⚠️ Gemini failed, switching to Groq...");

      // 🔥 FALLBACK TO GROQ
      portfolioData = await generatePortfolioData(resumeText);
      console.log("✅ Groq used");
    }

    // ✅ Delete uploaded file
    fs.unlinkSync(filePath);

    res.status(200).json(portfolioData);

=======
    const resumeText = await extractTextFromPDF(filePath);
    const portfolioData = await generatePortfolioJSON(resumeText);

    fs.unlinkSync(filePath); // cleanup

    res.status(200).json(portfolioData);
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
  } catch (error) {
    console.error("UPLOAD ERROR:", error);
    res.status(500).json({ error: "Failed to process resume" });
  }
<<<<<<< HEAD
};
=======
};
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
