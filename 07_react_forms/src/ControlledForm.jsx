import React, { useState } from "react";

function ControlledForm() {
  const [inputValue, setInputValue] = useState("");

  return (
    <>
      <form>
        <label>Enter Text </label>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        ></input>
      </form>
      <br />

      <div>
        Enter Value : {inputValue}
      </div>
    </>
  );
}


export default ControlledForm;