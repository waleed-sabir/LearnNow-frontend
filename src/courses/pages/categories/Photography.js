import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Images
import photography1 from "../../../images/Photography1.jpg";
import photography2 from "../../../images/Photography2.jpg";
import photography3 from "../../../images/Photography3.jpg";

// Styles
import styles from "./style.module.css";

function Photography() {
  return (
    <div className={styles["photography"]}>
      <SubCourse
        courseTitle={"Photography Masterclass: A Complete Guide to Photography"}
        coursePhoto={photography3}
        courseTeacher={"Phil Ebiner, Willian Carnahan"}
        coursePrice={"$89.99"}
        courseRating={4.8}
      />

      <SubCourse
        courseTitle={
          "Basic Food Photography: Capturing Delicious Food in the Kitchen"
        }
        coursePhoto={photography1}
        courseTeacher={"Andrew Olson"}
        coursePrice={"$69.99"}
        courseRating={4.6}
      />

      <SubCourse
        courseTitle={
          "3D Virtual Tour and Real Estate Photography Business Course - Limited Edition"
        }
        coursePhoto={photography2}
        courseTeacher={"David Edgerton"}
        coursePrice={"$44.99"}
        courseRating={4.7}
      />
    </div>
  );
}

export default Photography;
