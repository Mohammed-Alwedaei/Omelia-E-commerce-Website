import { useState } from "react";
import CounterField from "../forms/counter-field/CounterField";

export default function CartItemCounter() {
  const [counter, useCounter] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  let IncrementCounter = () => useCounter(counter + 1);
  let DecrementCounter = () => useCounter(counter - 1);

  if (counter <= 0) {
    IncrementCounter();
  }
  return (
    <form onSubmit={handleSubmit}>
      <button className="btn-box btn-primary" onClick={DecrementCounter}>
        <i class="fas fa-minus"></i>
      </button>

      <CounterField counter={counter} />

      <button className="btn-box btn-primary" onClick={IncrementCounter}>
        <i class="fas fa-plus"></i>
      </button>
    </form>
  );
}
