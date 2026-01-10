import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./SignIn.css";


export default function SignIn() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    // Hardcoded credentials
    if (username === "admin" && password === "admin123") {
      setError("");
      navigate("/dashboard");
    } else {
      setError("Invalid username or password");
    }
  };

  return (
    <div className="signin-page">
      <section>
        {Array.from({ length: 220 }).map((_, index) => (
          <span key={index}></span>
        ))}

        <div className="signin">
          <div className="signin-content">
            <h2>Sign In</h2>

            <form className="form" onSubmit={handleLogin}>
              <div className="inputBox">
                <input
                  type="text"
                  required
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <i>Username</i>
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <i>Password</i>
              </div>

              {error && (
                <p style={{ color: "red", marginBottom: "10px" }}>
                  {error}
                </p>
              )}

              <div className="links">
                <a href="#">Forgot Password</a>
                <NavLink to="/signup">Signup</NavLink>
              </div>

              <div className="inputBox">
                <input type="submit" value="Login" />
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
