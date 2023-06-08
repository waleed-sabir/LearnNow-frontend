import styles from "./Course.module.css";

import React from "react";

const Course = ({ icon, title, description }) => {
  return (
    <div className={styles["course-tile"]}>
      <div className={styles["course-icon"]}>{icon}</div>
      <h2 className={styles["course-title"]}>{title} </h2>
      <p className={styles["course-description"]}>{description}</p>
    </div>
  );
};

export default Course;
