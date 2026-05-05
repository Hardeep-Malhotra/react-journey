import React, { useState } from "react";

export default function Form() {
  const [name, setName] = useState("Jhon Doe");
  const [age, setAge] = useState(30);

  return (
    <div>
      <h1>Example 4 of 4: Form (two variables) </h1>

      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <button
        onClick={() => {
          setAge(age + 1);
        }}
      >
        IncreaseAge
      </button>

      <p>
        Hello , {name} , Your are {age} years old.{" "}
      </p>
    </div>
  );
}
