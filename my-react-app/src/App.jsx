import Header from "./header";
import Footer from "./footer";
import Food from "./food";
import Card from "./card";
import Button from "./button";

function App() {
  return (
    <>
      <Header />
      <div className="hero">
        <Food />
        <div className="cards">
          <Card
            name="Ali Hassan"
            url="https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600"
            passion="Frontend Developer"
          />

          <Card
            name="Yusuf"
            url="https://images.pexels.com/photos/792381/pexels-photo-792381.jpeg?auto=compress&cs=tinysrgb&w=600"
            passion="Backend Developer"
          />

          <Card
            name="Hassan"
            url="https://images.pexels.com/photos/248159/pexels-photo-248159.jpeg?auto=compress&cs=tinysrgb&w=600"
            passion="Developer"
          />

          <Card url="https://images.pexels.com/photos/1212487/pexels-photo-1212487.jpeg?auto=compress&cs=tinysrgb&w=600" />
        </div>
      </div>

      <Button />
      <Footer />
    </>
  );
}

export default App;
