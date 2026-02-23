import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [showbtn, setShowbtn] = useState(false);

  // This is exampl of rendring list in react. The todo array contains a list of tasks, each with an id, Day, and Worke property. We use the map function to iterate over the todo array and render a div for each item. Each div contains the Day and Worke information for that item. The key prop is used to help React identify which items have changed, are added, or are removed, which improves performance when rendering lists.
  const todo = [
    {
      id: "a1",
      Day: "1",
      Worke: "Learn React",
    },
    {
      id: "a2",
      Day: "2",
      Worke: "Learn JavaScript",
    },
    {
      id: "a3",
      Day: "3",
      Worke: "Learn HTML",
    },
    {
      id: "a4",
      Day: "4",
      Worke: "Learn CSS",
    },
    {
      id: "a5",
      Day: "5",
      Worke: "Learn Node.js",
    },
  ];

  return (
    <>
      <h1>Conditional Renedring</h1>
      {/* This is a simple example of conditional rendering in React. The button below will change its text based on the value of the showbtn state variable. You can toggle the value of showbtn using the buttons provided. */}

      <div className="card">
        {/* This conditional rendering is done using the ternary operator. The syntax for the ternary operator is: condition ? expressionIfTrue : expressionIfFalse. In this case, if showbtn is true, it will render a button with the text "Button is true". If showbtn is false, it will render a button with the text "Button is false". */}
        {showbtn ? (
          <button>Button is true</button>
        ) : (
          <button>Button is false</button>
        )}{" "}
        <br></br>
        <br></br>
        {/* This function is used to toggle the value of showbtn between true and false. When you click on the "Button False" button, it sets showbtn to false, and when you click on the "Button True" button, it sets showbtn to true. The text of the button will change accordingly based on the value of showbtn. */}
        <button onClick={() => setShowbtn(false)}>Button False</button>
        <button onClick={() => setShowbtn(true)}>Button True</button>
      </div>

      <h1>My Todo List</h1>
      <div className="card">
        {/* ye ak map function h jo todo array ke har item ko iterate karta h aur
        har item ke liye ek div render karta h jisme Day aur Worke ki
        information hoti h. Key prop ka use React ko help karta h identify karne
        me ki kaunse items change hue hain, added hue hain, ya removed hue hain,
        jo list rendering ke performance ko improve karta h. */}
        {todo.map((item) => {
          return (
            <div key={item.id}>
              <h2>Day :{item.Day}</h2>
              <h2>Work :{item.Worke}</h2>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
