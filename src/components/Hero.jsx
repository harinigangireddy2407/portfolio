import heroImg from "../assets/hero.png";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa";

function Hero() {
  return (
    <section className="py-20 px-8">
      <div className="max-w-7xl mx-auto w-full grid md:grid-cols-[1.3fr_0.7fr] gap-12 items-center">

        {/* Left Section */}
        <div>

          <span className="inline-block px-4 py-2 rounded-full bg-violet-500/15 text-violet-300 border border-violet-500/40">
            B.Tech CSE Student | AI & ML Enthusiast
          </span>

          <h1 className="text-5xl lg:text-6xl font-extrabold mt-6 leading-tight">
            Hi, I'm
            <br />
            <span className="text-violet-400 whitespace-nowrap">
              Harini Gangireddy
            </span>
          </h1>

          <p className="text-xl text-slate-300 mt-6">
            AI & ML | Software Developer | Problem Solver
          </p>

          <p className="text-slate-400 mt-6 max-w-xl leading-8">
            I am a third-year B.Tech Computer Science and Engineering student
            at VIT-AP University with a strong interest in Artificial
            Intelligence, Machine Learning, and Software Development.
            
          </p>

          <div className="flex gap-4 mt-10">

            <a
                href="https://drive.google.com/file/d/1aS2XHDA5p3728g9qVk3V-lJsPAuQaV7b/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-violet-600 hover:bg-violet-700 transition px-6 py-3 rounded-xl flex items-center gap-2 shadow-lg w-fit"
            >
                <FaDownload />
                Resume
            </a>

           

          </div>

          <div className="flex gap-6 mt-10 text-3xl">

            <a
              href="https://github.com/harinigangireddy2407"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/harini-gangireddy-683263386"
              target="_blank"
              rel="noreferrer"
              className="hover:text-violet-400 transition"
            >
              <FaLinkedin />
            </a>

          </div>

        </div>

        {/* Right Section */}

        <div className="flex justify-center -mt-16">

          <div className="w-80 h-80 rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-purple-600 p-[5px] shadow-[0_0_50px_rgba(99,102,241,0.35)]">

            <img
              src={heroImg}
              alt="Harini"
              className="w-full h-full rounded-full object-cover object-top bg-slate-900"
            />

          </div>

        </div>

      </div>
    </section>
  );
}

export default Hero;