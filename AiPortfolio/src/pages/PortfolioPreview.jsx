<<<<<<< HEAD
import { useRef, useState } from "react";
=======
import { useRef } from "react";
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135

import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../templates/TemplateThree";
import TemplateFour from "../templates/TemplateFour";
import TemplateFive from "../templates/TemplateFive";
<<<<<<< HEAD
import TemplateSix from "../templates/TemplateSix";
import TemplateSeven from "../templates/TemplateSeven";
import TemplateEight from "../templates/TemplateEight";

import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";

const Navbars = () => {
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-slate-900/80 backdrop-blur-md px-6 py-4 shadow-md fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => navigate("/")}
        >
          <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">PortfolioAI</span>
        </div>

        {/* Links */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-purple-500"
                : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/template-selection"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-purple-500"
                : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Templates
          </NavLink>
          {/* <NavLink
            to="/portfolio-preview"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-purple-500"
                : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Preview
          </NavLink> */}
        </div>
      </div>
    </nav>
  );
};




const PortfolioPreview = () => {
  const previewRef = useRef();
  const [portfolioId, setPortfolioId] = useState(null);
=======

const PortfolioPreview = () => {

  const previewRef = useRef();
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135

  const resumeData = JSON.parse(localStorage.getItem("resumeData"));
  const selectedTemplate = localStorage.getItem("selectedTemplate");

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        No template selected. Please go back and choose one.
      </div>
    );
  }

<<<<<<< HEAD
  // ✅ Generate FULL HTML with Tailwind
  const generateHTML = () => {
    if (!previewRef.current) return "";

    return `
=======
  const downloadPortfolio = () => {

    const htmlContent = `
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${resumeData?.name || "Portfolio"}</title>
<<<<<<< HEAD

<!-- ✅ Tailwind CDN (IMPORTANT) -->
<script src="https://cdn.tailwindcss.com"></script>

</head>

<body>
${previewRef.current.outerHTML}
</body>
</html>
`;
  };

  // ✅ Download portfolio
  const downloadPortfolio = () => {
    const htmlContent = generateHTML();
=======
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
${previewRef.current?.outerHTML}
</body>
</html>
`;
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135

    const blob = new Blob([htmlContent], { type: "text/html" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "portfolio.html";
    link.click();
  };

<<<<<<< HEAD
  // ✅ Save to backend
  const savePortfolio = async () => {
    try {
      const htmlContent = generateHTML();

      const res = await fetch("http://localhost:5000/api/save-portfolio", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          html: htmlContent,
          template: selectedTemplate,
        }),
      });

      if (!res.ok) throw new Error("Save failed");

      const data = await res.json();

      setPortfolioId(data.id);

      alert("✅ Portfolio Saved!");
      return data.id;

    } catch (err) {
      console.error("SAVE ERROR:", err);
      alert("❌ Save failed");
    }
  };

  // ✅ Deploy to Vercel
  const deployPortfolio = async (id) => {
    try {
      const res = await fetch("http://localhost:5000/api/deploy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id,
        }),
      });

      let data;
      try {
        data = await res.json();
      } catch {
        const text = await res.text();
        console.error("Invalid JSON:", text);
        throw new Error("Invalid response");
      }

      if (!res.ok) throw new Error(data.error || "Deploy failed");

      alert("🚀 Live URL: " + data.url);

    } catch (err) {
      console.error("DEPLOY ERROR:", err);
      alert("❌ Deployment failed");
    }
  };

  // ✅ Combined handler
  const handleDeploy = async () => {
    let id = portfolioId;

    if (!id) {
      id = await savePortfolio();
    }

    if (id) {
      await deployPortfolio(id);
    }
  };

  // ✅ Render template
=======
  const deployPortfolio = async () => {

    const htmlContent = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>${resumeData?.name || "Portfolio"}</title>
<script src="https://cdn.tailwindcss.com"></script>
</head>
<body>
${previewRef.current?.outerHTML}
</body>
</html>
`;

    try {
      const response = await fetch("http://localhost:5000/api/deploy", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ html: htmlContent })
      });

      const result = await response.json();

      alert("Portfolio deployed at: " + result.url);

    } catch (error) {
      console.error(error);
      alert("Deployment failed");
    }
  };

>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
  const renderTemplate = () => {
    switch (selectedTemplate) {
      case "modern-minimal":
        return <TemplateOne data={resumeData} />;

      case "creative-colorful":
        return <TemplateTwo data={resumeData} />;

      case "professional-blue":
        return <TemplateThree data={resumeData} />;

      case "dark-elegant":
        return <TemplateFour data={resumeData} />;

      case "minimalist":
        return <TemplateFive data={resumeData} />;

<<<<<<< HEAD
      case "Advanced":
        return <TemplateSix data={resumeData} />;
      
      case "glass":
        return <TemplateSeven data={resumeData} />;

      case "neon":
        return <TemplateEight data={resumeData} />; 

=======
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
      default:
        return (
          <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
            Invalid template selection
          </div>
        );
    }
  };

  return (
<<<<<<< HEAD
    <div>
        <Navbars />

      {/* Preview */}
      <div ref={previewRef}>
        {renderTemplate()}
      </div>
      {/* Buttons */}
      <div className="flex justify-center gap-4 p-4">
=======

    <div>

      <div className="flex gap-4 p-4">

>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
        <button
          onClick={downloadPortfolio}
          className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700"
        >
          Download Portfolio
        </button>

        <button
<<<<<<< HEAD
          onClick={handleDeploy}
=======
          onClick={deployPortfolio}
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
          className="bg-green-600 text-white px-5 py-2 rounded hover:bg-green-700"
        >
          Deploy Portfolio
        </button>
<<<<<<< HEAD
      </div>
=======

      </div>

      <div ref={previewRef}>
        {renderTemplate()}
      </div>

>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
    </div>
  );
};

export default PortfolioPreview;