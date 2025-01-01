const baseUrl = `https://api.weatherapi.com/v1/current.json?key=32c92c87b4634c7284d154750250101`;

export const getWeather = async (city) => {
  const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }
  return await response.json();
};
