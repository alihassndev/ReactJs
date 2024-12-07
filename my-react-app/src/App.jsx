import Header from "./header";
import Footer from "./footer";
import Food from "./food";
import Card from "./card";
// import UserGreeting from "./userGreeting";
import List from "./list";

function App() {
  const fruits = [
    { name: "Apple", caleroies: 95 },
    { name: "Banana", caleroies: 105 },
    { name: "Orange", caleroies: 45 },
    { name: "Coconut", caleroies: 159 },
    { name: "PineApple", caleroies: 37 },
  ];

  const vegetable = [
    { name: "Potato", caleroies: 110 },
    { name: "Celery", caleroies: 15 },
    { name: "Carrots", caleroies: 25 },
    { name: "Corn", caleroies: 63 },
    { name: "Broccli", caleroies: 50 },
  ];

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

        {/* <UserGreeting isLoggedIn={true} username="Ali" /> */}
      </div>

      {fruits.length > 0 && <List items={fruits} category="Fruit" />}
      {vegetable.length > 0 && <List items={vegetable} category="Vegetable" />}

      <Footer />
    </>
  );
}

export default App;
