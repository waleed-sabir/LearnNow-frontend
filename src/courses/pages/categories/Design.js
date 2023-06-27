import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Styles
import styles from "./style.module.css";

// Courses Array
import { AllCourses } from "../../components/SubCourse";
import { Link } from "react-router-dom";

function Design() {
  return (
    <div className={styles["design"]}>
      {AllCourses.filter((c) => c.courseCategory === "design").map((dsg) => {
        return (
          <Link to={`/course/design/${dsg.courseId}`}>
            <SubCourse
              courseTitle={dsg.courseTitle}
              coursePhoto={dsg.coursePhoto}
              courseTeacher={dsg.courseTeacher}
              coursePrice={dsg.coursePrice}
              courseRating={dsg.courseRating}
              courseId={dsg.courseId}
              courseCateogry={dsg.courseCategory}
              key={dsg.courseId}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Design;
