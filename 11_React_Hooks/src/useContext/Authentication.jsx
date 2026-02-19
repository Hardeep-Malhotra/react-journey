import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext();

function Authentication({ children }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
}

function Login() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);

  return (
    <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
      {isLoggedIn ? "Logout" : "Login"}
    </button>
  );
}

export { Authentication, Login };
