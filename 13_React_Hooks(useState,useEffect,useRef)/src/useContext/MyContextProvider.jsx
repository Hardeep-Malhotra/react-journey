import React, { createContext, useContext, useState } from "react";

const MyContext = createContext();

function MyContextProvider() {
  const [value, setValue] = useState("Hello World");

  const changeValue = () => {
    setValue("Hello React Context API");
  };

  const restValue = () => {
    setValue("Hello World");
  };

  return (
    <MyContext.Provider value={{ value, changeValue, restValue }}>
      <ChildComponent />
    </MyContext.Provider>
  );
}

function ChildComponent() {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <h1>{contextValue.value}</h1>
      <button onClick={contextValue.changeValue}>
        Click me to change value
      </button>
      <button onClick={contextValue.restValue}>
        Click me to reset value
      </button>
    </div>
  );
}

export default MyContextProvider;
