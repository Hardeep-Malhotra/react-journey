import { useState, useEffect } from "react";

function UseEffectHook() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState(0);

  // Case 1 : useEffect without dependency array (runs after every render)
  useEffect(() => {
    alert(
      "I am useEffect Hook . I am called after every render of the component . I can be used to perform side effects in your component such as fetching data from APIs , updating the DOM, or setting up subscriptions.  I run after every render of the component by default, but you can control when I run by providing a dependency array as the second argument.  If you provide an empty array, I will only run once when the component is mounted.  If you provide an array with specific dependencies, I will only run when those dependencies change.  So, if you want to perform some side effect after every render of the component, I am your go-to hook!      🚀",
    );
  });

  // Case 2 : useEffect with empty dependency array (runs only once when component is mounted)
  useEffect(() => {
    alert(
      "Welcome to React Hooks!  I am useEffect Hook. I run only once when  the  component is mounted . I am perfect for fetching data from APIs , setting up subscriptions or timers, and performing any setup that needs to happen once when the component is first rendered.  I will not run again unless the component is unmounted and remounted.  So, if you want to run some code only once when the component is first rendered, I am your best friend!      🚀",
    );
  }, []);

  // Case 3 : useEffect with dependency array (runs when specified dependencies change)
  useEffect(() => {
    alert("Count has been updated! Current count : " + count);
    setBgColor(bgColor + 1);
  }, [count]);

  // Case 4 : useEffect with cleanup function (runs when component is unmounted)
  useEffect(() => {
    alert(
      "This is use case of  Compelete useEFfect Hook   when component is unmounted  . I am perfect for cleaning up subscriptions, timers, or any other side effects that need to be cleaned up when the component is unmounted.  I will run when the component is unmounted, allowing you to perform any necessary cleanup tasks.  So, if you want to clean up side effects when the component is unmounted, I am your go-to hook!          🚀",
    );

    return () => {
      alert("Component is unmounted! Cleaning up side effects...");
    };
  });

  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: bgColor,
      }}
    >
      <h1>
        I am a React Component with useEffect Hook . Now my color Count is{" "}
        {count}
      </h1>
      <h1>React Counter App 🚀</h1>

      <h2>{count}</h2>

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
    </div>
  );
}

export default UseEffectHook;
