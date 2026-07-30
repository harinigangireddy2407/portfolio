function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full backdrop-blur-md bg-slate-950/70 border-b border-slate-800 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between h-16 px-8">

        {/* Logo */}
        <h1 className="text-2xl font-bold text-violet-400">
          HG
        </h1>

        {/* Navigation */}
        <ul className="hidden md:flex gap-14 text-slate-300 font-medium">
          <li>
            <a href="#about" className="hover:text-violet-400 transition">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="hover:text-violet-400 transition">
              Skills
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-violet-400 transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#certificates" className="hover:text-violet-400 transition">
               Certification
            </a>
          </li>
        </ul>

      </div>
    </nav>
  );
}

export default Navbar;