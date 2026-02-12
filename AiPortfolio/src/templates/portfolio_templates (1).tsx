// import React, { useState } from 'react';
// import { Mail, Phone, MapPin, Briefcase, GraduationCap, Code, Folder, User, Star, Award, Calendar, Edit2, Save, Plus, Trash2, ChevronDown, ChevronUp } from 'lucide-react';

// // ========== PORTFOLIO TEMPLATES ==========

// // const ModernMinimalTemplate = ({ data, isEditing, onDataChange }) => {
// //   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 p-8">
//       <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-2xl overflow-hidden">
//         {/* Header Section */}
//         <div className="bg-gradient-to-r from-slate-800 to-slate-900 text-white p-12">
//           {isEditing ? (
//             <input
//               value={data.name}
//               onChange={(e) => onDataChange('name', e.target.value)}
//               className="text-5xl font-bold mb-4 bg-transparent border-b-2 border-white w-full text-white"
//               placeholder="Your Name"
//             />
//           ) : (
//             <h1 className="text-5xl font-bold mb-4">{data.name}</h1>
//           )}
          
//           {isEditing ? (
//             <input
//               value={data.title}
//               onChange={(e) => onDataChange('title', e.target.value)}
//               className="text-2xl text-slate-300 bg-transparent border-b border-slate-400 w-full"
//               placeholder="Your Title"
//             />
//           ) : (
//             <p className="text-2xl text-slate-300">{data.title}</p>
//           )}
//         </div>

//         <div className="p-12">
//           {/* Summary */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
//               <User size={24} className="text-slate-600" />
//               About Me
//             </h2>
//             {isEditing ? (
//               <textarea
//                 value={data.summary}
//                 onChange={(e) => onDataChange('summary', e.target.value)}
//                 className="w-full p-4 border-2 border-slate-200 rounded-lg"
//                 rows="4"
//                 placeholder="Write your summary..."
//               />
//             ) : (
//               <p className="text-slate-700 leading-relaxed">{data.summary}</p>
//             )}
//           </section>

//           {/* Skills */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
//               <Code size={24} className="text-slate-600" />
//               Skills
//             </h2>
//             <div className="flex flex-wrap gap-3">
//               {data.skills?.map((skill, idx) => (
//                 <div key={idx} className="flex items-center gap-2">
//                   <span className="bg-slate-800 text-white px-4 py-2 rounded-full font-medium">
//                     {skill}
//                   </span>
//                   {isEditing && (
//                     <button
//                       onClick={() => {
//                         const newSkills = data.skills.filter((_, i) => i !== idx);
//                         onDataChange('skills', newSkills);
//                       }}
//                       className="text-red-500 hover:text-red-700"
//                     >
//                       <Trash2 size={16} />
//                     </button>
//                   )}
//                 </div>
//               ))}
//               {isEditing && (
//                 <button
//                   onClick={() => {
//                     const skill = prompt('Enter new skill:');
//                     if (skill) onDataChange('skills', [...data.skills, skill]);
//                   }}
//                   className="bg-slate-200 text-slate-700 px-4 py-2 rounded-full font-medium hover:bg-slate-300"
//                 >
//                   <Plus size={16} className="inline" /> Add Skill
//                 </button>
//               )}
//             </div>
//           </section>

//           {/* Experience */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
//               <Briefcase size={24} className="text-slate-600" />
//               Experience
//             </h2>
//             {data.experience?.map((exp, idx) => (
//               <div key={idx} className="mb-6 border-l-4 border-slate-800 pl-6">
//                 <h3 className="text-xl font-semibold text-slate-800">{exp.role}</h3>
//                 <p className="text-slate-600 font-medium">{exp.company}</p>
//                 <p className="text-sm text-slate-500 mb-2">{exp.duration}</p>
//                 <p className="text-slate-700">{exp.description}</p>
//               </div>
//             ))}
//           </section>

