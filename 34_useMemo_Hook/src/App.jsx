import { useState, useMemo } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  function expensiveTask(num) {
    console.log("Inside Expensive Task.....!");
    for (let i = 0; i <= 100000000; i++) {
      return num * 2;
    }
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <h1>Learn useMemo Hook</h1>
      Count : {count}
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        placeholder="Enter Any Number"
      />
      Output is : {doubleValue}
    </>
  );
}

export default App;
