import React, { useState } from "react";

export const Text_Field = () => {
  const [text, setText] = useState("hello");

  function handleChange(e) {
    setText(e.target.value);
  }

  return (
    <div>
      <h1>Example 2 of 4: Text Field (string)</h1>
      <input type="text" value={text} onChange={handleChange} />
      <p> You Type : {text}</p>
      <button
        onClick={() => {
          setText("hello");
        }}
      >
        Rest
      </button>
    </div>
  );
};

export default Text_Field;
