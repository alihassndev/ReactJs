/* eslint-disable react/prop-types */
import { createContext, useContext, useState } from "react";
import { getWeather } from "../api";

export const WeatherContext = createContext("");

export const useWeather = () => useContext(WeatherContext);

export const WeatherProvider = (props) => {
  const [data, setData] = useState("");
  const [searchCity, setCity] = useState("");

  const fetchData = async () => {
    if (!searchCity) {
      alert("Please enter a city name!");
      return;
    }
    try {
      const response = await getWeather(searchCity);
      if (response.error) {
        alert("City not found!");
      } else {
        setData(response);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      alert("Failed to fetch weather data. Please try again.");
    }
  };

  return (
    <WeatherContext.Provider value={{ data, searchCity, setCity, fetchData }}>
      {props.children}
    </WeatherContext.Provider>
  );
};
