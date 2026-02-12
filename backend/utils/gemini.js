import fetch from "node-fetch";

export const generatePortfolioJSON = async (resumeText) => {
  const response = await fetch(
`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${process.env.GEMINI_API_KEY}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contents: [
          {
            parts: [
              {
                text: `
You are an AI that extracts resume data and returns ONLY valid JSON.

Return JSON with this exact structure:
{
  "name": "",
  "title": "",
  "summary": "",
  "skills": [],
  "experience": [],
  "projects": [],
  "education": {
    "institution": "",
    "degree": "",
    "dates": "",
    "description": ""
  },
  "contact": {
    "email": "",
    "phone": "",
    "location": "",
    "github": "",
    "linkedin": ""
  }
}

Resume text:
${resumeText}
`
              }
            ]
          }
        ]
      })
    }
  );

  const data = await response.json();

  // 🔍 DEBUG (important)
  console.log("GEMINI RAW RESPONSE:", JSON.stringify(data, null, 2));

  // ❌ Gemini error handling
  if (!data.candidates || data.candidates.length === 0) {
    throw new Error(
      data.error?.message || "Gemini did not return candidates"
    );
  }

  const text = data.candidates[0]?.content?.parts?.[0]?.text;

  if (!text) {
    throw new Error("Gemini response missing text output");
  }

  // 🧠 Sometimes Gemini wraps JSON in ```json
  const cleanedText = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  return JSON.parse(cleanedText);
};
