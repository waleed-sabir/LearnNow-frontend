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
          <NavLink to="/" className={styles["cta"]}>
            <button>Get Started</button>
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
