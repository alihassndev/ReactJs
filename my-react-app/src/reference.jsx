import { useEffect, useRef } from "react";

function Reference() {
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  useEffect(() => {
    console.log(`Component Rendered`);
  });

  const handleClick1 = () => {
    inputRef1.current.focus();
    inputRef1.current.style.backgroundColor = "yellow";
    inputRef2.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };

  const handleClick2 = () => {
    inputRef2.current.focus();
    inputRef2.current.style.backgroundColor = "green";
    inputRef1.current.style.backgroundColor = "";
    inputRef3.current.style.backgroundColor = "";
  };

  const handleClick3 = () => {
    inputRef3.current.focus();
    inputRef3.current.style.backgroundColor = "red";
    inputRef1.current.style.backgroundColor = "";
    inputRef2.current.style.backgroundColor = "";
  };

  return (
    <>
      <button onClick={handleClick1}>Click me 1</button>
      <input type="text" ref={inputRef1} />

      <button onClick={handleClick2}>Click me 2</button>
      <input type="text" ref={inputRef2} />

      <button onClick={handleClick3}>Click 3</button>
      <input type="text" ref={inputRef3} />
    </>
  );
}

export default Reference;
