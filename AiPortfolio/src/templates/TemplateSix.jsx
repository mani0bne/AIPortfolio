import React from "react";

  const formatURL = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

const Advanced = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  const {
    name,
    title,
    summary,
    skills,
    experience,
    projects,
    education,
    contact,
  } = data;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black text-white font-sans p-8 pt-24">
      
      {/* HERO SECTION */}
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-4">{name}</h1>
        <h2 className="text-xl text-gray-400 mb-6">{title}</h2>
        <p className="max-w-2xl mx-auto text-gray-300">{summary}</p>
      </section>

      {/* SKILLS */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Skills
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gray-800 px-4 py-2 rounded-full hover:bg-blue-600 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="px-8 py-12 bg-gray-900/40 backdrop-blur-lg">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Experience
        </h2>
        <div className="space-y-6">
          {experience.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-gray-800 rounded-xl shadow-lg hover:scale-[1.02] transition"
            >
              <h3 className="text-xl font-bold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
              <p className="text-sm text-gray-500">{exp.duration}</p>
              <p className="mt-2 text-gray-300">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PROJECTS */}
      <section className="px-8 py-12">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-blue-500/20 transition transform hover:-translate-y-2"
            >
              <h3 className="text-xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-3">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-3">
                {project.tech?.map((tech, i) => (
                  <span key={i} className="text-xs bg-gray-700 px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* EDUCATION */}
      <section className="px-8 py-12 bg-gray-900/40">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Education
        </h2>
        <div className="bg-gray-800 p-6 rounded-xl shadow-lg">
          <h3 className="text-xl font-bold">{education.degree}</h3>
          <p className="text-gray-400">{education.institution}</p>
          <p className="text-sm text-gray-500">{education.dates}</p>
          <p className="mt-2 text-gray-300">{education.description}</p>
        </div>
      </section>

      {/* CONTACT */}
      <section className="px-8 py-12 text-center">
        <h2 className="text-3xl font-semibold mb-6 border-b border-gray-700 pb-2">
          Contact
        </h2>

        <div className="space-y-3 text-gray-300">
          <p>Email: {contact.email}</p>
          <p>Phone: {contact.phone}</p>
          <p>Location: {contact.location}</p>

          <div className="flex justify-center gap-6 mt-4">
            <a
          href={formatURL(data.contact.github)}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          GitHub
        </a>
            <a
          href={formatURL(data.contact.linkedin)}
          target="_blank"
          className="text-blue-600 hover:underline"
        >
          LinkedIn
        </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-center py-6 text-gray-500 text-sm">
        © {new Date().getFullYear()} {name}. All rights reserved.
      </footer>
    </div>
  );
};

export default Advanced;