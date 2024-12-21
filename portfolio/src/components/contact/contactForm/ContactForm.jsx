function ContactForm() {
  return (
    <>
      <div>
        <form
          className="flex flex-col justify-center items-center gap-6 text-black"
          action=""
        >
          <div className="w-full flex justify-center items-center gap-4">
            <input
              className="flex-1 p-3 rounded-md outline-none"
              type="text"
              placeholder="First Name"
            />
            <input
              className="flex-1 p-3 rounded-md outline-none"
              type="text"
              placeholder="Last Name"
            />
          </div>
          <div className="w-full flex">
            <input
              className="flex-1 p-3 rounded-md outline-none"
              type="text"
              placeholder="Email"
            />
          </div>
          <div className="w-full flex">
            <textarea
              className="resize-none flex-1 p-3 rounded-md outline-none"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="w-full flex">
            <button className="bg-purple-800 border flex-1 p-3 rounded-md hover:bg-purple-600 transition-all duration-300 z-30 font-semibold text-white">
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ContactForm;
