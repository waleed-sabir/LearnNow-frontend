import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Styles
import styles from "./style.module.css";

// Courses Array
import { AllCourses } from "../../components/SubCourse";
import { Link } from "react-router-dom";

function Photography() {
  return (
    <div className={styles["photography"]}>
      {AllCourses.filter((c) => c.courseCategory === "photography").map(
        (ph) => {
          return (
            <Link to={`/course/photography/${ph.courseId}`}>
              <SubCourse
                courseTitle={ph.courseTitle}
                coursePhoto={ph.coursePhoto}
                courseTeacher={ph.courseTeacher}
                coursePrice={ph.coursePrice}
                courseRating={ph.courseRating}
                courseId={ph.courseId}
                courseCateogry={ph.courseCategory}
                key={ph.courseId}
              />
            </Link>
          );
        }
      )}
    </div>
  );
}

export default Photography;
