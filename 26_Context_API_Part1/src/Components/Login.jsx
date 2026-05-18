import React, { useContext, useState } from "react";
import "./Login.css";
import UserContext from "../Context/UserContext";

function Login() {
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevents page reload
    setUser({ username, email, password });
    alert("User data sent to Context!");
  };

  return (
    <div className="login-body">
      <div className="login-container">
        {/* Pass handleSubmit here */}
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Welcome Back</h2>
          <p>Please enter your details</p>

          <div className="input-group">
            <input
              type="text"
              value={username} // Fixed lowercase 'v'
              onChange={(e) => setUserName(e.target.value)}
              required
            />
            <label>UserName</label>
          </div>

          <div className="input-group">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <label>Email Address</label>
          </div>

          <div className="input-group">
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <label>Password</label>
          </div>

          <div className="options">
            <label>
              <input type="checkbox" /> Remember me
            </label>
            <a href="#forgot">Forgot Password?</a>
          </div>

          {/* Button triggers the form onSubmit */}
          <button type="submit" className="login-btn">
            Login
          </button>

          <div className="register-link">
            Don't have an account? <a href="#signup">Sign Up</a>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
