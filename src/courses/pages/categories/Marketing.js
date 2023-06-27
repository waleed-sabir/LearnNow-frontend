import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Styles
import styles from "./style.module.css";

// Courses Array
import { AllCourses } from "../../components/SubCourse";
import { Link } from "react-router-dom";

function Marketing() {
  return (
    <div className={styles["marketing"]}>
      {AllCourses.filter((c) => c.courseCategory === "marketing").map((mkt) => {
        return (
          <Link to={`/course/marketing/${mkt.courseId}`}>
          <SubCourse
            courseTitle={mkt.courseTitle}
            coursePhoto={mkt.coursePhoto}
            courseTeacher={mkt.courseTeacher}
            coursePrice={mkt.coursePrice}
            courseRating={mkt.courseRating}
            courseId={mkt.courseId}
            courseCateogry={mkt.courseCategory}
            key={mkt.courseId}
            />
            </Link>
        );
      })}
    </div>
  );
}

export default Marketing;
