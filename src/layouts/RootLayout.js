import React from "react";
import { Outlet, NavLink, Link } from "react-router-dom";
import styles from "./RootLayout.module.css";

function RootLayout() {
  return (
    <div className={styles["root-layout"]}>
      <header>
        <nav>
          <Link to="/" className={styles["logo"]}>
            <h1>LearnNow</h1>
          </Link>
          <div className={styles["nav-links"]}>
            <NavLink to="login" className={styles["login"]}>
              {/* <button>Login</button> */}Login
            </NavLink>
            <NavLink to="signup" className={styles["signup"]}>
              {/* <button>Sign up</button> */}Sign up
            </NavLink>
            <NavLink to="signup" className={styles["cta"]}>
              <button>Get Started</button>
            </NavLink>
          </div>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
