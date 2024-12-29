// import Accord from "./Components/Accordion/Accord";
// import RandomColor from "./Components/RandomColor/RandomColor";
// import Review from "./Components/ReviewStar/Review";
// import Slider from "./Components/ImageSlider/Slider";
import LoadMore from "./Components/LoadMore/LoadMore";

function App() {
  return (
    <>
      <div className="w-full min-h-screen flex justify-center items-center">
        {/* <Accord /> */}
        {/* <Review /> */}
        {/* <Slider url={"https://picsum.photos/v2/list"} limit={"5"} page={"1"} /> */}
        <LoadMore />
      </div>
      {/* <RandomColor /> */}
    </>
  );
}

export default App;
