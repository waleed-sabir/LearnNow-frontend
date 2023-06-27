import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Styles
import styles from "./style.module.css";

// Courses Array
import { AllCourses } from "../../components/SubCourse";
import { Link } from "react-router-dom";

function Business() {
  return (
    <div className={styles["business"]}>
      {AllCourses.filter((c) => c.courseCategory === "business").map((bs) => {
        return (
          <Link to={`/course/business/${bs.courseId}`}>
            <SubCourse
              courseTitle={bs.courseTitle}
              coursePhoto={bs.coursePhoto}
              courseTeacher={bs.courseTeacher}
              coursePrice={bs.coursePrice}
              courseRating={bs.courseRating}
              courseId={bs.courseId}
              courseCateogry={bs.courseCategory}
              key={bs.courseId}
            />
          </Link>
        );
      })}
    </div>
  );
}

export default Business;
