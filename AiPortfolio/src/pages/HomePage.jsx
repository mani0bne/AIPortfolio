import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import {
  Upload,
  FileText,
  Zap,
  Eye,
  Download,
  CheckCircle,
  ArrowRight,
  Users,
  Award,
} from "lucide-react";
import Navbar from "../navbar";

const HomePage = () => {
  const [file, setFile] = useState(null);
  const [status, setStatus] = useState("");
  const [isDragging, setIsDragging] = useState(false);

  const fileInputRef = useRef(null);
  const navigate = useNavigate();

  const handleFileSelect = (selectedFile) => {
    if (!selectedFile) return;

    const isPDF =
      selectedFile.type === "application/pdf" ||
      selectedFile.name.toLowerCase().endsWith(".pdf");

    if (isPDF) {
      setFile(selectedFile);
      setStatus("ready");
    } else {
      setStatus("error");
      setTimeout(() => setStatus(""), 3000);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    handleFileSelect(e.dataTransfer.files[0]);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleUpload = async () => {
    if (!file) return alert("Please select a resume file first!");

    setStatus("uploading");

    const formData = new FormData();
    formData.append("resume", file);

    try {
      const res = await axios.post(
<<<<<<< HEAD
        "http://localhost:5000/api/upload",
=======
        "https://aiportfolio-y62u.onrender.com/api/upload",
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      localStorage.setItem("resumeData", JSON.stringify(res.data));

      setStatus("success");

      setTimeout(() => navigate("/template-selection"), 1000);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
<<<<<<< HEAD
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6 pt-24">
=======
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
      <Navbar />

      <p className="text-gray-300 text-center max-w-2xl mb-10">
        Upload your resume and watch it transform automatically into a stunning
        online portfolio.
      </p>

      {/* Upload Box */}
      <div
        className={`w-full max-w-xl p-12 border-2 border-dashed rounded-2xl transition-all duration-300
        ${
          isDragging
            ? "border-purple-400 bg-purple-900/30"
            : "border-slate-600 bg-slate-800/50"
        }
        ${status === "success" && "border-green-400 bg-green-900/20"}
        ${status === "error" && "border-red-400 bg-red-900/20"}
      `}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={(e) => handleFileSelect(e.target.files[0])}
        />

        {status === "uploading" && (
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-400 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
            <p>Uploading your resume...</p>
          </div>
        )}

        {status === "ready" && (
          <div className="text-center">
            <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <p className="mb-2 text-lg">Ready to upload</p>
            <p className="text-gray-400 mb-6">{file?.name}</p>

            <button
              onClick={handleUpload}
              className="bg-gradient-to-r from-green-500 to-emerald-500 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              Upload & Continue
              <ArrowRight className="w-5 h-5 ml-2 inline" />
            </button>
          </div>
        )}

        {status === "error" && (
          <div className="text-center">
            <FileText className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <p className="text-red-400 text-lg">
              Invalid file. Please upload a PDF.
            </p>
          </div>
        )}

        {!status && (
          <div className="text-center">
            <Upload className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <p className="text-lg mb-4">Drag & drop your resume here</p>

            <button
              onClick={() => fileInputRef.current?.click()}
              className="bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-3 rounded-lg font-semibold hover:scale-105 transition"
            >
              <FileText className="w-5 h-5 mr-2 inline" />
              Choose File
            </button>

            <p className="text-gray-500 text-sm mt-4">
              Supports only PDF up to 10MB
            </p>
          </div>
        )}
      </div>

      {/* Features */}
      <section className="py-24 px-6 bg-slate-800/50 w-full mt-20">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          <Feature
            icon={<Zap className="w-12 h-12 text-purple-400 mb-6" />}
            title="AI-Powered Creation"
            text="AI analyzes your resume and builds a personalized portfolio."
          />

          <Feature
            icon={<Eye className="w-12 h-12 text-pink-400 mb-6" />}
            title="Professional Design"
            text="Modern templates that make your portfolio stand out."
          />

          <Feature
            icon={<Download className="w-12 h-12 text-cyan-400 mb-6" />}
            title="Instant Export"
            text="Download your portfolio or share it with a custom URL."
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-700 w-full text-center">
        <div className="flex justify-center items-center space-x-2 mb-4">
          <Zap className="w-5 h-5 text-purple-400" />
          <span className="font-bold">PortfolioAI</span>
        </div>
        <p className="text-gray-400">© 2026 PortfolioAI. All rights reserved.</p>
      </footer>
    </div>
  );
};

const Feature = ({ icon, title, text }) => (
  <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition">
    {icon}
    <h3 className="text-xl font-semibold mb-3">{title}</h3>
    <p className="text-gray-400">{text}</p>
  </div>
);

<<<<<<< HEAD
export default HomePage;
=======
export default HomePage;
>>>>>>> 439d731f31ec0cfc365a3cdf5195d641754da135