//           {/* Projects */}
//           <section className="mb-12">
//             <h2 className="text-2xl font-bold text-slate-800 mb-6 flex items-center gap-2">
//               <Folder size={24} className="text-slate-600" />
//               Projects
//             </h2>
//             <div className="grid gap-6">
//               {data.projects?.map((project, idx) => (
//                 <div key={idx} className="bg-slate-50 p-6 rounded-lg border-2 border-slate-200">
//                   <h3 className="text-xl font-semibold text-slate-800 mb-2">{project.title}</h3>
//                   <p className="text-slate-700">{project.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Education */}
//           <section>
//             <h2 className="text-2xl font-bold text-slate-800 mb-4 flex items-center gap-2">
//               <GraduationCap size={24} className="text-slate-600" />
//               Education
//             </h2>
//             <p className="text-slate-700">{data.education}</p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// const CreativeColorfulTemplate = ({ data, isEditing, onDataChange }) => {
//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header Card */}
//         <div className="bg-white rounded-3xl shadow-2xl p-10 mb-8 relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-400 to-pink-400 opacity-10 rounded-full -mr-48 -mt-48"></div>
//           <div className="relative">
//             <h1 className="text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent mb-3">
//               {data.name}
//             </h1>
//             <p className="text-3xl text-gray-700 mb-6">{data.title}</p>
//           </div>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Left Column */}
//           <div className="space-y-8">
//             {/* About */}
//             <div className="bg-white rounded-2xl shadow-xl p-6">
//               <h2 className="text-2xl font-bold text-purple-600 mb-4 flex items-center gap-2">
//                 <User size={24} />
//                 About
//               </h2>
//               <p className="text-gray-700 text-sm leading-relaxed">{data.summary}</p>
//             </div>

//             {/* Skills */}
//             <div className="bg-white rounded-2xl shadow-xl p-6">
//               <h2 className="text-2xl font-bold text-pink-600 mb-4 flex items-center gap-2">
//                 <Star size={24} />
//                 Skills
//               </h2>
//               <div className="flex flex-wrap gap-2">
//                 {data.skills?.map((skill, idx) => (
//                   <span key={idx} className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-medium">
//                     {skill}
//                   </span>
//                 ))}
//               </div>
//             </div>

//             {/* Education */}
//             <div className="bg-white rounded-2xl shadow-xl p-6">
//               <h2 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-2">
//                 <GraduationCap size={24} />
//                 Education
//               </h2>
//               <p className="text-gray-700 text-sm">{data.education}</p>
//             </div>
//           </div>

//           {/* Right Column */}
//           <div className="md:col-span-2 space-y-8">
//             {/* Experience */}
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h2 className="text-3xl font-bold text-purple-600 mb-6 flex items-center gap-2">
//                 <Briefcase size={28} />
//                 Experience
//               </h2>
//               {data.experience?.map((exp, idx) => (
//                 <div key={idx} className="mb-6 relative pl-8 border-l-4 border-purple-300">
//                   <div className="absolute -left-2.5 top-0 w-5 h-5 bg-purple-500 rounded-full"></div>
//                   <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
//                   <p className="text-purple-600 font-medium">{exp.company}</p>
//                   <p className="text-sm text-gray-500 mb-2 flex items-center gap-1">
//                     <Calendar size={14} />
//                     {exp.duration}
//                   </p>
//                   <p className="text-gray-700">{exp.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Projects */}
//             <div className="bg-white rounded-2xl shadow-xl p-8">
//               <h2 className="text-3xl font-bold text-pink-600 mb-6 flex items-center gap-2">
//                 <Folder size={28} />
//                 Projects
//               </h2>
//               <div className="grid gap-6">
//                 {data.projects?.map((project, idx) => (
//                   <div key={idx} className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-xl border-2 border-purple-200">
//                     <h3 className="text-xl font-semibold text-gray-800 mb-2">{project.title}</h3>
//                     <p className="text-gray-700">{project.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const ProfessionalBlueTemplate = ({ data, isEditing, onDataChange }) => {
//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-8">
//       <div className="max-w-6xl mx-auto bg-white shadow-2xl rounded-xl overflow-hidden">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-12">
//           <h1 className="text-5xl font-bold mb-3">{data.name}</h1>
//           <p className="text-2xl text-blue-100 mb-6">{data.title}</p>
//         </div>

