/* eslint-disable react/prop-types */

import { useCart } from "../Context/Cart";

function Items(props) {
  const value = useCart();

  console.log(value);

  return (
    <>
      <div className="flex flex-col w-64 gap-6 bg-white text-black p-16 rounded-2xl hover:bg-gray-200 transition-all duration-300 cursor-pointer">
        <div className="flex flex-col gap-3">
          <h2 className="text-xl font-bold">{props.name}</h2>
          <p className="font-semibold text-gray-500">${props.price}</p>
        </div>

        <button
          onClick={() =>
            value.setItems([
              ...value.items,
              {
                name: props.name,
                price: props.price,
              },
            ])
          }
          className="bg-gray-500 text-white py-1.5 rounded-xl"
        >
          Add to cart
        </button>
      </div>
    </>
  );
}

export default Items;
