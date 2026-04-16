import { useState } from "react";
import Card from "./components/card";

function App() {
  const [count, setCount] = useState(0);
  


  return (
    <>
      <Card username={"Hardeep"} dsecription={"I am programmer"} btnText={"click me"}/>
      <Card  username={"Harsh dhiman"} dsecription={"I am developper"} btnText={"contact"}/>
    </>
  );
}

export default App;
