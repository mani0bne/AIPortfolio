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

const MinimalistTemplate = ({ data }) => {
  // safety fallback
  if (!data) return <p className="text-center">No data available</p>;

  const contact = data.contact || {};

  const buildUrl = (platform, value) => {
    if (!value) return "#";

    if (value.startsWith("http")) return value;

    if (platform === "github") return `https://github.com/${value}`;
    if (platform === "linkedin") return `https://linkedin.com/in/${value}`;

    return value;
  };

  return (
    <div className="w-full min-h-screen bg-white p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <div className="border-b-4 border-black pb-8 mb-12">
          <h1 className="text-6xl font-bold mb-2">{data.name}</h1>
          <p className="text-2xl text-gray-600">{data.title}</p>
        </div>

        {/* Contact */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
            CONTACT
          </h2>
          <div className="space-y-2 text-gray-700">
            {contact.email && <p>Email: {contact.email}</p>}
            {contact.phone && <p>Phone: {contact.phone}</p>}

            {contact.github && (
              <a
                href={buildUrl("github", contact.github)}
                target="_blank"
                rel="noreferrer"
                className="block text-blue-600 hover:underline"
              >
                GitHub
              </a>
            )}

            {contact.linkedin && (
              <a
                href={buildUrl("linkedin", contact.linkedin)}
                target="_blank"
                rel="noreferrer"
                className="block text-blue-600 hover:underline"
              >
                LinkedIn
              </a>
            )}
          </div>
        </section>

        {/* About */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
            ABOUT
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {data.summary}
          </p>
        </section>

        {/* Skills */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
            SKILLS
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {data.skills?.map((skill, idx) => (
              <div
                key={idx}
                className="border-2 border-black p-3 text-center font-semibold"
              >
                {skill}
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
            EXPERIENCE
          </h2>
          {data.experience?.map((exp, idx) => (
            <div key={idx} className="mb-6 border-l-4 border-black pl-6">
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="font-semibold text-gray-700">{exp.company}</p>
              <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </section>

        {/* Projects */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
            PROJECTS
          </h2>
          {data.projects?.map((project, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="text-gray-700">{project.description}</p>
            </div>
          ))}
        </section>

        {/* Education */}
      {/* Education */}
<section>
  <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">
    EDUCATION
  </h2>

  {Array.isArray(data.education) ? (
    data.education.map((edu, idx) => (
      <div key={idx} className="mb-4">
        <p className="font-semibold text-gray-800">
          {edu.degree}
        </p>
        <p className="text-gray-700">
          {edu.institution}
        </p>
        <p className="text-sm text-gray-500">
          {edu.dates}
        </p>
        {edu.description && (
          <p className="text-gray-700 mt-1">
            {edu.description}
          </p>
        )}
      </div>
    ))
  ) : (
    data.education && (
      <div>
        <p className="font-semibold text-gray-800">
          {data.education.degree}
        </p>
        <p className="text-gray-700">
          {data.education.institution}
        </p>
        <p className="text-sm text-gray-500">
          {data.education.dates}
        </p>
        {data.education.description && (
          <p className="text-gray-700 mt-1">
            {data.education.description}
          </p>
        )}
      </div>
    )
  )}
</section>


      </div>
    </div>
  );
};

export default MinimalistTemplate;
