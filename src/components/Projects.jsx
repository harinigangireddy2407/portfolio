import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      title: "AI Customer Support Automation",
      description:
        "An intelligent customer support system built using LangGraph and LangChain with routing, memory, Retrieval-Augmented Generation (RAG), and human approval workflow.",
      tech: ["Python", "LangChain", "LangGraph", "FAISS", "LLMs"],
      github: "https://github.com/harinigangireddy2407",
      demo: "#",
      upcoming: false,
    },
    {
      title: "Smart College Assistant",
      description:
        "An AI-powered assistant that helps students with attendance, fee calculation, results, library fines, and hostel management using tool-calling agents.",
      tech: ["Python", "Agentic AI", "LangChain", "Groq"],
      github: "https://github.com/harinigangireddy2407",
      demo: "#",
      upcoming: false,
    },
    {
      title: "Video Anomaly Detection",
      description:
        "A deep learning-based surveillance system that detects unusual activities in video streams using computer vision techniques for real-time monitoring and safety.",
      tech: [
        "Python",
        "Deep Learning",
        "Computer Vision",
        "OpenCV",
        "PyTorch",
      ],
      upcoming: true,
    },
  ];

  return (
    <section id="projects" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="text-violet-400 uppercase tracking-widest font-semibold">
          Projects
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Featured Projects
        </h2>

        <p className="text-slate-400 mt-6 max-w-3xl text-lg">
          Some of the AI, Machine Learning, and Software Development projects
          I've worked on.
        </p>

        <div className="space-y-8 mt-16">

          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500 transition-all duration-300"
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

                {/* Left */}
                <div className="flex-1">
                  <h3 className="text-3xl font-bold">
                    {project.title}
                  </h3>

                  <p className="text-slate-400 mt-5 leading-8">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-3 mt-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className="flex md:flex-col gap-4 md:min-w-[180px]">

                  {project.upcoming ? (
                    <span className="text-center bg-yellow-500/20 text-yellow-300 border border-yellow-500/40 px-5 py-3 rounded-xl font-medium">
                      🚀 Coming Soon
                    </span>
                  ) : (
                    <>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-700 px-5 py-3 rounded-xl transition"
                      >
                        <FaGithub />
                        GitHub
                      </a>

                      <a
                        href={project.demo}
                        className="flex items-center justify-center gap-2 border border-slate-700 hover:border-violet-500 px-5 py-3 rounded-xl transition"
                      >
                        <FaExternalLinkAlt />
                        Demo
                      </a>
                    </>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;