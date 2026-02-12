import TemplateOne from "../templates/TemplateOne";
import TemplateTwo from "../templates/TemplateTwo";
import TemplateThree from "../templates/TemplateThree";
import TemplateFour from "../templates/TemplateFour";
import TemplateFive from "../templates/TemplateFive";

const PortfolioPreview = () => {
  const resumeData = JSON.parse(localStorage.getItem("resumeData"));
  const selectedTemplate = localStorage.getItem("selectedTemplate");

  if (!selectedTemplate) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
        No template selected. Please go back and choose one.
      </div>
    );
  }

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
    default:
      return (
        <div className="min-h-screen flex items-center justify-center text-xl text-red-500">
          Invalid template selection
        </div>
      );
  }
};

export default PortfolioPreview;
