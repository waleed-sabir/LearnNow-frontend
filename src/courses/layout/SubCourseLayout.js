import React from "react";
import { Outlet } from "react-router-dom";

// CSS Styles
import styles from "./SubCourseLayout.module.css";

function SubCourseLayout() {
  return (
    <>
      {/* <h2>SubCourseLayout</h2>; */}
      <main className={styles["sub-course-layout"]}>
        <Outlet />
      </main>
    </>
  );
}

export default SubCourseLayout;
