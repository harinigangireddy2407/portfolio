import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhoneAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section
      id="contact"
      className="py-20 px-8"
    >
      <div className="max-w-5xl mx-auto text-center">

        <p className="text-violet-400 uppercase tracking-widest font-semibold">
          Contact
        </p>

        <h2 className="text-5xl font-bold mt-3">
          Let's Connect
        </h2>

        <p className="text-slate-400 mt-6 text-lg max-w-2xl mx-auto">
          I'm always open to internship opportunities, collaborations,
          and exciting AI & Software Development projects.
        </p>

        <div className="grid md:grid-cols-2 gap-8 mt-16">

          <a
            href="mailto:yourmail@gmail.com"
            className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition"
          >
            <FaEnvelope className="text-3xl text-violet-400" />
            <div className="text-left">
              <h3 className="font-semibold">Email</h3>
              <p className="text-slate-400">
                harinigangireddy24@gmail.com
              </p>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/harini-gangireddy-683263386"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition"
          >
            <FaLinkedin className="text-3xl text-violet-400" />
            <div className="text-left">
              <h3 className="font-semibold">LinkedIn</h3>
              <p className="text-slate-400">
                Connect with me
              </p>
            </div>
          </a>

          <a
            href="https://github.com/harinigangireddy2407"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition"
          >
            <FaGithub className="text-3xl text-violet-400" />
            <div className="text-left">
              <h3 className="font-semibold">GitHub</h3>
              <p className="text-slate-400">
                View my repositories
              </p>
            </div>
          </a>

          <a
            href="https://leetcode.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-5 bg-slate-900 border border-slate-800 rounded-2xl p-6 hover:border-violet-500 transition"
          >
            <SiLeetcode className="text-3xl text-violet-400" />
            <div className="text-left">
              <h3 className="font-semibold">LeetCode</h3>
              <p className="text-slate-400">
                View my coding profile
              </p>
            </div>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;