import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Images
import html from "../../../images/html.jpg";
import WebImg from "../../../images/WebDevImg.jpg";
import ReactImg from "../../../images/React.jpg";

// CSS Styles
import styles from "./style.module.css";

function WebDev() {
  return (
    <div className={styles["web-dev"]}>
      <SubCourse
        courseTitle={"React - The Complete Guide (Hooks, React Router, Redux)"}
        coursePhoto={ReactImg}
        courseTeacher={"Maximilian Schwarzmuller"}
        coursePrice={"$79.99"}
        courseRating={4.6}
        // courseCategory={"Web Development"}
      />

      <SubCourse
        courseTitle={"Build Responsive Real-World Websites with HTML & CSS"}
        coursePhoto={html}
        courseTeacher={"Jonas Schmedtmann"}
        coursePrice={"$79.99"}
        courseRating={4.7}
        // courseCategory={"Web Development"}
      />

      <SubCourse
        courseTitle={"The Complete Web Development BootCamp 2023"}
        coursePhoto={WebImg}
        courseTeacher={"Angela Yu"}
        coursePrice={"$79.99"}
        courseRating={4.7}
        // courseCategory={"Web Development"}
      />
    </div>
  );
}

export default WebDev;
