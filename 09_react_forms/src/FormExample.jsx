import React, { useState } from "react";

function FormExample() {
  const [name, setName] = useState("");

  const handlesubmit = (e) => {
    e.preventDefault();

    alert(`hello ${name}`);
  };

  return (
    <form onSubmit={handlesubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter your name"
      />

      <button type="submit">submit</button>
    </form>
  );
}

export default FormExample;