//         <div className="p-12">
//           {/* Summary */}
//           <section className="mb-10 bg-blue-50 p-6 rounded-lg">
//             <h2 className="text-2xl font-bold text-blue-800 mb-4">Professional Summary</h2>
//             <p className="text-gray-700 leading-relaxed">{data.summary}</p>
//           </section>

//           <div className="grid md:grid-cols-3 gap-8 mb-10">
//             {/* Skills */}
//             <div className="md:col-span-1">
//               <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
//                 <Award size={24} />
//                 Core Skills
//               </h2>
//               <div className="space-y-2">
//                 {data.skills?.map((skill, idx) => (
//                   <div key={idx} className="bg-blue-100 text-blue-800 px-4 py-2 rounded-lg font-medium">
//                     {skill}
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Experience */}
//             <div className="md:col-span-2">
//               <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
//                 <Briefcase size={24} />
//                 Work Experience
//               </h2>
//               {data.experience?.map((exp, idx) => (
//                 <div key={idx} className="mb-6 pb-6 border-b border-gray-200 last:border-0">
//                   <h3 className="text-xl font-semibold text-gray-800">{exp.role}</h3>
//                   <p className="text-blue-600 font-medium mb-1">{exp.company}</p>
//                   <p className="text-sm text-gray-500 mb-3">{exp.duration}</p>
//                   <p className="text-gray-700">{exp.description}</p>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Projects */}
//           <section className="mb-10">
//             <h2 className="text-2xl font-bold text-blue-800 mb-6 flex items-center gap-2">
//               <Folder size={24} />
//               Featured Projects
//             </h2>
//             <div className="grid md:grid-cols-2 gap-6">
//               {data.projects?.map((project, idx) => (
//                 <div key={idx} className="border-2 border-blue-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
//                   <h3 className="text-lg font-semibold text-gray-800 mb-2">{project.title}</h3>
//                   <p className="text-gray-700">{project.description}</p>
//                 </div>
//               ))}
//             </div>
//           </section>

//           {/* Education */}
//           <section className="bg-indigo-50 p-6 rounded-lg">
//             <h2 className="text-2xl font-bold text-indigo-800 mb-4 flex items-center gap-2">
//               <GraduationCap size={24} />
//               Education
//             </h2>
//             <p className="text-gray-700 font-medium">{data.education}</p>
//           </section>
//         </div>
//       </div>
//     </div>
//   );
// };

// const DarkElegantTemplate = ({ data, isEditing, onDataChange }) => {
//   return (
//     <div className="w-full min-h-screen bg-gray-900 p-8">
//       <div className="max-w-6xl mx-auto">
//         {/* Header */}
//         <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-12 mb-8 shadow-2xl">
//           <h1 className="text-6xl font-bold text-white mb-3">{data.name}</h1>
//           <p className="text-2xl text-gray-300">{data.title}</p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {/* Sidebar */}
//           <div className="space-y-6">
//             <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
//               <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
//                 <Star size={20} />
//                 Skills
//               </h2>
//               <div className="space-y-2">
//                 {data.skills?.map((skill, idx) => (
//                   <div key={idx} className="text-gray-300 text-sm">• {skill}</div>
//                 ))}
//               </div>
//             </div>

//             <div className="bg-gray-800 rounded-xl p-6 shadow-xl">
//               <h2 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
//                 <GraduationCap size={20} />
//                 Education
//               </h2>
//               <p className="text-gray-300 text-sm">{data.education}</p>
//             </div>
//           </div>

