import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

// CSS Styles
import styles from "./Home.module.css";

// Images
import heroImg from "../images/heroImg.jpg";

// Components
import Course from "../courses/components/Course";

// Icons
import { BsCodeSlash } from "react-icons/bs";
import { BsImages } from "react-icons/bs";
import { BsCamera } from "react-icons/bs";
import { BsBag } from "react-icons/bs";
import { BsGraphUpArrow } from "react-icons/bs";

function Home() {
  return (
    <React.Fragment>
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

        <div className={styles["courses-grid"]}>
          <p className={styles["intro-tile"]}>
            Check out our most popular courses!{" "}
          </p>
          <Link to="courses/web-development">
            <Course
              icon={<BsCodeSlash />}
              title={"Web Development"}
              description={
                "Learn the latest web development techniques to create stunning website designs and captivate your audience."
              }
            />
          </Link>

          <Link to="courses/design">
            <Course
              icon={<BsImages />}
              title={"Design"}
              description={
                "Unleash your creativity to design beautiful, usable interfaces to help shape the future of how the web looks."
              }
            />
          </Link>

          <Link to="courses/photography">
            <Course
              icon={<BsCamera />}
              title={"Photography"}
              description={
                "Explore critical fundamentals like lighting, composition, and focus to capture exceptional photos."
              }
            />
          </Link>

          <Link to="courses/marketing">
            <Course
              icon={<BsGraphUpArrow />}
              title={"Marketing"}
              description={
                "All you need to know to boost your marketing skills and career prospects in the digital age."
              }
            />
          </Link>

          <Link to="courses/business">
            <Course
              icon={<BsBag />}
              title={"Business"}
              description={
                "Learn business fundamentals and best pratices and grow your business knowledge through online learning."
              }
            />
          </Link>
        </div>
        <Outlet />
      </main>

      <footer className={styles.footer}>
        <h2>LearnNow</h2>
        <p>
          <span>&copy;</span> 2023 LearnNow. All rights reserved.
        </p>
      </footer>
    </React.Fragment>
  );
}

export default Home;
