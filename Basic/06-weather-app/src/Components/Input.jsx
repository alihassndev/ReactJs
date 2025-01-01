import { useWeather } from "../Context/Weather";

function Input() {
  const { searchCity, setCity, fetchData } = useWeather();

  return (
    <div className="flex items-center">
      <input
        className="rounded-s-lg w-80 translate-x-2 p-2 border-l-gray-300 outline-none border overflow-hidden"
        type="text"
        placeholder="Enter Location"
        value={searchCity}
        onChange={(e) => setCity(e.target.value)}
      />
      <button
        onClick={fetchData}
        className="border-gray-300 border text-base rounded-r-lg px-5 hover:bg-gray-200 bg-gray-300 p-2 text-black ml-2"
      >
        Search
      </button>
    </div>
  );
}

export default Input;
