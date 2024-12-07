import { useState } from "react";

function Me() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [order, setOrder] = useState("");

  const handleChange = (event) => {
    setName(event.target.value);
  };

  const handleQuantity = (event) => {
    if (event.target.value < 0) setQuantity(0);
    else setQuantity(event.target.value);
  };

  const handleComment = (event) => {
    setComment(event.target.value);
  };

  const handlePayment = (event) => {
    setPayment(event.target.value);
  };

  const handleOrder = (event) => {
    setOrder(event.target.value);
  };

  return (
    <>
      <div>
        <input
          type="text"
          value={name}
          placeholder="Enter Name"
          onChange={handleChange}
        />
        <p>Name: {name}</p>

        <input
          type="number"
          value={quantity}
          placeholder="Enter Quantity"
          onChange={handleQuantity}
        />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          placeholder="Enter Comment"
          onChange={handleComment}
        />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePayment}>
          <option value="" selected disabled>
            Select an option
          </option>
          <option value="Visa">Visa</option>
          <option value="MasterCard">MasterCard</option>
          <option value="GiftCard">GiftCard</option>
        </select>
        <p>Payment: {payment}</p>

        <label htmlFor="pickup">Pick Up</label>
        <input
          type="radio"
          name="order"
          id="pickup"
          value="pickup"
          checked={order === "pickup"}
          onChange={handleOrder}
        />
        <label htmlFor="delivery">Delivery</label>
        <input
          type="radio"
          name="order"
          id="delivery"
          value="delivery"
          checked={order === "delivery"}
          onChange={handleOrder}
        />
        <p>Shipping: {order}</p>
      </div>
    </>
  );
}

export default Me;
