import React, { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  function incrementCount() {
    setCount(count + 1);
  }
  function decrementCount() {
    setCount(count - 1);
  }
  function restCount() {
    setCount(0);
  }
  return (
    <div style={{ gap: "10px", alignItems: "center" }}>
      <h1>Example 1 of 4: Counter (number)</h1>
      <h1 style={{ marginLeft: "10rem" }}>{count}</h1>
      <div
        style={{
          margin: "9rem",
          padding: "10px",
          display: "flex",
          gap: "10px",
        }}
      >
        <button onClick={incrementCount}>+</button>
        <button onClick={decrementCount}>-</button>
        <button onClick={restCount}>0</button>
      </div>
    </div>
  );
};

export default Counter;
