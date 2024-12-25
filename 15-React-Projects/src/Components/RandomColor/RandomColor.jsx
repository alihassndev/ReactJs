import { useState } from "react";

function RandomColor() {
  const [selectRgb, setRgb] = useState(false);
  const [hexColor, setHexColor] = useState("#FFFFFF");
  const [rgbColor, setRgbColor] = useState("rgb(255, 255, 255)");
  const [copied, setCopied] = useState(false); // To show the copy status

  const generateRgb = () => {
    setRgb(true);
    setRgbColor(
      `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(
        Math.random() * 255
      )}, ${Math.floor(Math.random() * 255)})`
    );
  };

  const generateColor = () => {
    setRgb(false);
    let rand = "#";
    for (let i = 0; i < 6; i++) {
      rand += "0123456789ABCDEF"[Math.floor(Math.random() * 16)];
    }
    setHexColor(rand);
  };

  const copyColor = () => {
    const colorCode = selectRgb ? rgbColor : hexColor;
    navigator.clipboard.writeText(colorCode).then(() => {
      setCopied(true); // Show "Copied!" message
      setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
    });
  };

  return (
    <>
      <div
        style={{ backgroundColor: selectRgb ? rgbColor : hexColor }}
        className={`w-full min-h-screen flex flex-col justify-center items-center gap-16`}
      >
        <h1 className="text-4xl font-bold underline">Random Color Generator</h1>

        <div className="w-[40vw] mx-auto flex justify-between items-center">
          <button
            onClick={generateColor}
            className="bg-gray-300 py-2 px-4 rounded-lg"
          >
            Generate Hex Color
          </button>
          <button
            onClick={generateRgb}
            className="bg-gray-300 py-2 px-4 rounded-lg"
          >
            Generate RGB Color
          </button>
          <button
            onClick={generateColor}
            className="bg-gray-300 py-2 px-4 rounded-lg"
          >
            Generate Random Color
          </button>
        </div>

        <div className="text-4xl font-semibold">
          {selectRgb ? "RGB Color" : "Hex Color"}
        </div>

        <div
          onClick={copyColor}
          className="text-8xl cursor-pointer p-5 border rounded-lg bg-white"
          title="Click to copy"
        >
          {selectRgb ? rgbColor : hexColor}
        </div>

        {copied && (
          <div className="text-lg font-semibold text-green-500">
            Color Code Copied!
          </div>
        )}
      </div>
    </>
  );
}

export default RandomColor;
