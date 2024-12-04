import "./App.css";
import Card from "./components/Card";

function App() {
  // let myuser = {
  //   user: "alihassan",
  //   age: 22,
  // };

  // const myArr = [1, 2, 3, 4];

  return (
    <>
      <h1 className="bg-slate-50 text-green-500 lg:w-full p-5 rounded-lg cursor-pointer">
        Hello Ali
      </h1>
      <p>How are you?</p>

      {/* <Card name="ali" some={myuser} newArr={myArr} /> */}

      <div className="flex gap-5 items-center justify-center flex-wrap">
        <Card username="hassan" />
        <Card username="ali" />
        <Card username="ali" hashtxt="#abc" />
        <Card username="ali" />
        <Card username="ali" />
      </div>
    </>
  );
}

export default App;
