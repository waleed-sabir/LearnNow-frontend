import React from "react";
import styles from "./CourseLayout.module.css";
import { Outlet } from "react-router-dom";

function CourseLayout() {
  return (
    <React.Fragment>
      <div className={styles["course-layout"]}>
        <h2>Choose from the best courses offered!</h2>
      </div>

      <main className={styles["outlet"]}>
        <Outlet />
      </main>
    </React.Fragment>
  );
}

export default CourseLayout;
