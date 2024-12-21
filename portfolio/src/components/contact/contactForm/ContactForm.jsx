import { useState } from "react";
import emailjs from "emailjs-com";

function ContactForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Debugging logs
    console.log("Submitting form data:", formData);

    emailjs
      .send(
        "service_0tteumx", // Replace with your EmailJS Service ID
        "template_bjwk9ra", // Replace with your EmailJS Template ID
        {
          from_name: formData.firstName,
          lastName: formData.lastName,
          user_email: formData.email,
          message: formData.message,
        },
        "CTRqRdpYIReGPfnWX" // Replace with your EmailJS Public Key (User ID)
      )
      .then(
        (response) => {
          console.log("Email sent successfully:", response);
          alert("Thank you for reaching me out. I'll get back to you soon!");
          setFormData({ firstName: "", lastName: "", email: "", message: "" }); // Clear form
        },
        (error) => {
          console.error("Error sending email:", error);
          alert("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <form
      className="flex w-full flex-col justify-center items-center gap-6 text-black"
      onSubmit={handleSubmit}
    >
      <div className="w-full flex flex-col md:flex-row justify-center items-center gap-4">
        <input
          className="flex-1 w-full p-3 rounded-md outline-none"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          className="flex-1 w-full p-3 rounded-md outline-none"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full flex">
        <input
          className="flex-1 p-3 rounded-md outline-none"
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="w-full flex">
        <textarea
          className="resize-none flex-1 p-3 rounded-md outline-none"
          name="message"
          placeholder="Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
      </div>
      <div className="w-full flex">
        <button
          className="bg-purple-800 border flex-1 p-3 rounded-md hover:bg-purple-600 transition-all duration-300 z-30 font-semibold text-white"
          type="submit"
        >
          Send
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
