import {
  Briefcase,
  Folder,
  GraduationCap,
  Award,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin
} from "lucide-react";

const formatURL = (url) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) return url;
  return `https://${url}`;
};

const ProfessionalBlueTemplate = ({ data = {} }) => {
  // SAFE DEFAULTS
  const {
    name = "",
    title = "",
    summary = "",
    skills = [],
    experience = [],
    projects = [],
    education = {},
    contact = {}
  } = data;

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
      <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">

        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-12">
          <h1 className="text-5xl font-bold mb-2">{name}</h1>
          <p className="text-2xl text-blue-100">{title}</p>

          {/* Contact */}
          <div className="flex flex-wrap gap-6 mt-6 text-sm text-blue-100">
            {contact.email && (
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>{contact.email}</span>
              </div>
            )}

            {contact.phone && (
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>{contact.phone}</span>
              </div>
            )}

            {contact.location && (
              <div className="flex items-center gap-2">
                <MapPin size={16} />
                <span>{contact.location}</span>
              </div>
            )}

            {contact.github && (
              <a
                href={formatURL(contact.github)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Github size={16} />
                GitHub
              </a>
            )}

            {contact.linkedin && (
              <a
                href={formatURL(contact.linkedin)}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>
            )}
          </div>
        </div>

        <div className="p-12">

          {/* Summary */}
          {summary && (
            <section className="mb-10 bg-blue-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-blue-800 mb-4">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{summary}</p>
            </section>
          )}

          <div className="grid md:grid-cols-3 gap-8 mb-10">

            {/* Skills */}
            <div>
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Award size={22} />
                Core Skills
              </h2>
              <div className="space-y-2">
                {skills.map((skill, idx) => (
                  <div
                    key={idx}
                    className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>

            {/* Experience */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <Briefcase size={22} />
                Work Experience
              </h2>

              {experience.map((exp, idx) => (
                <div
                  key={idx}
                  className="mb-6 pb-6 border-b border-gray-200 last:border-0"
                >
                  <h3 className="text-xl font-semibold text-gray-800">
                    {exp.role}
                  </h3>
                  <p className="text-blue-600 font-medium">
                    {exp.company}
                  </p>
                  <p className="text-sm text-gray-500 mb-2">
                    {exp.duration}
                  </p>
                  <p className="text-gray-700">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Projects */}
          {projects.length > 0 && (
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
                <Folder size={22} />
                Featured Projects
              </h2>

              <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-700">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Education */}
          {education?.degree && (
            <section className="bg-indigo-50 p-6 rounded-lg">
              <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
                <GraduationCap size={22} />
                Education
              </h2>

              <p className="font-semibold text-gray-800">
                {education.degree}
              </p>
              <p className="text-gray-700">
                {education.institution}
              </p>
              <p className="text-sm text-gray-500">
                {education.dates}
              </p>
              <p className="text-gray-700 mt-1">
                {education.description}
              </p>
            </section>
          )}

        </div>
      </div>
    </div>
  );
};

export default ProfessionalBlueTemplate;
