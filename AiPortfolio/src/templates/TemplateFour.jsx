import {
  User,
  Briefcase,
  Folder,
  GraduationCap,
  Star,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin
} from "lucide-react";

const DarkElegantTemplate = ({ data = {} }) => {
  // ---------- SAFE DEFAULTS ----------
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

  // ---------- URL FIX ----------
  const formatURL = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

  return (
    <div className="w-full min-h-screen bg-gray-900 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 mb-8 shadow-2xl">
          <h1 className="text-6xl font-bold text-white mb-3">{name}</h1>
          <p className="text-2xl text-gray-300">{title}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Contact */}
            {(contact.email || contact.phone) && (
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-cyan-400 mb-4">
                  Contact
                </h2>

                <div className="space-y-3 text-sm text-gray-300">
                  {contact.email && (
                    <p className="flex items-center gap-2">
                      <Mail size={16} />
                      {contact.email}
                    </p>
                  )}

                  {contact.phone && (
                    <p className="flex items-center gap-2">
                      <Phone size={16} />
                      {contact.phone}
                    </p>
                  )}

                  {contact.location && (
                    <p className="flex items-center gap-2">
                      <MapPin size={16} />
                      {contact.location}
                    </p>
                  )}

                  {contact.github && (
                    <a
                      href={formatURL(contact.github)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:underline"
                    >
                      <Github size={16} />
                      GitHub
                    </a>
                  )}

                  {contact.linkedin && (
                    <a
                      href={formatURL(contact.linkedin)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-cyan-400 hover:underline"
                    >
                      <Linkedin size={16} />
                      LinkedIn
                    </a>
                  )}
                </div>
              </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <Star size={20} />
                  Skills
                </h2>
                <div className="space-y-2">
                  {skills.map((skill, idx) => (
                    <div key={idx} className="text-gray-300 text-sm">
                      • {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Education */}
            {education?.degree && (
              <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
                <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <GraduationCap size={20} />
                  Education
                </h2>

                <p className="text-white font-semibold">
                  {education.degree}
                </p>
                <p className="text-gray-300 text-sm">
                  {education.institution}
                </p>
                <p className="text-gray-400 text-xs">
                  {education.dates}
                </p>
                <p className="text-gray-300 text-sm mt-2">
                  {education.description}
                </p>
              </div>
            )}
          </div>

          {/* Main Content */}
          <div className="md:col-span-2 space-y-6">

            {/* About */}
            {summary && (
              <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                  <User size={24} />
                  About Me
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  {summary}
                </p>
              </div>
            )}

            {/* Experience */}
            {experience.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  <Briefcase size={24} />
                  Experience
                </h2>

                {experience.map((exp, idx) => (
                  <div
                    key={idx}
                    className="mb-6 pb-6 border-b border-gray-700 last:border-0"
                  >
                    <h3 className="text-xl font-semibold text-white">
                      {exp.role}
                    </h3>
                    <p className="text-cyan-400 mb-2">
                      {exp.company} • {exp.duration}
                    </p>
                    <p className="text-gray-300">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
              <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
                  <Folder size={24} />
                  Projects
                </h2>

                <div className="grid gap-4">
                  {projects.map((project, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-900 p-6 rounded-lg border border-gray-700"
                    >
                      <h3 className="text-lg font-semibold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-400">
                        {project.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </div>
    </div>
  );
};

export default DarkElegantTemplate;
