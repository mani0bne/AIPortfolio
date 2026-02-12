import {
  User,
  Briefcase,
  Folder,
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Star,
  Calendar
} from "lucide-react";

const CreativeColorfulTemplate = ({ data = {} }) => {
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

  const formatURL = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 p-8">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            {name}
          </h1>
          <p className="text-2xl text-gray-700 mt-2">{title}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {/* LEFT COLUMN */}
          <div className="space-y-8">

            {/* About */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-purple-600 flex gap-2">
                <User /> About
              </h2>
              <p className="text-gray-700 mt-2 text-sm">{summary}</p>
            </div>

            {/* Skills */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-pink-600 flex gap-2">
                <Star /> Skills
              </h2>
              <div className="flex flex-wrap gap-2 mt-3">
                {skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full text-sm text-white bg-gradient-to-r from-purple-500 to-pink-500"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Education (OBJECT FIX) */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-orange-600 flex gap-2">
                <GraduationCap /> Education
              </h2>

              {education?.degree && (
                <div className="mt-2 text-sm text-gray-700">
                  <p className="font-semibold">{education.degree}</p>
                  <p>{education.institution}</p>
                  <p className="text-gray-500">{education.dates}</p>
                  <p className="mt-1">{education.description}</p>
                </div>
              )}
            </div>

            {/* Contact Section (NEW) */}
            <div className="bg-white rounded-2xl shadow-xl p-6">
              <h2 className="text-xl font-bold text-purple-600 mb-3">
                Contact
              </h2>

              <div className="space-y-2 text-sm text-gray-700">
                {contact.email && (
                  <p className="flex items-center gap-2">
                    <Mail size={16} /> {contact.email}
                  </p>
                )}

                {contact.phone && (
                  <p className="flex items-center gap-2">
                    <Phone size={16} /> {contact.phone}
                  </p>
                )}

                {contact.location && (
                  <p className="flex items-center gap-2">
                    <MapPin size={16} /> {contact.location}
                  </p>
                )}

                {contact.github && (
                  <a
                    href={formatURL(contact.github)}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Github size={16} /> GitHub
                  </a>
                )}

                {contact.linkedin && (
                  <a
                    href={formatURL(contact.linkedin)}
                    target="_blank"
                    className="flex items-center gap-2 text-blue-600 hover:underline"
                  >
                    <Linkedin size={16} /> LinkedIn
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="md:col-span-2 space-y-8">

            {/* Experience */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-purple-600 flex gap-2">
                <Briefcase /> Experience
              </h2>

              {experience.map((exp, i) => (
                <div key={i} className="mt-4 border-l-4 border-purple-300 pl-4">
                  <h3 className="font-semibold">{exp.role}</h3>
                  <p className="text-purple-600">{exp.company}</p>
                  <p className="text-sm text-gray-500 flex gap-1 items-center">
                    <Calendar size={14} /> {exp.duration}
                  </p>
                  <p className="mt-1 text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>

            {/* Projects */}
            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold text-pink-600 flex gap-2">
                <Folder /> Projects
              </h2>

              <div className="grid gap-4 mt-4">
                {projects.map((project, i) => (
                  <div key={i} className="p-4 rounded-xl bg-purple-50">
                    <h3 className="font-semibold">{project.title}</h3>
                    <p className="text-gray-700 text-sm">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreativeColorfulTemplate;
