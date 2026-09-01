import React from "react";

  const formatURL = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

const PortfolioGlass = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="flex min-h-screen bg-gradient-to-r from-black to-gray-900 text-white pt-24">

      {/* SIDEBAR */}
      <aside className="w-1/4 p-6 backdrop-blur-lg bg-white/10 border-r border-gray-700">
        <h1 className="text-3xl font-bold">{data.name}</h1>
        <p className="text-gray-300 mb-4">{data.title}</p>

        <div className="space-y-2 text-sm">
          <p>{data.contact.email}</p>
          <p>{data.contact.phone}</p>
          <p>{data.contact.location}</p>
        </div>

        <div className="mt-6 space-x-4">
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
      </aside>

      {/* MAIN */}
      <main className="w-3/4 p-8 space-y-10">

        {/* SUMMARY */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">About</h2>
          <p className="text-gray-300">{data.summary}</p>
        </section>

        {/* SKILLS */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Skills</h2>
          <div className="flex flex-wrap gap-3">
            {data.skills.map((s, i) => (
              <span key={i} className="px-3 py-1 bg-white/10 rounded-lg">
                {s}
              </span>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Projects</h2>
          <div className="grid grid-cols-2 gap-4">
            {data.projects.map((p, i) => (
              <div key={i} className="p-4 bg-white/10 rounded-xl hover:bg-white/20 transition">
                <h3 className="font-bold">{p.name}</h3>
                <p className="text-gray-400 text-sm">{p.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Experience</h2>
          {data.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <h3 className="font-bold">{exp.role}</h3>
              <p className="text-gray-400">{exp.company}</p>
            </div>
          ))}
        </section>

        {/* EDUCATION */}
        <section>
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <p>{data.education.degree}</p>
          <p className="text-gray-400">{data.education.institution}</p>
        </section>

      </main>
    </div>
  );
};

export default PortfolioGlass;