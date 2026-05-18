import React from "react";
import Login from "./Components/Login";
import Profile from "./Components/Profil";
import UserContextProvider from "./Context/UserContextProvider";

function App() {
  return (
    <div>
      <UserContextProvider>
        <Login />
        <Profile />
      </UserContextProvider>
    </div>
  );
}

export default App;
