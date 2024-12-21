import html from "../../assets/html-5.png";
import ali from "../../assets/ali.jpg";
import css from "../../assets/css.png";
import js from "../../assets/js.png";
import react from "../../assets/react.png";
import ts from "../../assets/ts.png";
import tailwind from "../../assets/tailwind.png";

function Hero() {
  return (
    <>
      <div className="mt-36 lg:mt-24 h-auto lg:h-[85vh] px-10 w-full lg:w-[80vw] mx-auto flex flex-col lg:flex-row gap-10 justify-center items-center">
        <div className="flex-1">
          <h2 className="lg:text-6xl text-4xl font-semibold leading-tight">
            Building Digital Experience That Inspire.
          </h2>
          <p className="lg:text-2xl font-light text-lg mt-3 leading-snug w-[90%]">
            <strong>Passionate Frontend Developer</strong> | Transforming ideas
            into seamless and visually stunning <strong>Web Solutions</strong>
          </p>
        </div>

        <div className="flex-1 flex flex-col gap-6 px-10">
          <div className="flex justify-center items-end gap-8">
            <div className="flex flex-col gap-6">
              <div className="lg:w-14 lg:h-14 w-10 h-10 bg-white rounded-md flex justify-center items-center">
                <img
                  className="hover:-translate-y-1 transition-all duration-300"
                  src={html}
                  alt="html"
                />
              </div>
              <div className="lg:w-14 lg:h-14 w-10 h-10 p-3 bg-white rounded-md flex justify-center items-center">
                <img
                  className="hover:-translate-y-1 transition-all duration-300"
                  src={css}
                  alt="css"
                />
              </div>
              <div className="w-10 h-10 lg:w-14 lg:h-14 p-3 bg-white rounded-md flex justify-center items-center">
                <img
                  className="hover:-translate-y-1 transition-all duration-300"
                  src={js}
                  alt="js"
                />
              </div>
            </div>

            <img
              className="w-96 rounded-xl hover:-translate-y-1 transition-all duration-300"
              src={ali}
              alt="ali"
            />
          </div>

          <div className="flex justify-center gap-6">
            <div className="lg:w-14 w-10 h-10 lg:h-14 p-3 bg-white rounded-md flex justify-center items-center">
              <img
                className="hover:-translate-y-1 transition-all duration-300"
                src={react}
                alt="react"
              />
            </div>
            <div className="lg:w-14 lg:h-14 w-10 h-10 p-3 bg-white rounded-md flex justify-center items-center">
              <img
                className="hover:-translate-y-1 transition-all duration-300"
                src={ts}
                alt="ts"
              />
            </div>
            <div className="lg:w-14 lg:h-14 w-10 h-10 p-3 bg-white rounded-md flex justify-center items-center">
              <img
                className="hover:-translate-y-1 transition-all duration-300"
                src={tailwind}
                alt="tailwind"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
