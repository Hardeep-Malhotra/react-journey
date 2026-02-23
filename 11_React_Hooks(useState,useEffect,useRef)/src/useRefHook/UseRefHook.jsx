import { useEffect, useState, useRef } from "react";

function UseRefHook() {
  const [count, setCount] = useState(0);

  // Case 1 - To store the mutable value which does not cause re-render when it changes , In React we can use useRef hook to store the mutable value which does not cause re-render when it changes and we can access the mutable value by using current property of useRef hook
  let a = useRef(0);
  useEffect(() => {
    a.current = a.current + 1;
    console.log("The Value of a is: ", a.current);
  });

  // Case 2 - To access the DOM element directly without using document.getElementById or querySelector , In React we can directly access the DOM element  by using useRef hook and we can manipulate the DOM element directly without using document.getElementById or querySelector
  let btnRef = useRef();
  useEffect(() => {
    console.log(btnRef.current);
    btnRef.current.style.backgroundColor = "blue";
  });

  // Case 3 - useRef is used here to keep track of how many times the button was clicked. Updating a.current does NOT trigger a re-render. 
  function handleClick() {
    a.current = a.current + 1;
    alert("User Clicked the button " + a.current + " times");
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>React Counter App 🚀</h1>
      <h2 ref={btnRef}>{count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button
        onClick={() => setCount(count - 1)}
        style={{ marginLeft: "10px" }}
      >
        Decrease
      </button>
      <button onClick={() => setCount(0)} style={{ marginLeft: "10px" }}>
        Reset
      </button>
      {/* // It's a button which will hide the h2 when we click on it */}
      <button
        onClick={() => {
          btnRef.current.style.display = "none";
        }}
      >
        Hide Me
      </button>
      {/* // It's a button which will unhide the h2 when we click on it */}
      <button
        onClick={() => {
          btnRef.current.style.display = "block";
        }}
      >
        UnnHide Me
      </button>{" "}
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <button onClick={handleClick}>
          Click me to see how many times you clicked
        </button>
      </div>
    </div>
  );
}

export default UseRefHook;
