import {
  User,
  Code,
  Briefcase,
  Folder,
  GraduationCap,
  Trash2,
  Plus,Mail,Phone,MapPin,Github,Linkedin
} from "lucide-react";

/**
 * EXPECTED DATA SHAPE (from backend / JSON)
 *
 * {
 *   name: string,
 *   title: string,
 *   summary: string,
 *   skills: string[],
 *   experience: [
 *     { role, company, duration, description }
 *   ],
 *   projects: [
 *     { title, description }
 *   ],
 *   education: {
 *     institution,
 *     degree,
 *     dates,
 *     description
 *   }
 * }
 */

const ModernMinimalTemplate = ({ data = {}, isEditing = false, onDataChange }) => {
  // -------- SAFE DEFAULTS --------
  const {
    name = "",
    title = "",
    summary = "",
    skills = [],
    experience = [],
    projects = [],
    education = null,
  } = data;

  const formatURL = (url) => {
  if (!url) return "";
  if (url.startsWith("http://") || url.startsWith("https://")) {
    return url;
  }
  return `https://${url}`;
};


  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
        
        {/* ================= HEADER ================= */}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-12">
          {isEditing ? (
            <input
              value={name}
              onChange={(e) => onDataChange("name", e.target.value)}
              className="text-5xl font-bold mb-4 bg-transparent border-b-2 border-white w-full outline-none"
              placeholder="Your Name"
            />
          ) : (
            <h1 className="text-5xl font-bold mb-4">{name}</h1>
          )}

          {isEditing ? (
            <input
              value={title}
              onChange={(e) => onDataChange("title", e.target.value)}
              className="text-2xl text-slate-300 bg-transparent border-b border-slate-400 w-full outline-none"
              placeholder="Your Title"
            />
          ) : (
            <p className="text-2xl text-slate-300">{title}</p>
          )}
        </div>

        <div className="p-12">

          {/* ================= ABOUT ================= */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <User size={22} /> About Me
            </h2>

            {isEditing ? (
              <textarea
                value={summary}
                onChange={(e) => onDataChange("summary", e.target.value)}
                className="w-full p-4 border-2 border-slate-200 rounded-lg"
                rows={4}
              />
            ) : (
              <p className="text-slate-700 leading-relaxed">{summary}</p>
            )}
          </section>

          {/* ================= SKILLS ================= */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
              <Code size={22} /> Skills
            </h2>

            <div className="flex flex-wrap gap-3">
              {skills.map((skill, idx) => (
                <div key={idx} className="flex items-center gap-2">
                  <span className="bg-slate-800 text-white px-4 py-2 rounded-full">
                    {skill}
                  </span>

                  {isEditing && (
                    <button
                      onClick={() =>
                        onDataChange(
                          "skills",
                          skills.filter((_, i) => i !== idx)
                        )
                      }
                      className="text-red-500"
                    >
                      <Trash2 size={14} />
                    </button>
                  )}
                </div>
              ))}

              {isEditing && (
                <button
                  onClick={() => {
                    const skill = prompt("Enter new skill");
                    if (skill)
                      onDataChange("skills", [...skills, skill]);
                  }}
                  className="bg-slate-200 px-4 py-2 rounded-full"
                >
                  <Plus size={14} className="inline" /> Add Skill
                </button>
              )}
            </div>
          </section>

          {/* ================= EXPERIENCE ================= */}
          {experience.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Briefcase size={22} /> Experience
              </h2>

              {experience.map((exp, idx) => (
                <div key={idx} className="mb-6 border-l-4 border-slate-800 pl-6">
                  <h3 className="text-xl font-semibold">{exp.role}</h3>
                  <p className="text-slate-600">{exp.company}</p>
                  <p className="text-sm text-slate-500">{exp.duration}</p>
                  <p className="text-slate-700 mt-2">{exp.description}</p>
                </div>
              ))}
            </section>
          )}

          {/* ================= PROJECTS ================= */}
          {projects.length > 0 && (
            <section className="mb-12">
              <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
                <Folder size={22} /> Projects
              </h2>

              <div className="grid gap-6">
                {projects.map((project, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200"
                  >
                    <h3 className="text-xl font-semibold mb-2">
                      {project.title}
                    </h3>
                    <p className="text-slate-700">
                      {project.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* ================= EDUCATION ================= */}
          {education && (
            <section>
              <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <GraduationCap size={22} /> Education
              </h2>

              <div className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
                <h3 className="text-lg font-semibold">
                  {education.degree}
                </h3>
                <p className="text-slate-600">
                  {education.institution}
                </p>
                <p className="text-sm text-slate-500">
                  {education.dates}
                </p>
                <p className="text-slate-700 mt-2">
                  {education.description}
                </p>
              </div>
            </section>
            )}

            {/* Contact */}
<section className="mb-12">
  <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
    <User size={22} className="text-slate-600" />
    Contact
  </h2>

  <div className="grid sm:grid-cols-2 gap-4 bg-slate-50 p-6 rounded-lg border border-slate-200">
    {data.contact?.email && (
      <div className="flex items-center gap-3">
        <Mail size={18} className="text-slate-600" />
        <span>{data.contact.email}</span>
      </div>
    )}

    {data.contact?.phone && (
      <div className="flex items-center gap-3">
        <Phone size={18} className="text-slate-600" />
        <span>{data.contact.phone}</span>
      </div>
    )}

    {data.contact?.location && (
      <div className="flex items-center gap-3">
        <MapPin size={18} className="text-slate-600" />
        <span>{data.contact.location}</span>
      </div>
    )}

    {data.contact?.github && (
      <div className="flex items-center gap-3">
        <Github size={18} className="text-slate-600" />
        <a
          href={formatURL(data.contact.github)}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
      </div>
    )}

    {data.contact?.linkedin && (
      <div className="flex items-center gap-3">
        <Linkedin size={18} className="text-slate-600" />
        <a
          href={formatURL(data.contact.linkedin)}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    )}
  </div>
</section>

        </div>
      </div>
    </div>
  );
};

export default ModernMinimalTemplate;
