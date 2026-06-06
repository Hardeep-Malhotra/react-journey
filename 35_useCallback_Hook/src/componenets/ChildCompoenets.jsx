import React from "react";

const ChildCompoenets = ({ todos, addTodos }) => {
  console.log("Child Component  is re-render...!");

  return (
    <div>
      <div
        style={{
          border: "2px dashed #999",
          padding: "15px",
          marginTop: "10px",
        }}
      >
        <h3>Child Component (Todo List)</h3>
        <button onClick={addTodos}>Add Todo</button>

        <ul>
          {todos.map((todo, index) => (
            <li key={index}>{todo}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default React.memo(ChildCompoenets);
