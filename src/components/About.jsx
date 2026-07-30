import { FaGraduationCap, FaLaptopCode, FaBrain } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="py-20 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <p className="text-violet-400 font-semibold tracking-widest uppercase">
          About Me
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Passionate About Building Intelligent Solutions
        </h2>

        <p className="text-slate-400 mt-8 text-lg leading-9 max-w-4xl">
          I'm Harini Gangireddy, a third-year Computer Science student at
          VIT-AP University with a CGPA of 8.91. I enjoy building intelligent
          applications using Artificial Intelligence, Machine Learning,
          Generative AI, and Agentic AI. My goal is to create impactful
          software that solves real-world problems while continuously learning
          new technologies.
        </p>

        <div className="grid md:grid-cols-3 gap-8 mt-16">

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-violet-500 transition">
            <FaGraduationCap className="text-5xl text-violet-400 mb-5" />
            <h3 className="text-2xl font-semibold">Education</h3>
            <p className="text-slate-400 mt-4 leading-7">
              B.Tech Computer Science Engineering
              <br />
              VIT-AP University
              <br />
              CGPA: 8.91
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-violet-500 transition">
            <FaLaptopCode className="text-5xl text-violet-400 mb-5" />
            <h3 className="text-2xl font-semibold">Development</h3>
            <p className="text-slate-400 mt-4 leading-7">
              Full Stack Development, Java, Python,
              React, MySQL, GitHub and modern web technologies.
            </p>
          </div>

          <div className="bg-slate-900 rounded-2xl p-8 border border-slate-800 hover:border-violet-500 transition">
            <FaBrain className="text-5xl text-violet-400 mb-5" />
            <h3 className="text-2xl font-semibold">AI & ML</h3>
            <p className="text-slate-400 mt-4 leading-7">
              Machine Learning, Deep Learning,
              Generative AI, LLMs, LangChain, LangGraph and Agentic AI.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}

export default About;