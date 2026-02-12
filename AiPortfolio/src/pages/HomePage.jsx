import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Upload, FileText, Zap, Eye, Download, CheckCircle, ArrowRight, Star, Users, Award } from 'lucide-react';
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
      const res = await axios.post("http://localhost:5000/api/upload", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      // store resume JSON in localStorage to pass to next page
      localStorage.setItem("resumeData", JSON.stringify(res.data));

      setStatus("success");

      // redirect to YOUR actual template page
      setTimeout(() => navigate("/template-selection"), 1000);

    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white p-6">
    <Navbar/>
      {/* <h1 className="text-5xl font-bold mb-6 text-center">
        
        Automatic <span className="text-purple-400">Portfolio Generator</span>
      </h1> */}
      <p className="text-gray-300 text-center max-w-2xl mb-10">
        Upload your resume and watch it transform automatically into a stunning
        online portfolio.
      </p>

      <div
        className={`w-full max-w-xl p-12 border-2 border-dashed rounded-2xl transition-all duration-300 ${
          isDragging
            ? "border-purple-400 bg-purple-900/30"
            : "border-slate-600 bg-slate-800/50"
        } ${status === "success" ? "border-green-400 bg-green-900/20" : ""} ${
          status === "error" ? "border-red-400 bg-red-900/20" : ""
        }`}
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
              className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              Upload & Continue
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}

        {status === "error" && (
          <div className="text-center">
            <FileText className="w-16 h-16 text-red-400 mx-auto mb-4" />
            <p className="text-red-400 text-lg mb-2">
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
              className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center"
            >
              <FileText className="w-5 h-5 mr-2" />
              Choose File
            </button>
            <p className="text-gray-500 text-sm mt-4">
              Supports only PDF up to 10MB
            </p>
          </div>
        )}
      

        {/* Floating Elements */}
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-purple-500/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-32 h-32 bg-pink-500/10 rounded-full blur-xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/4 w-16 h-16 bg-cyan-500/10 rounded-full blur-xl animate-pulse delay-500"></div>
      </div>

      {/* Features Section */}
      <section id="features" className="py-24 px-6 bg-slate-800/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Powerful Features</h2>
            <p className="text-gray-400 text-lg">Everything you need to create an outstanding portfolio</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <Zap className="w-12 h-12 text-purple-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">AI-Powered Creation</h3>
              <p className="text-gray-400">Our advanced AI analyzes your resume and creates a personalized portfolio that highlights your strengths.</p>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <Eye className="w-12 h-12 text-pink-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Professional Design</h3>
              <p className="text-gray-400">Beautiful, modern templates that make your portfolio stand out from the competition.</p>
            </div>
            
            <div className="bg-slate-900/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <Download className="w-12 h-12 text-cyan-400 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Instant Export</h3>
              <p className="text-gray-400">Download your portfolio as HTML or share it instantly with a custom URL.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-purple-400 mr-2" />
                <span className="text-4xl font-bold text-white">50K+</span>
              </div>
              <p className="text-gray-400">Happy Users</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <FileText className="w-8 h-8 text-pink-400 mr-2" />
                <span className="text-4xl font-bold text-white">100K+</span>
              </div>
              <p className="text-gray-400">Portfolios Created</p>
            </div>
            <div>
              <div className="flex items-center justify-center mb-4">
                <Award className="w-8 h-8 text-cyan-400 mr-2" />
                <span className="text-4xl font-bold text-white">95%</span>
              </div>
              <p className="text-gray-400">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-slate-700">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
              <Zap className="w-4 h-4 text-white" />
            </div>
            <span className="text-lg font-bold text-white">PortfolioAI</span>
          </div>
          <p className="text-gray-400">© 2025 PortfolioAI. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;