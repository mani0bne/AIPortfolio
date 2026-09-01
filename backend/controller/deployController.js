<<<<<<< HEAD
import Portfolio from "../models/Portfolio.js";
import fetch from "node-fetch";
import dotenv from "dotenv";
dotenv.config();

export const deployPortfolio = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ error: "Portfolio ID required" });
    }

    // ✅ Fetch from MongoDB
    const portfolio = await Portfolio.findById(id);

    if (!portfolio) {
      return res.status(404).json({ error: "Portfolio not found" });
    }

    const htmlContent = portfolio.html;

    // ✅ Deploy to Vercel
    const response = await fetch("https://api.vercel.com/v13/deployments?skipAutoDetectionConfirmation=1", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.VERCEL_TOKEN}`, // 🔥 PUT YOUR TOKEN HERE
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "portfolio-" + Date.now(),
        files: [
          {
            file: "index.html",
            data: htmlContent,
          },
        ],
      }),
    });

    const data = await response.json();

    if (!data.url) {
      console.error("VERCEL ERROR:", data);
      return res.status(500).json({ error: "Deployment failed" });
    }

    res.json({
      url: `https://${data.url}`,
    });

  } catch (error) {
    console.error("DEPLOY ERROR:", error);
    res.status(500).json({ error: "Deployment failed" });
  }
};
=======
// import fetch from "node-fetch";

// export const deployPortfolio = async (req, res) => {

//   try {

//     const { html } = req.body;

//     const projectName = "portfolio-" + Date.now();

//     const response = await fetch(
//       "https://api.vercel.com/v13/deployments",
//       {
//         method: "POST",
//         headers: {
//           Authorization: `Bearer ${process.env.VERCEL_TOKEN}`,
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify({
//           name: projectName,
//           files: [
//             {
//               file: "index.html",
//               data: html
//             }
//           ]
//         })
//       }
//     );

//     const result = await response.json();

//     res.json({
//       url: "https://" + result.url
//     });

//   } catch (error) {

//     console.error(error);

//     res.status(500).json({
//       error: "Deployment failed"
//     });

//   }
// };
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
