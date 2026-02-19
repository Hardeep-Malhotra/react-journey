import React from 'react'
import { useState } from 'react'

 function Toggle() {

    const [darkstate, setDarkState] = useState(false);


    const toggleDarkMode = () =>{
        setDarkState(!darkstate);
    }
  return (
    <>
    <div style={{
        backgroundColor: darkstate ? "#222" : "#fff",
        color: darkstate ? "#fff" : "#000",
        height: "100vh",
        textAlign: "center",
        paddingTop: "50px",
        transition: "0.3s"
      }}>
      
      
      <h1>Toggle Dark Mode</h1>
      <button onClick={toggleDarkMode}>
        {darkstate ? "Switch to Light Mode" : "Switch to Dark Mode"}
      </button>
      </div>
    </>
  )
}

export default Toggle   ;