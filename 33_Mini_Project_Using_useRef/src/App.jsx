import { useRef, useState } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(0);

  let timeRef = useRef(null);

  const startTimer = () => {
    timeRef.current = setInterval(() => {
      setTime((time) => time + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timeRef.current);
    timeRef.current = null;
  };

  const restTimer = () => {
    stopTimer();
    setTime(0);
  };
  return (
    <div>
      <h1> Timer Machine : {time} </h1>
      <button onClick={startTimer}>Start Timer</button>
      <br /> <br />
      <button onClick={stopTimer}>Stop Timer</button>
      <br /> <br />
      <button onClick={restTimer}>Rest Timer</button>
    </div>
  );
}

export default App;
