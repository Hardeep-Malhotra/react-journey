import React from "react";

function FormConsole() {
  const onInputchage = (event) => {
    console.log(event.target.value);
  };

  return (
    <form>
      <label>Enter any text and open your console : </label>
      <input type="text" onChange={onInputchage} />
    </form>
  );
}

export default FormConsole;
