import { useState } from "react";
import { apiKey, weatherUrl } from "./api";
import CurrentWeather from "./Components/CurrentWeather/CurrentWeather";
import Search from "./Components/Search/Search";
import Forecast from "./Components/Forecast/Forecast";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${weatherUrl}/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    const forecastWeatherFetch = fetch(
      `${weatherUrl}/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const ForecastResponse = await response[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setforecast({ city: searchData.label, ...ForecastResponse });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="flex justify-center py-12 min-h-screen w-full bg-gray-300">
        <div className="flex flex-col gap-10">
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather && <CurrentWeather data={currentWeather} />}
          {forecast && <Forecast data={forecast} />}
        </div>
      </div>
    </>
  );
}

export default App;
