import { useState } from 'react'


function Counter() {
  const [count, setCount] = useState(0)


  const increment = () => {
    setCount(count + 1);
  }
  const decrement = () => {
    setCount(count - 1);
  }
  const rest = () =>{
    setCount(0);
  }
  return (
    <>
         <div>
          <h1>Counter App</h1>
              <h1 style={{color: count > 0 ? "green" : count < 0 ? "red" : "black" }}>{count}</h1> 
             <button onClick={increment}>Increment</button>
             <button onClick={rest}>Rest</button>
             <button onClick={decrement}>Decrement</button>
         </div>
    </>
  )
}

export default Counter;
