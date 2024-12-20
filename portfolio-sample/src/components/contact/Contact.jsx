function Contact() {
  return (
    <>
      <div
        id="contact"
        className="w-[80vw] mx-auto my-24 flex flex-col justify-center items-start gap-6"
      >
        <h1 className="text-2xl font-semibold">Contact Me</h1>
        <div className="w-full flex justify-between items-center gap-10">
          <div className="flex flex-col justify-center gap-8 flex-1 w-full p-10">
            <div className="flex flex-col justify-center items-center gap-4 border p-6 rounded-xl">
              <span className="p-3 rounded-lg border border-red-100">
                <i class="ri-mail-line text-xl font-semibold"></i>
              </span>
              <p>alihassndev@gmail.com</p>
            </div>

            <div className="flex flex-col justify-center items-center gap-4 border p-6 rounded-xl">
              <span>
                <i class="ri-github-fill"></i>
              </span>
              <p>
                <a href="https://github.com/alihassndev">
                  https://github.com/alihassndev
                </a>
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center gap-5 flex-1 w-full p-10">
            <form className="w-full flex flex-col justify-center gap-6 flex-1 text-black">
              <div className="flex justify-center items-center gap-5">
                <input
                  type="text"
                  placeholder="First Name"
                  className="w-[50%] p-2 rounded-md outline-none border bg-[#ffffffad] focus:bg-[#ffffff8c] border-[#ffffff] placeholder:text-[#4e4e4e]"
                />
                <input
                  type="text"
                  placeholder="Last Name"
                  className="w-[50%] p-2 rounded-md outline-none border bg-[#ffffffad] focus:bg-[#ffffff8c] border-[#ffffff] placeholder:text-[#4e4e4e]"
                />
              </div>
              <div>
                <input
                  className="w-full p-2 rounded-md outline-none border bg-[#ffffffad] focus:bg-[#ffffff8c] border-[#ffffff] placeholder:text-[#4e4e4e]"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  className="resize-none p-2 rounded-md w-full outline-none border bg-[#ffffffad] focus:bg-[#ffffff8c] border-[#ffffff] placeholder:text-[#4e4e4e]"
                ></textarea>
              </div>
              <div className="w-full flex justify-center items-center bg-[#8345fe] p-2 rounded-md text-white hover:bg-[#9461f9] transition-all duration-300 cursor-pointer">
                <button>Send</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
