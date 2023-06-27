import React from "react";
import { Link, useParams } from "react-router-dom";

// CSS Styles
import styles from "./SubCourseDetails.module.css";

// Icons
import { BsClock } from "react-icons/bs";
import { BsCoin } from "react-icons/bs";
import { BsPersonVideo3 } from "react-icons/bs";
// Courses Array
import { AllCourses } from "../components/SubCourse";

function SubCourseDetails() {
  const { id } = useParams();
  const desiredCourse = AllCourses.filter((course) => course.courseId === id);
  console.log(id);

  return (
    <div className={styles["sub-course-details"]}>
      <div className={styles["sub-course-details-container"]}>
        <div className={styles["sub-course-details-text"]}>
          <h2>{desiredCourse[0].courseTitle}</h2>
          <p>{desiredCourse[0].courseDescription}</p>
          <h3>
            Created by :{" "}
            <span className={styles["teacher"]}>
              {desiredCourse[0].courseTeacher}
            </span>
          </h3>
          <div className={styles["sub-course-details-buttons"]}>
            <Link to="/">
              <button className="add-to-cart">Add to cart</button>
            </Link>
            <Link to="/">
              <button className="buy-now">Buy now</button>
            </Link>
          </div>
        </div>
        <div className={styles["sub-course-details-image"]}>
          <img src={desiredCourse[0].coursePhoto} alt="" />
        </div>
      </div>

      <div className={styles["sub-course-details-info"]}>
        <p className={styles["duration"]}>
          <BsClock className={styles["icon"]} /> {desiredCourse[0].courseHours}{" "}
          hours
        </p>
        <p className={styles["study-mode"]}>
          <BsPersonVideo3 className={styles["icon"]} /> Self-Paced
        </p>
        <p className={styles["price"]}>
          <BsCoin className={styles["icon"]} /> {desiredCourse[0].coursePrice}
        </p>
      </div>
    </div>
  );
}

export default SubCourseDetails;
