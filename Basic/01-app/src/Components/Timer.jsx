import { useEffect, useState } from "react";

function Timer() {
  const [timer, setTimer] = useState(0);
  useEffect(() => {
    const time = setInterval(() => setTimer(timer + 1), 1000);

    return () => {
      clearInterval(time);
    };
  }, [timer]);

  return (
    <>
      <div>
        <h2 className="text-4xl font-bold">Stop Watch</h2>
        <p className="my-5 text-lg">Current Time: {timer}</p>
      </div>
    </>
  );
}

export default Timer;
