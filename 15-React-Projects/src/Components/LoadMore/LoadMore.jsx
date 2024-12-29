import { useState, useEffect } from "react";

function LoadMore() {
  const [loading, setLoading] = useState(false); // Manage loading state
  const [products, setProducts] = useState([]); // Store loaded products
  const [message, setMessage] = useState(""); // Handle error messages
  const [count, setCount] = useState(0); // Keep track of the number of products loaded
  const limit = 10; // Number of products to load per request

  // Base URL for fetching products
  const baseUrl = "https://dummyjson.com/products";

  // Fetch products with limit and offset
  async function fetchProducts(skip = 0) {
    try {
      setLoading(true);
      const response = await fetch(
        `${baseUrl}?limit=${limit}&skip=${skip}&select=title,price,thumbnail`
      );
      const data = await response.json();

      // Check if data is valid and contains products
      if (data && data.products) {
        setProducts((prevProducts) => [...prevProducts, ...data.products]); // Append new products to existing ones
      } else {
        setMessage("Invalid API response format.");
      }
      setLoading(false);
    } catch (error) {
      setMessage(error.message);
      setLoading(false);
    }
  }

  // Fetch initial products on component mount
  useEffect(() => {
    fetchProducts(count); // Load initial products
  }, []);

  // Load more products when "Load More" is clicked
  function loadMore() {
    const newCount = count + limit;
    setCount(newCount);
    fetchProducts(newCount);
  }

  return (
    <div className="flex flex-col justify-center items-center gap-10 p-5">
      <h1 className="text-2xl font-bold">Product Load More Component</h1>

      {/* Display products */}
      <div className="grid grid-cols-3 gap-4">
        {products.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 flex flex-col items-center"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-32 h-32 object-cover mb-3"
            />
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p className="text-sm text-gray-600">Price: ${item.price}</p>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <button
          onClick={loadMore}
          className="px-5 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
        >
          Load More
        </button>
      )}

      {/* Error Message */}
      {message && <p className="text-red-500">{message}</p>}
    </div>
  );
}

export default LoadMore;
