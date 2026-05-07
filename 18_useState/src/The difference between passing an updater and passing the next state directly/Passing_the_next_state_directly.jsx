import React, { useState } from "react";

export const Passing_the_next_state_directly = () => {
  const [age, setAge] = useState(42);

  function increment() {
    setAge((prev) => prev + 1);
  }
  return (
    <div>
      <h1>Example 2 of 2: Passing the next state directly</h1>

      <h3>{age}</h3>
      <button
        onClick={() => {
          increment();
          increment();
          increment();
        }}
      >
        +3
      </button>
      <button
        onClick={() => {
          increment();
        }}
      >
        +1
      </button>
    </div>
  );
};
