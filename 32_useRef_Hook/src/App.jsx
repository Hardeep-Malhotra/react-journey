import { useRef, useState, useEffect } from "react";

const App = () => {
  const [count, setCount] = useState(0);

  let val = useRef(0);

  let btnRef = useRef();

  const handleIncrement = () => {
    val.current = val.current + 1;
    console.log("CURRENT VALUE OF VAL IS : ", val.current);

    setCount(count + 1);
  };

  function colorChange() {
    btnRef.current.style.backgroundColor = "red";
  }
  useEffect(() => {
    console.log(" I run on Every Rendering....!");
  });

  return (
    <div>
      <br />
      <br />
      <br />
      <button ref={btnRef} onClick={handleIncrement}>
        Increment
      </button>
      <br />
      <br />
      <br />
      <button onClick={colorChange}>Change Color of Button 1</button>
      count : {count}
    </div>
  );
};

export default App;
