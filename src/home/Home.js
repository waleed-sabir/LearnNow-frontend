import React from "react";
import { NavLink } from "react-router-dom";

// CSS Styles
import styles from "./Home.module.css";

// Images
import heroImg from "../images/heroImg.jpg";

function Home() {
  return (
    <React.Fragment>
      <header>
        <nav>
          <h1>LearnNow</h1>
          <NavLink to="/">Get Started</NavLink>
        </nav>
      </header>

      <main>
        <div className={styles.hero}>
          <div className={styles["hero-text"]}>
            <h2>
              Curious minds,
              <br />
              ready to explore?
            </h2>
            <p>
              Join a vibrant community of learners and embark on a <br />
              transformative journery of discovery with our user-friendly <br />
              interface high-quality educational resources .
            </p>
            <NavLink to="/">Get Started</NavLink>
          </div>
          <div className={styles["hero-image"]}>
            <img src={heroImg} alt="A girl using a laptop" />
          </div>
        </div>
      </main>
    </React.Fragment>
  );
}

export default Home;
