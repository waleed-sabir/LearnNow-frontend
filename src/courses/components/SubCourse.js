import React from "react";
import styles from "./SubCourse.module.css";
// import { useParams } from "react-router-dom";

// Icons
import { BsPersonVideo } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsTag } from "react-icons/bs";

function SubCourse({
  courseTitle,
  coursePhoto,
  courseTeacher,
  coursePrice,
  courseRating,
}) {
  // const { title } = useParams();
  // console.log(title);
  return (
    <div className={styles["sub-course"]}>
      {/* <h2>{title} Courses</h2> */}
      <div className={styles["course-card"]}>
        <img src={coursePhoto} className={styles["course-photo"]} />
        <div className={styles["sub-course-text"]}>
          <p className={styles["course-title"]}>{courseTitle}</p>
          <p className={styles["course-teacher"]}>
            {<BsPersonVideo />}
            {courseTeacher}
          </p>
          <p className={styles["course-rating"]}>
            {<BsStar />}
            {courseRating}
          </p>
          <p className={styles["course-price"]}>
            {<BsTag />} {coursePrice}
          </p>
        </div>
      </div>
    </div>
  );
}

export default SubCourse;
