import React, { useState } from "react";

function SubmitControlledForm() {
  const [inputValue, setInputValue] = useState("");

  const onFormSubmit = (event) => {
    event.preventDefault();
    setInputValue("Hello World!");
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <label>Enter Text: </label>

        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>

      <br />

      <div>Entered Value: {inputValue}</div>
    </>
  );
}

export default SubmitControlledForm;
