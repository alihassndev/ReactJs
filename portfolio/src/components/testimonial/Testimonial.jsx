import { useRef } from "react";
import Slider from "react-slick";
import TestCard from "./testCard/TestCard";
import { TEST } from "../../utils/data";

function Testimonial() {
  const sliderRef = useRef();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      // Corrected here
      {
        breakpoint: 769, // When the screen width is 769px or smaller (mobile)
        settings: {
          slidesToShow: 1, // Show 1 slide on mobile
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  return (
    <>
      <div className="w-[80vw] mx-auto my-24 flex flex-col gap-20">
        <h2 className="text-2xl font-semibold">Testimonials</h2>

        <div>
          <Slider ref={sliderRef} {...settings}>
            {TEST.map((t, index) => (
              <TestCard key={index} profile={t} />
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Testimonial;
