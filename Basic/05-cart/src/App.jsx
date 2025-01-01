import Cart from "./Components/Cart";
import Items from "./Components/Items";
import { CartProvider } from "./Context/Cart";

function App() {
  return (
    <>
      <CartProvider>
        <div className="py-16 flex flex-col gap-10 justify-center items-center min-h-screen w-full bg-black text-white">
          <h1 className="text-4xl font-bold">Add to Cart Project</h1>

          <div className="flex justify-center items-center gap-10 flex-wrap">
            <Items name="MacBook Pro" price={1500} />
            <Items name="Apple 14" price={1300} />
            <Items name="Dell 7400" price={600} />
            <Items name="Samsung S24" price={1200} />
            <Items name="Airpods" price={100} />
          </div>
          <Cart />
        </div>
      </CartProvider>
    </>
  );
}

export default App;
