import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Images
import design1 from "../../../images/Design1.jpg";
import design2 from "../../../images/Design2.jpg";
import design3 from "../../../images/Desgin3.jpg";

// Styles
import styles from "./style.module.css";

function Design() {
  return (
    <div className={styles["design"]}>
      <SubCourse
        courseTitle={
          "User Experience (UX): The Ultimate Guide to Usability and UX"
        }
        coursePhoto={design3}
        courseTeacher={"David Travis"}
        coursePrice={"$79.99"}
        courseRating={4.6}
      />

      <SubCourse
        courseTitle={
          "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more"
        }
        coursePhoto={design1}
        courseTeacher={"Andrei Neagoie, Daniel Schifano"}
        coursePrice={"$79.99"}
        courseRating={4.5}
      />

      <SubCourse
        courseTitle={
          "Master Web Design in Photoshop: Complete UI/UX Masterclass"
        }
        coursePhoto={design2}
        courseTeacher={"Cristian Doru Barin"}
        coursePrice={"$79.99"}
        courseRating={4.3}
      />
    </div>
  );
}

export default Design;
