import ContactCard from "./contactCard/ContactCard";
import ContactForm from "./contactForm/ContactForm";

function Contact() {
  return (
    <>
      <div id="contact" className="w-[80vw] mx-auto my-24 flex flex-col gap-10">
        <h2 className="text-2xl font-semibold">Contact Me</h2>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
          <div className="flex-1 flex flex-col justify-center gap-6 text-sm p-10">
            <a href="mailto:alihassndev@gmail.com" target="_blank">
              <ContactCard
                iconUrl="ri-mail-line"
                text="alihassndev@gmail.com"
              />
            </a>

            <a href="https://github.com/alihassndev" target="_blank">
              <ContactCard
                iconUrl="ri-github-fill"
                text="https://github.com/alihassndev"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/ali-hassan-37905b330/"
              target="_blank"
            >
              <ContactCard
                iconUrl="ri-linkedin-fill"
                text="https://www.linkedin.com/in/ali-hassan-37905b330/"
              />
            </a>
          </div>
          <div className="flex-1 py-14 px-10 bg-gradient-to-r from-blue-900 to-purple-900 rounded-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
