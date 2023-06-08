import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Images
import business1 from "../../../images/business1.jpg";
import business2 from "../../../images/business2.jpg";
import business3 from "../../../images/business3.jpg";

// Styles
import styles from "./style.module.css";

function Business() {
  return (
    <div className={styles["business"]}>
      <SubCourse
        courseTitle={"How to Budget and Forecast for Your Business"}
        coursePhoto={business3}
        courseTeacher={"Tim Berry"}
        coursePrice={"$64.99"}
        courseRating={4.5}
      />

      <SubCourse
        courseTitle={"A Comprehensive Guide to Project Management"}
        coursePhoto={business2}
        courseTeacher={"Kareem Ullah"}
        coursePrice={"$19.99"}
        courseRating={4.9}
      />

      <SubCourse
        courseTitle={"Sales and Persuasion Skills for Startups"}
        coursePhoto={business1}
        courseTeacher={"Len Smith, Sean Kaye"}
        coursePrice={"$69.99"}
        courseRating={4.3}
      />
    </div>
  );
}

export default Business;