//           {/* Main Content */}
//           <div className="md:col-span-2 space-y-6">
//             {/* About */}
//             <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
//               <h2 className="text-2xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
//                 <User size={24} />
//                 About Me
//               </h2>
//               <p className="text-gray-300 leading-relaxed">{data.summary}</p>
//             </div>

//             {/* Experience */}
//             <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
//               <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
//                 <Briefcase size={24} />
//                 Experience
//               </h2>
//               {data.experience?.map((exp, idx) => (
//                 <div key={idx} className="mb-6 pb-6 border-b border-gray-700 last:border-0">
//                   <h3 className="text-xl font-semibold text-white">{exp.role}</h3>
//                   <p className="text-cyan-400 mb-2">{exp.company} • {exp.duration}</p>
//                   <p className="text-gray-300">{exp.description}</p>
//                 </div>
//               ))}
//             </div>

//             {/* Projects */}
//             <div className="bg-gray-800 rounded-xl p-8 shadow-xl">
//               <h2 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
//                 <Folder size={24} />
//                 Projects
//               </h2>
//               <div className="grid gap-4">
//                 {data.projects?.map((project, idx) => (
//                   <div key={idx} className="bg-gray-900 p-6 rounded-lg border border-gray-700">
//                     <h3 className="text-lg font-semibold text-white mb-2">{project.title}</h3>
//                     <p className="text-gray-400">{project.description}</p>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// const MinimalistTemplate = ({ data, isEditing, onDataChange }) => {
//   return (
//     <div className="w-full min-h-screen bg-white p-8">
//       <div className="max-w-4xl mx-auto">
//         {/* Header */}
//         <div className="border-b-4 border-black pb-8 mb-12">
//           <h1 className="text-6xl font-bold mb-2">{data.name}</h1>
//           <p className="text-2xl text-gray-600">{data.title}</p>
//         </div>

//         {/* Summary */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">ABOUT</h2>
//           <p className="text-gray-700 leading-relaxed">{data.summary}</p>
//         </section>

//         {/* Skills */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">SKILLS</h2>
//           <div className="grid grid-cols-3 gap-4">
//             {data.skills?.map((skill, idx) => (
//               <div key={idx} className="border-2 border-black p-3 text-center font-semibold">
//                 {skill}
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Experience */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">EXPERIENCE</h2>
//           {data.experience?.map((exp, idx) => (
//             <div key={idx} className="mb-6 border-l-4 border-black pl-6">
//               <h3 className="text-xl font-bold">{exp.role}</h3>
//               <p className="font-semibold text-gray-700">{exp.company}</p>
//               <p className="text-sm text-gray-500 mb-2">{exp.duration}</p>
//               <p className="text-gray-700">{exp.description}</p>
//             </div>
//           ))}
//         </section>

//         {/* Projects */}
//         <section className="mb-12">
//           <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">PROJECTS</h2>
//           {data.projects?.map((project, idx) => (
//             <div key={idx} className="mb-6">
//               <h3 className="text-lg font-bold">{project.title}</h3>
//               <p className="text-gray-700">{project.description}</p>
//             </div>
//           ))}
//         </section>

//         {/* Education */}
//         <section>
//           <h2 className="text-2xl font-bold border-b-2 border-black pb-2 mb-4">EDUCATION</h2>
//           <p className="text-gray-700 font-semibold">{data.education}</p>
//         </section>
//       </div>
//     </div>
//   );
// };

// // ========== MAIN APP ==========

