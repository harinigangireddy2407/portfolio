function Skills() {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: ["Java", "Python", "C", "C++"],
    },
    {
      title: "Artificial Intelligence",
      skills: [
        "Machine Learning",
        "Deep Learning",
        "LLMs",
        "Agentic AI",
      ],
    },
    {
      title: "Core Computer Science",
      skills: ["Data Structures & Algorithms","Object-Oriented Programming (OOP)","Database Management Systems (DBMS)"],
    },
    {
      title: "Web Development",
      skills: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Database",
      skills: ["MySQL"],
    },
    {
      title: "Tools",
      skills: ["Git", "GitHub", "VS Code", "Figma"],
    },
  ];

  return (
    <section id="skills" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="text-violet-400 uppercase tracking-widest font-semibold">
          My Skills
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Technologies I Work With
        </h2>

        <p className="text-slate-400 mt-6 max-w-3xl text-lg">
          A collection of programming languages, AI technologies,
          frameworks, and development tools that I use to build
          intelligent applications.
        </p>

        <div className="space-y-8 mt-16">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-slate-900/40 border border-slate-700 rounded-2xl p-6"
            >
              <h3 className="text-2xl font-semibold text-violet-400 mb-5">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-5 py-2 rounded-full bg-violet-500/15 border border-violet-500/40 text-slate-200 hover:bg-violet-500 hover:text-white transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Skills;