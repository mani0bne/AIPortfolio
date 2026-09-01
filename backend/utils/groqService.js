import axios from "axios";


export const generatePortfolioData = async (resumeText) => {
  try {
    const response = await axios.post(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        model: "llama-3.3-70b-versatile",
        messages: [
          {
            role: "system",
            content: "You are an AI that converts resumes into structured JSON for portfolio websites. If no data is found return no data found"
          },
          {
            role: "user",
            content: `Convert this resume into JSON format:
            
${resumeText}

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
  }`
          }
        ],
        temperature: 0.7
      },
      {
        headers: {
          Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
          "Content-Type": "application/json"
        }
      }
    );

    const cleanJSON = (text) => {
      return text
        .replace(/```json/g, "")   // remove ```json
        .replace(/```/g, "")       // remove ```
        .trim();
};

    const raw = response.data.choices[0].message.content;
    const cleaned = cleanJSON(raw);

    return JSON.parse(cleaned);

  } catch (error) {
    console.error("Groq Error:", error);
    throw error;
  }
};