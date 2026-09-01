import Portfolio from "../models/Portfolio.js";

export const savePortfolio = async (req, res) => {
  try {
    const { html, template } = req.body;

    if (!html) {
      return res.status(400).json({ error: "HTML is required" });
    }

    const newPortfolio = new Portfolio({
      html,
      template,
    });

    await newPortfolio.save();

    res.json({ id: newPortfolio._id });

  } catch (error) {
    console.error("SAVE ERROR:", error);
    res.status(500).json({ error: "Failed to save portfolio" });
  }
};