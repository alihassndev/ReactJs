import { useState } from "react";

function ArrayObject() {
  const [cars, setCar] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const addCar = () => {
    const newcar = { year: carYear, make: carMake, model: carModel };

    setCar((c) => [...c, newcar]);

    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  };
  const removeCar = (index) => {
    setCar((c) => c.filter((_, i) => i !== index));
  };
  const changeYear = (e) => {
    setCarYear(e.target.value);
  };
  const changeMake = (e) => {
    setCarMake(e.target.value);
  };
  const changeModel = (e) => {
    setCarModel(e.target.value);
  };

  return (
    <>
      <div className="test">
        <h1>List of car Objects</h1>
        <ul>
          {cars.map((car, index) => (
            <li key={index} onClick={() => removeCar(index)}>
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>
        <input type="number" value={carYear} onChange={changeYear} /> <br />{" "}
        <br />
        <input
          type="text"
          placeholder="Enter car make"
          value={carMake}
          onChange={changeMake}
        />{" "}
        <br /> <br />
        <input
          type="text"
          placeholder="Enter car model"
          value={carModel}
          onChange={changeModel}
        />
        <button onClick={addCar}>Add Car</button>
      </div>
    </>
  );
}

export default ArrayObject;
