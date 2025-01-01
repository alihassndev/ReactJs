import { useCart } from "../Context/Cart";

function Cart() {
  const value = useCart();

  const total = value.items.reduce((a, b) => a + b.price, 0);

  return (
    <>
      <div className="w-full flex justify-center items-center">
        <div className="w-[30vw] flex flex-col gap-6">
          <h1 className="text-4xl text-center font-bold">Cart</h1>
          <ol className="list-decimal flex flex-col gap-3">
            {value &&
              value.items.map((item, index) => (
                <li key={index} className="flex justify-around gap-5">
                  <span>{item.name}</span> - <span>${item.price}</span>
                </li>
              ))}
          </ol>
          <h3 className="flex justify-center mx-10 gap-5 bg-white p-2 rounded-xl text-black font-semibold">
            <span>Total Bill: </span> - <span>${total}</span>
          </h3>
        </div>
      </div>
    </>
  );
}

export default Cart;
