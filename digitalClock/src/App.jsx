import { useState, useEffect } from "react";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalID = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(intervalID);
    };
  }, []);

  const formatTime = () => {
    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();
    const meridiem = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZeros(hours)}:${padZeros(minutes)}:${padZeros(
      seconds
    )} ${meridiem}`;
  };

  const padZeros = (num) => {
    return (num < 10 ? "0" : "") + num;
  };

  return (
    <>
      <div className="clock">
        <div className="digital">
          <span>{formatTime()}</span>
        </div>
      </div>
    </>
  );
}

export default App;
