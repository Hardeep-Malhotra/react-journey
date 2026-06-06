import { useState, useCallback } from "react";
import ChildCompoenets from "./componenets/ChildCompoenets";

const App = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    setTodos((prev) => [...prev, `New Todo ${prev.length + 1}`]);
  }, []);
  return (
    <div>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Parent Component</h1>
        <h2>Count: {count}</h2>

        <button onClick={incrementCount} style={{ marginRight: "10px" }}>
          Increment Count
        </button>

        <hr />
        <ChildCompoenets todos={todos} addTodos={addTodo} />
      </div>
    </div>
  );
};

export default App;
