import { useWeather } from "../Context/Weather";

function Card() {
  const { data } = useWeather();

  return (
    <div className="border w-[25vw] flex flex-col justify-center items-center p-16 rounded-lg shadow-lg shadow-gray-200">
      {data ? (
        <>
          <img
            className="w-20"
            src={data.current.condition.icon}
            alt={data.current.condition.text}
          />
          <h2 className="text-lg">{data.current.temp_c}°C</h2>
          <h5 className="text-2xl">{data.location.name}</h5>
          <p className="text-lg">{data.current.condition.text}</p>
        </>
      ) : (
        <p>Enter a location and click search to see weather details.</p>
      )}
    </div>
  );
}

export default Card;
