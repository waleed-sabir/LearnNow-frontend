import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// CSS Styles
import styles from "./Login.module.css";

// Images
import login from "../images/login.jpg";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className={styles["login"]}>
      <div className="login-image">
        <img src={login} alt="A girl using a tablet" />
      </div>
      <form className="login-form">
        <h2>Login</h2>
        <div className={styles["form-elements"]}>
          <label>Email{"    "}</label>
          <input type="email" value={email} onChange={handleEmail} />

          <label>Password{"    "}</label>
          <input type="text" value={password} onChange={handlePassword} />
          <NavLink to="/">
            <button className="login-btn">Login</button>
          </NavLink>
          <p>
            Don't have an account already?
            <NavLink to="/signup" className={styles["login"]}>
              Sign up
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
