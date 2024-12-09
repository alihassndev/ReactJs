import { useState } from "react";

function MyComponent() {
  const [car, setCar] = useState({
    year: 2024,
    make: "ford",
    model: "Mustang",
  });

  const yearChange = (event) => {
    setCar((c) => ({ ...c, year: event.target.value }));
  };
  const makeChange = (event) => {
    setCar((c) => ({ ...c, make: event.target.value }));
  };
  const modelChange = (event) => {
    setCar((c) => ({ ...c, model: event.target.value }));
  };

  return (
    <>
      <p>
        Your Favourite car is : {car.make}, {car.model},{car.year}
      </p>
      <label htmlFor="year">{car.year}</label> <br />
      <input
        type="number"
        value={car.year}
        onChange={yearChange}
        id="year"
      />{" "}
      <br /> <br />
      <label htmlFor="make">{car.make}</label> <br />
      <input
        type="text"
        value={car.make}
        onChange={makeChange}
        id="make"
      />{" "}
      <br /> <br />
      <label htmlFor="model">{car.model}</label> <br />
      <input type="text" value={car.model} onChange={modelChange} id="model" />
    </>
  );
}

export default MyComponent;
