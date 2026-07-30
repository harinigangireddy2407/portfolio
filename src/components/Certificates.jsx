import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";

function Certificates() {
  return (
    <section id="certificates" className="py-20 px-8">
      <div className="max-w-7xl mx-auto">

        <p className="text-violet-400 uppercase tracking-widest font-semibold">
          Certification
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Professional Certification
        </h2>

        <p className="text-slate-400 mt-6 max-w-3xl text-lg">
          A certification that reflects my expertise in Artificial Intelligence
          and my commitment to continuous learning.
        </p>

        <div className="mt-16">

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-violet-500 transition-all duration-300">

            <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-8">

              {/* Left */}
              <div className="flex-1">

                <div className="flex items-center gap-4">

                  <div className="w-16 h-16 rounded-xl bg-violet-600/20 flex items-center justify-center">
                    <FaCertificate className="text-3xl text-violet-400" />
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold">
                      IBM Agentic AI
                    </h3>

                    <p className="text-violet-300">
                      IBM Cognitive Class
                    </p>
                  </div>

                </div>

                <p className="text-slate-400 leading-8 mt-6">
                  Successfully completed the IBM Agentic AI certification,
                  gaining practical experience in AI Agents, LLMs, Prompt
                  Engineering, Agentic AI workflows, and intelligent automation.
                </p>

                <div className="flex flex-wrap gap-3 mt-6">

                  {[
                    "AI",
                    "LLMs",
                    "Prompt Engineering",
                    "Agentic AI",
                  ].map((skill) => (
                    <span
                      key={skill}
                      className="bg-violet-600/20 text-violet-300 px-4 py-2 rounded-full text-sm"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

              {/* Right */}

              <div className="flex items-center">

                <a
                  href="https://courses.ibmcep.cognitiveclass.ai/certificates/dec1a23940704257979f889fe0084657"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-violet-600 hover:bg-violet-700 px-6 py-3 rounded-xl transition"
                >
                  <FaExternalLinkAlt />
                  View Certificate
                </a>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Certificates;