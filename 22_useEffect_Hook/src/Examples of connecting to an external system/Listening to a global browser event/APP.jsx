import React, { useEffect } from "react";

export const APP = () => {
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  useEffect(() => {
    function handleMove(e) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("pointermove", handleMove);
    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, []);
  return (
    <div>
      <div
        style={{
          position: "absolute",
          backgroundColor: "Black",
          border: "50%",
          opacity: "0.5",
          transform: `translate(${position.x}px,${position.y}px)`,
          pointerEvents: "none",
          left: "-20",
          top: "-20",
          width: "40",
          height: "40",
        }}
      ></div>
    </div>
  );
};