// const PortfolioApp = () => {
//   const [selectedTemplate, setSelectedTemplate] = useState(1);
//   const [isEditing, setIsEditing] = useState(false);
//   const [portfolioData, setPortfolioData] = useState({
//     name: "Alex Johnson",
//     title: "Full Stack Developer",
//     summary: "Passionate developer with 5+ years of experience building scalable web applications. Specialized in React, Node.js, and cloud technologies. Love creating elegant solutions to complex problems.",
//     skills: ["JavaScript", "React", "Node.js", "Python", "AWS", "Docker", "MongoDB", "TypeScript"],
//     experience: [
//       {
//         role: "Senior Full Stack Developer",
//         company: "Tech Innovations Inc",
//         duration: "2021 - Present",
//         description: "Led development of microservices architecture serving 2M+ users. Mentored junior developers and improved system performance by 40%."
//       },
//       {
//         role: "Full Stack Developer",
//         company: "Digital Solutions Co",
//         duration: "2019 - 2021",
//         description: "Built responsive web applications using React and Node.js. Implemented CI/CD pipelines reducing deployment time by 60%."
//       }
//     ],
//     projects: [
//       {
//         title: "E-Commerce Platform",
//         description: "Built a full-featured online marketplace with payment integration, real-time inventory, and admin dashboard using React, Node.js, and PostgreSQL."
//       },
//       {
//         title: "Task Management System",
//         description: "Created a collaborative project management tool with real-time updates, file sharing, and team communication features."
//       },
//       {
//         title: "Analytics Dashboard",
//         description: "Developed a data visualization platform for business intelligence with interactive charts and custom reporting."
//       }
//     ],
//     education: "Bachelor of Science in Computer Science, Stanford University, 2019"
//   });

//   const templates = [
//     { id: 1, name: 'Modern Minimal', component: ModernMinimalTemplate, color: 'slate' },
//     { id: 2, name: 'Creative Colorful', component: CreativeColorfulTemplate, color: 'purple' },
//     { id: 3, name: 'Professional Blue', component: ProfessionalBlueTemplate, color: 'blue' },
//     { id: 4, name: 'Dark Elegant', component: DarkElegantTemplate, color: 'gray' },
//     { id: 5, name: 'Bold Minimalist', component: MinimalistTemplate, color: 'black' }
//   ];

//   const handleDataChange = (field, value) => {
//     setPortfolioData(prev => ({
//       ...prev,
//       [field]: value
//     }));
//   };

//   const SelectedTemplate = templates.find(t => t.id === selectedTemplate)?.component;

//   return (
//     <div>
//       {/* Control Panel */}
//       <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 sticky top-0 z-50 shadow-lg">
//         <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-4">
//           <div>
//             <h1 className="text-2xl font-bold">Portfolio Builder</h1>
//             <p className="text-sm text-indigo-100">Select template and customize your portfolio</p>
//           </div>
          
//           <div className="flex gap-3 flex-wrap items-center">
//             <select
//               value={selectedTemplate}
//               onChange={(e) => setSelectedTemplate(Number(e.target.value))}
//               className="bg-white text-gray-800 px-4 py-2 rounded-lg font-medium"
//             >
//               {templates.map(t => (
//                 <option key={t.id} value={t.id}>{t.name}</option>
//               ))}
//             </select>
            
//             <button
//               onClick={() => setIsEditing(!isEditing)}
//               className={`px-6 py-2 rounded-lg font-medium flex items-center gap-2 ${
//                 isEditing ? 'bg-green-500 hover:bg-green-600' : 'bg-white text-indigo-600 hover:bg-indigo-50'
//               }`}
//             >
//               {isEditing ? (
//                 <>
//                   <Save size={18} />
//                   Save
//                 </>
//               ) : (
//                 <>
//                   <Edit2 size={18} />
//                   Edit
//                 </>
//               )}
//             </button>

//             <button
//               onClick={() => console.log('Portfolio Data:', portfolioData)}
//               className="bg-pink-500 px-6 py-2 rounded-lg hover:bg-pink-600 font-medium flex items-center gap-2"
//             >
//               <Code size={18} />
//               View JSON
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* Template Display */}
//       {SelectedTemplate && (
//         <SelectedTemplate 
//           data={portfolioData} 
//           isEditing={isEditing}
//           onDataChange={handleDataChange}
//         />
//       )}
//     </div>
//   );
// };

// export default PortfolioApp;