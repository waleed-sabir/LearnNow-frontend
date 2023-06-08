import React from "react";

// Components
import SubCourse from "../../components/SubCourse";

// Images
import marketing1 from "../../../images/marketing1.jpg";
import marketing2 from "../../../images/marketing2.jpg";
import marketing3 from "../../../images/marketing3.jpg";

// Styles
import styles from "./style.module.css";

function Marketing() {
  return (
    <div className={styles["marketing"]}>
      <SubCourse
        courseTitle={
          "Marketing Analytics: Stand Out by Becoming an Analytics Pro! 2023"
        }
        coursePhoto={marketing3}
        courseTeacher={"Joseph"}
        coursePrice={"$99.99"}
        courseRating={4.6}
      />

      <SubCourse
        courseTitle={
          "Business Branding With Personality: Build An Authentic Brand"
        }
        coursePhoto={marketing2}
        courseTeacher={"Steve Houraghan"}
        coursePrice={"$74.99"}
        courseRating={4.7}
      />

      <SubCourse
        courseTitle={
          "Social Media Marketing Agency : Digital Marketing + Business"
        }
        coursePhoto={marketing1}
        courseTeacher={"Pouya Eti"}
        coursePrice={"$89.99"}
        courseRating={4.4}
      />
    </div>
  );
}

export default Marketing;
