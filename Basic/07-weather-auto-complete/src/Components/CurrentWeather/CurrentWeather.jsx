/* eslint-disable react/prop-types */
const CurrentWeather = ({ data }) => {
  return (
    <>
      <div className="flex flex-col rounded-lg gap-2 shadow-lg py-5 px-10 justify-center items-center min-w-96 mx-auto bg-gray-800 text-white">
        <div className="flex items-center w-full justify-between">
          <div>
            <p className="text-lg font-bold">{data.city}</p>
            <p className="text-sm">{data.weather[0].description}</p>
          </div>
          <img
            className="w-12"
            src={`icons/${data.weather[0].icon}.png`}
            alt="weather"
          />
        </div>

        <div className="flex items-center gap-6 w-full justify-between text-sm">
          <p className="text-5xl font-bold">{Math.round(data.main.temp)}°C</p>
          <div className="w-36">
            <div>
              <span className="font-bold">Details</span>
            </div>
            <div className="w-full flex justify-between">
              <span>Feels like</span>
              <span>{data.main.feels_like}°C</span>
            </div>
            <div className="w-full flex justify-between">
              <span>Wind</span>
              <span>{data.wind.speed} m/s</span>
            </div>
            <div className="w-full flex justify-between">
              <span>Humidity</span>
              <span>{data.main.humidity} %</span>
            </div>
            <div className="w-full flex justify-between">
              <span>Pressure</span>
              <span>{data.main.pressure} hPa</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CurrentWeather;
