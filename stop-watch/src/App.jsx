import { useState, useEffect, useRef } from "react";

import "./App.css";

function App() {
  const [isrunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useRef(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if (isrunning) {
      intervalIdRef.current = setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    }

    return () => {
      clearInterval(intervalIdRef.current);
    };
  }, [isrunning]);

  const timeStart = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - elapsedTime;
  };
  const timeStop = () => {
    setIsRunning(false);
  };
  const timeReset = () => {
    setElapsedTime(0);
    setIsRunning(false);
  };
  const formatTime = () => {
    let hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
    let seconds = Math.floor((elapsedTime / 1000) % 60);
    let milisceonds = Math.floor((elapsedTime % 1000) / 10);

    // eslint-disable-next-line no-unused-vars
    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    milisceonds = String(milisceonds).padStart(2, "0");

    return `${minutes}:${seconds}:${milisceonds}`;
  };

  return (
    <>
      <div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
          <button className="stop-btn" onClick={timeStop}>
            Stop
          </button>
          <button className="reset-btn" onClick={timeReset}>
            Reset
          </button>
          <button className="start-btn" onClick={timeStart}>
            Start
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
