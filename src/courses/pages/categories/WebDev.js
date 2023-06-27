import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// CSS Styles
import styles from "./style.module.css";

// Courses Array
import { AllCourses } from "../../components/SubCourse";
import { Link } from "react-router-dom";

function WebDev() {
  return (
    <div className={styles["web-dev"]}>
      {AllCourses.filter((c) => c.courseCategory === "web development").map(
        (webdevp) => {
          return (
            <Link to={`/course/web-development/${webdevp.courseId}`}>
              <SubCourse
                courseTitle={webdevp.courseTitle}
                coursePhoto={webdevp.coursePhoto}
                courseTeacher={webdevp.courseTeacher}
                coursePrice={webdevp.coursePrice}
                courseRating={webdevp.courseRating}
                courseId={webdevp.courseId}
                courseCateogry={webdevp.courseCategory}
                key={webdevp.courseId}
              />
            </Link>
          );
        }
      )}
    </div>
  );
}

export default WebDev;
