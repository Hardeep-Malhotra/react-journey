import React, { useState } from "react";

export const Passing_the_updater_function = () => {
  const [age, setAge] = useState(42);

  function increment() {
    setAge(age + 1);
  }
  return (
    <div>
      <h1>Example 1 of 2: Passing the updater function</h1>

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
