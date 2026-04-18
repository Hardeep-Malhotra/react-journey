import React from "react";

export default function ActionButton({ label, color }) {
  return (
    <div>
      <button
        style={{
          backgroundColor: color,
          color: "white",
          border: "none",
          padding: "10px",
          borderRadius: "5px",
          cursor: "pointer",
        }}
      >
        {label}
      </button>
    </div>
  );
}
