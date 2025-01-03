/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";

const weekDays = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

function Forecast({ data }) {
  const dayInWeek = new Date().getDay();

  const forecastDays = weekDays
    .slice(dayInWeek, weekDays.length)
    .concat(weekDays.slice(0, dayInWeek));

  return (
    <>
      <div>
        <label className="text-lg font-bold">Daily</label>
        <Accordion allowZeroExpanded className="my-5 flex flex-col gap-3">
          {data.list.splice(0, 7).map((item, index) => (
            <AccordionItem key={index}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="w-[60vw] ps-5 pr-8 bg-white flex justify-between items-center p-2 rounded-lg">
                    <div className="flex items-center gap-2">
                      <img
                        className="w-8"
                        src={`icons/${item.weather[0].icon}.png`}
                        alt="weather"
                      />
                      <label className="font-bold">{forecastDays[index]}</label>
                    </div>

                    <div className="flex items-center gap-3">
                      <label>{item.weather[0].description}</label>
                      <label className="text-xs text-gray-400 font-bold">
                        {Math.round(item.main.temp_min)}°C /{" "}
                        {Math.round(item.main.temp_max)}°C
                      </label>
                    </div>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="grid grid-cols-2 my-3">
                  <div className="w-full flex justify-between items-center pr-8">
                    <label className="ps-6 font-bold">Pressure</label>
                    <label>{item.main.pressure} hPa</label>
                  </div>
                  <div className="w-full flex justify-between items-center pr-8">
                    <label className="font-bold">Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="w-full flex justify-between items-center pr-8">
                    <label className="ps-6 font-bold">Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="w-full flex justify-between items-center pr-8">
                    <label className="font-bold">Wind Speed: </label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div className="w-full flex justify-between items-center pr-8">
                    <label className="ps-6 font-bold">Sea Level: </label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="w-full flex justify-between items-center pr-8">
                    <label className="font-bold">Feels like</label>
                    <label>{Math.round(item.main.feels_like)}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </>
  );
}

export default Forecast;
