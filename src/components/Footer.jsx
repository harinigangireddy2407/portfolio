function Footer() {
  return (
    <footer  className="border-t border-slate-800 py-8">
      <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row justify-between items-center">

        <h2 className="text-xl font-bold text-violet-400">
          Harini Gangireddy
        </h2>

        <p className="text-slate-400 mt-4 md:mt-0">
          © {new Date().getFullYear()} Harini Gangireddy. All Rights Reserved.
        </p>

      </div>
    </footer>
  );
}

export default Footer;