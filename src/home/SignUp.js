import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// CSS Styles
import styles from "./SignUp.module.css";

// Images
import signup from "../images/sign.jpg";

function SignUp() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleFullName = (e) => {
    setFullName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div className={styles["sign-up"]}>
      <div className="sign-up-image">
        <img src={signup} alt="A girl using a tablet" />
      </div>
      <form className="sign-up-form">
        <h2>Sign up</h2>
        <div className={styles["form-elements"]}>
          <label>Full Name{"    "}</label>
          <input type="text" value={fullName} onChange={handleFullName} />

          <label>Email{"    "}</label>
          <input type="email" value={email} onChange={handleEmail} />

          <label>Password{"    "}</label>
          <input type="text" value={password} onChange={handlePassword} />
          <NavLink to="/">
            <button className="sign-up-btn">Sign up</button>
          </NavLink>
          <p>
            Already have an account?{" "}
            <NavLink to="/login" className={styles["login"]}>
              Login
            </NavLink>
          </p>
        </div>
      </form>
    </div>
  );
}

export default SignUp;
