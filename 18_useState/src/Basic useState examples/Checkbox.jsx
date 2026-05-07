import React, { useState } from "react";

export const Checkbox = () => {
  const [isLike, setLike] = useState(false);

  function handleChange(e) {
    setLike(e.target.checked);
  }
  return (
    <div>
      <h2>Example 3 of 4: Checkbox (boolean) </h2>

      <label>
        <input type="checkbox" checked={isLike} onChange={handleChange} />
        Like
      </label>

      <p>You {isLike ? "Like" : "Don't Like"}</p>
    </div>
  );
};
