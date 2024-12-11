import { useState, useEffect } from "react";

function WindowPosition() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener("resize", handleChange);
    console.log("Add Listener");

    return () => {
      window.removeEventListener("resize", handleChange);
      console.log("Remove Listener");
    };
  }, []);

  useEffect(() => {
    document.title = `Size: ${width} ${height}`;
  }, [width, height]);

  function handleChange() {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  }

  return (
    <>
      <div
        style={{ backgroundColor: "red", padding: "1rem", margin: "1rem auto" }}
      >
        <p>Windows Width: {width}px</p>
        <p>Windows Height: {height}px</p>
      </div>
    </>
  );
}

export default WindowPosition;
