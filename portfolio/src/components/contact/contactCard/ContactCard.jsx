// eslint-disable-next-line react/prop-types
function ContactCard({ iconUrl, text }) {
  return (
    <>
      <div className="group flex flex-col items-center justify-center gap-6 border p-8 rounded-xl hover:bg-gradient-to-r hover:from-blue-900 hover:to-purple-900 hover:text-white transition-all duration-300">
        <div>
          <span
            className={`${iconUrl} flex-1 w-full text-xl border p-3 rounded-lg bg-[#e0e0e054] group-hover:bg-white group-hover:text-blue-600 transition-all duration-300`}
          ></span>
        </div>

        <p className="flex-1 text-xs md:text-base text-center">{text}</p>
      </div>
    </>
  );
}

export default ContactCard;
