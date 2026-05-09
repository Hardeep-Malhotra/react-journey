import React from "react";
// 1. Fixed path for SERVER (added the middle folder "Connecting to a chat server")
import SERVER from "./Examples of connecting to an external system/Connecting to a chat server/SERVER.jsx";

// 2. Fixed path for APP (added .jsx extension)
import APP_EVENT from "./Examples of connecting to an external system/Listening to a global browser event/PointerFollower.jsx";

export const App = () => {
  return (
    <div>
      <SERVER />
      <hr />
      <APP_EVENT />
    </div>
  );
};

export default App;
