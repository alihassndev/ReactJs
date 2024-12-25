import { useEffect, useState } from "react";

// eslint-disable-next-line react/prop-types
function Slider({ url, limit = 5, page = 1 }) {
  const [images, setImages] = useState([]);
  const [current, setCurrent] = useState(0);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  // Fetch images from API
  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data && Array.isArray(data)) {
        setImages(data);
        setLoading(false);
      } else {
        setMessage("Invalid API response format.");
        setLoading(false);
      }
    } catch (error) {
      setMessage(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    if (url) {
      fetchImages(url);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, page, limit]);

  // Handle next slide
  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  // Handle previous slide
  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  if (loading) {
    return <div>Loading data, please wait a moment...</div>;
  }

  if (message) {
    return (
      <div>
        Error Occurred! <br /> {message}
      </div>
    );
  }

  if (images.length === 0) {
    return <div>No images available to display.</div>;
  }

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden bg-gray-100">
      {/* Slider Container */}
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image.download_url}
            alt={image.author}
            className="w-full flex-shrink-0"
            style={{ height: "500px", objectFit: "cover" }}
          />
        ))}
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700"
      >
        ‹
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-3 hover:bg-gray-700"
      >
        ›
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              index === current ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Slider;
