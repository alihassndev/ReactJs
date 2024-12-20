function Skills() {
  return (
    <>
      <div id="skills" className="my-24 w-[80vw] mx-auto flex flex-col gap-10">
        <h1 className="text-2xl font-semibold">Technical Proficiency</h1>
        <div className="flex flex-col lg:flex-row justify-center lg:justify-between items-center gap-10 lg:gap-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 flex-1 order-2 lg:order-1">
            <div className="relative cursor-pointer py-8 px-12 border w-fit rounded-lg bg-[#8345fe] text-xl">
              Frontend
              <span className="absolute -left-4 -top-4 bg-[#6416ff] border rounded-lg overflow-hidden">
                <i className="ri-terminal-window-fill text-2xl py-1 px-2"></i>
              </span>
            </div>

            <div className="relative cursor-pointer py-8 px-12 border w-fit rounded-lg bg-[#8345fe] text-xl">
              Backend
              <span className="absolute -left-4 -top-4 bg-[#6416ff] border rounded-lg overflow-hidden">
                <i className="ri-code-box-line text-2xl py-1 px-2"></i>
              </span>
            </div>

            <div className="relative cursor-pointer py-8 px-12 border w-fit rounded-lg bg-[#8345fe] text-xl">
              Tools
              <span className="absolute -left-4 -top-4 bg-[#6416ff] border rounded-lg overflow-hidden">
                <i className="ri-tools-fill text-2xl py-1 px-2"></i>
              </span>
            </div>

            <div className="relative cursor-pointer py-8 px-12 border w-fit rounded-lg bg-[#8345fe] text-xl">
              Soft Skills
              <span className="absolute -left-4 -top-4 bg-[#6416ff] border rounded-lg overflow-hidden">
                <i className="ri-presentation-fill text-2xl py-1 px-2"></i>
              </span>
            </div>
          </div>

          <div className="flex flex-1 w-full flex-col border rounded-xl py-6 px-10 order-1 lg:order-2">
            <h2 className="text-xl font-semibold pb-4 border-b">Tools</h2>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3>Git & Github</h3>
                <p>75%</p>
              </div>
              <div className="w-[75%] mt-3 mb-5 rounded-full h-2 bg-blue-300"></div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3>Visual Studio Code</h3>
                <p>70%</p>
              </div>
              <div className="w-[70%] mt-3 mb-5 rounded-full h-2 bg-blue-300"></div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3>Responsive Design</h3>
                <p>85%</p>
              </div>
              <div className="w-[85%] mt-3 mb-5 rounded-full h-2 bg-blue-300"></div>
            </div>
            <div className="mt-6">
              <div className="flex justify-between items-center">
                <h3>Figma</h3>
                <p>70%</p>
              </div>
              <div className="w-[70%] mt-3 mb-5 rounded-full h-2 bg-blue-300"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skills;
