import React from "react";

  const formatURL = (url) => {
    if (!url) return "";
    if (url.startsWith("http://") || url.startsWith("https://")) return url;
    return `https://${url}`;
  };

const PortfolioNeon = ({ data }) => {
  if (!data) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono p-6 pt-24">

      {/* HEADER */}
      <div className="border-b border-green-500 pb-4 mb-6">
        <h1 className="text-4xl">{data.name}</h1>
        <p className="text-green-300">{data.title}</p>
      </div>

      {/* SUMMARY */}
      <section className="mb-8">
        <h2 className="text-xl text-green-500"> About</h2>
        <p className="text-green-300">{data.summary}</p>
      </section>

      {/* SKILLS */}
      <section className="mb-8">
        <h2 className="text-xl text-green-500"> Skills</h2>
        <ul className="grid grid-cols-2 gap-2">
          {data.skills.map((s, i) => (
            <li key={i}>- {s}</li>
          ))}
        </ul>
      </section>

      {/* PROJECTS */}
      <section className="mb-8">
        <h2 className="text-xl text-green-500"> Projects</h2>
        {data.projects.map((p, i) => (
          <div key={i} className="mb-4 border border-green-500 p-4 rounded">
            <h3 className="text-green-200">{p.name}</h3>
            <p className="text-green-400">{p.description}</p>
            <a href={p.link} className="underline text-green-300">
              View →
            </a>
          </div>
        ))}
      </section>

      {/* EXPERIENCE */}
      <section className="mb-8">
        <h2 className="text-xl text-green-500"> Experience</h2>
        {data.experience.map((exp, i) => (
          <div key={i}>
            <p>{exp.role} @ {exp.company}</p>
            <p className="text-green-600 text-sm">{exp.duration}</p>
          </div>
        ))}
      </section>

      {/* EDUCATION */}
      <section className="mb-8">
        <h2 className="text-xl text-green-500">Education</h2>
        <p>{data.education.degree}</p>
        <p className="text-green-600">{data.education.institution}</p>
      </section>

      {/* CONTACT */}
      <section>
        <h2 className="text-xl text-green-500">Contact</h2>
        <p>Email: {data.contact.email}</p>
        <p>GitHub: {formatURL(data.contact.github)}</p>
        <p>LinkedIn: {formatURL(data.contact.linkedin)}</p>
      </section>

    </div>
  );
};

export default PortfolioNeon;