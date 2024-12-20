import "./navbar.css";

function Navbar() {
  return (
    <>
      <nav className="w-full h-20 bg-blue-950">
        <div className="lg:w-[80vw] h-full mx-auto lg:px-0 px-5 flex justify-between items-center">
          <div>
            <a href="/">
              <h1 className="text-2xl font-bold">Ali Hassan</h1>
            </a>
          </div>

          <ul id="menu" className="flex justify-center items-center gap-12">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Skills</a>
            </li>
            <li>
              <a href="/">Work Experience</a>
            </li>
            <li>
              <a href="/">Contact Me</a>
            </li>

            <button
              className="bg-blue-600 py-1.5 px-4 rounded-md hover:bg-transparent border border-blue-600 transition-all duration-300 outline-none"
              onClick={() => {}}
            >
              Hire Me
            </button>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
