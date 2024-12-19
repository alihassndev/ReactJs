import myImage from "../../assets/ali.jpg";
import html from "../../assets/html-5.png";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import ts from "../../assets/ts.png";
import tailwind from "../../assets/tailwind.png";

function Hero() {
  return (
    <>
      <div className="mt-24 lg:h-[80vh] w-[80vw] mx-auto flex flex-col lg:flex-row justify-center items-center gap-10 p-10 mb-28">
        <div className="flex flex-col flex-1">
          <h1 className="lg:w-[70%] sm:w-full text-5xl font-bold">
            Building Digital Experiences That Inspire
          </h1>
          <h2 className="text-xl font-semibold my-5">
            Passionate Frontend Developer
          </h2>
          <p className="lg:w-[70%] sm:w-full">
            Transforming ideas into seamless and stunning Web Solutions.
          </p>
        </div>

        <div className="flex flex-1 items-center justify-end relative">
          <img
            className="w-[70%] rounded-2xl overflow-hidden hover:-translate-y-1 transition-all duration-300"
            src={myImage}
            alt="Ali"
          />

          <div className="absolute w-full h-full">
            <span className="absolute -bottom-24 left-16 rounded-xl w-16 h-16 overflow-hidden flex justify-center items-center bg-white p-4">
              <img
                className="w-full hover:-translate-y-1 transition-all duration-300"
                src={react}
                alt="react"
              />
            </span>
            <span className="absolute -bottom-24 left-64 rounded-xl w-16 h-16 overflow-hidden flex justify-center items-center bg-white p-4">
              <img
                className="w-full hover:-translate-y-1 transition-all duration-300"
                src={tailwind}
                alt="tailwind"
              />
            </span>
            <span className="absolute bottom-56 left-10 lg:left-16 rounded-xl w-16 h-16 overflow-hidden flex justify-center items-center p-1 bg-white">
              <img
                className="w-full hover:-translate-y-1 transition-all duration-300"
                src={html}
                alt="html"
              />
            </span>
            <span className="absolute bottom-28 left-10 lg:left-16 rounded-xl w-16 h-16 overflow-hidden flex justify-center items-center bg-white p-4">
              <img
                className="w-full hover:-translate-y-1 transition-all duration-300"
                src={css}
                alt="css"
              />
            </span>
            <span className="absolute -bottom-24 left-40 rounded-xl w-16 h-16 overflow-hidden flex justify-center items-center bg-white p-4">
              <img
                className="w-full hover:-translate-y-1 transition-all duration-300"
                src={ts}
                alt="ts"
              />
            </span>
            <span className="absolute bottom-0 left-10 lg:left-16 rounded-xl w-16 h-16 overflow-hidden flex justify-center items-center bg-white p-4">
              <img
                className="w-full hover:-translate-y-1 transition-all duration-300"
                src={js}
                alt="js"
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
