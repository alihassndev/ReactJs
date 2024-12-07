function Button() {
  // let count = 0;

  // const handleClick = (name) => {
  //   if (count < 3) {
  //     count++;
  //     console.log(`${name} you click me ${count} times.`);
  //   } else {
  //     console.log(`${name} stop clicking me`);
  //   }
  // };

  // const handleClick1 = (name) => {
  //   console.log(`${name} stop clicking me.`);
  // };

  const handleClick = (event) => {
    event.target.textContent = "clicked!";
  };

  return (
    <>
      <div className="box">
        <button className="button" onDoubleClick={(e) => handleClick(e)}>
          Click me!
        </button>

        {/* <button className="button" onClick={() => handleClick("Hassan")}>
          Click me!
        </button> */}

        {/* <button className="button" onClick={() => handleClick1("Ali")}>
          Click me!
        </button> */}
      </div>
    </>
  );
}

export default Button;
