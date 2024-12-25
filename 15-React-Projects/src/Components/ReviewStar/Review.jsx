import { useState } from "react";

function Review() {
  const [hover, setHover] = useState(0);
  const [rating, setRating] = useState(0);
  return (
    <>
      <div className="flex flex-col justify-center items-center gap-12">
        <h1 className="text-6xl font-bold">Give Your Feedback</h1>

        <div className="flex gap-3">
          {[...Array(5)].map((_, index) => {
            const currentIndex = index + 1;
            return (
              <span
                key={index}
                className={`ri-star-fill text-5xl ${
                  currentIndex <= (hover || rating)
                    ? "text-yellow-500"
                    : "text-gray-300"
                } transition-all duration-200`}
                onMouseEnter={() => setHover(currentIndex)}
                onMouseLeave={() => setHover(0)}
                onClick={() => setRating(currentIndex)}
              ></span>
            );
          })}
        </div>

        <div>
          <p className="text-2xl">
            {rating > 0
              ? `You give rating ${rating} out of 5!`
              : "click on stars to give rating"}
          </p>
        </div>
      </div>
    </>
  );
}

export default Review;
