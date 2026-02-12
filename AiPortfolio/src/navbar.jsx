import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Zap } from "lucide-react";

const Navbar = () => {
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
          <NavLink
            to="/portfolio-preview"
            className={({ isActive }) =>
              isActive
                ? "text-white font-semibold border-b-2 border-purple-500"
                : "text-gray-300 hover:text-white transition-colors"
            }
          >
            Preview
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
