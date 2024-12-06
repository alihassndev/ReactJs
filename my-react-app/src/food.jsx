function Food() {
  const food1 = "Orange";
  const food2 = "Banana";

  return (
    <>
      <div className="food">
        <h1>Welcome to my website</h1>

        <ul>
          <li>Apple</li>
          <li>{food1}</li>
          <li>{food2.toUpperCase()}</li>
        </ul>
      </div>
    </>
  );
}

export default Food;
