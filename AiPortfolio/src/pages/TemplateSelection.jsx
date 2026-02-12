import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../navbar";
import { Check } from "lucide-react";

const templates = [
  {
    id: "modern-minimal",
    name: "Modern Minimal",
    desc: "Clean layout with modern typography",
    tag: "Most Popular",
    image: "/templates/modern-minimal.png",
  },
  {
    id: "creative-colorful",
    name: "Creative Colorful",
    desc: "Vibrant colors with creative sections",
    tag: "Best for Creators",
    image: "/templates/creative-colorful.png",
  },
  {
    id: "professional-blue",
    name: "Professional Blue",
    desc: "Corporate-style professional design",
    tag: "Best for Professionals",
    image: "/templates/professional-blue.png",
  },
  {
    id: "dark-elegant",
    name: "Dark Elegant",
    desc: "Dark theme with elegant styling",
    tag: "Trending",
    image: "/templates/dark-elegant.png",
  },
  {
    id: "minimalist",
    name: "Minimalist",
    desc: "Ultra-simple and distraction-free",
    tag: "Best for Freshers",
    image: "/templates/minimalist.png",
  },
];

export default function TemplateSelection() {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

const handleContinue = () => {
  if (!selected) return;

  localStorage.setItem("selectedTemplate", selected);
  navigate("/portfolio-preview");
};


  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <Navbar />

      {/* Header */}
      <div className="max-w-6xl mx-auto mb-10">
        <p className="text-sm text-purple-600 font-semibold">
          Step 2 of 3
        </p>
        <h1 className="text-3xl font-bold mt-2">
          Choose Your Portfolio Template
        </h1>
        <p className="text-gray-600 mt-2">
          Pick a design that best represents your profile.
        </p>
      </div>

      {/* Template Grid */}
      <div className="max-w-6xl mx-auto grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => {
          const isSelected = selected === template.id;

          return (
            <div
              key={template.id}
              onClick={() => setSelected(template.id)}
              className={`cursor-pointer rounded-xl border bg-white transition-all
              hover:shadow-lg hover:scale-[1.02]
              ${
                isSelected
                  ? "border-purple-600 ring-2 ring-purple-300"
                  : "border-gray-200"
              }`}
            >
              {/* Image */}
              <div className="relative">
                <img
                  src={template.image}
                  alt={template.name}
                  className="rounded-t-xl h-48 w-full object-cover"
                />

                {isSelected && (
                  <div className="absolute top-3 right-3 bg-purple-600 text-white p-1 rounded-full">
                    <Check size={16} />
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="text-lg font-semibold">
                  {template.name}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {template.desc}
                </p>

                <span className="inline-block mt-3 text-xs bg-purple-100 text-purple-700 px-3 py-1 rounded-full">
                  {template.tag}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer Actions */}
      <div className="max-w-6xl mx-auto mt-10 flex justify-end gap-4">
        <button
          disabled={!selected}
          onClick={handleContinue}
          className={`px-6 py-3 rounded-lg font-medium transition
          ${
            selected
              ? "bg-purple-600 text-white hover:bg-purple-700"
              : "bg-gray-300 text-gray-600 cursor-not-allowed"
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
