import React, { useEffect, useState } from "react";

const PointerFollower = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("pointermove", handleMove);

    // Cleanup function: Ye memory leak se bachata hai
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);

  return (
    <div
      style={{
        position: "absolute",
        backgroundColor: "black",
        borderRadius: "50%", // Corrected: Border se borderRadius kiya
        opacity: 0.5,
        transform: `translate(${position.x}px, ${position.y}px)`,
        pointerEvents: "none",
        left: -20, // Corrected: String ki jagah number (pixels)
        top: -20, // Corrected: String ki jagah number (pixels)
        width: 40, // Corrected: String ki jagah number (pixels)
        height: 40, // Corrected: String ki jagah number (pixels)
      }}
    />
  );
};

export default PointerFollower;
