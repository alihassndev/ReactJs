import Card from "./Components/Card";
import Input from "./Components/Input";
import { WeatherProvider } from "./Context/Weather";

function App() {
  return (
    <WeatherProvider>
      <div className="min-h-screen w-full bg-black text-white flex justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-12 min-w-[30vw] py-16 px-24 rounded-lg bg-white text-black">
          <h1 className="text-4xl font-bold">Weather Forecast</h1>
          <div className="flex flex-col justify-center items-center gap-6">
            <div className="flex justify-center items-center">
              <Input />
            </div>
            <Card />
          </div>
        </div>
      </div>
    </WeatherProvider>
  );
}

export default App;
