import React from "react";
import styles from "./SubCourse.module.css";

// Icons
import { BsPersonVideo } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsTag } from "react-icons/bs";

// Images

/* Web Development */
import html from "../../images/html.jpg";
import ReactImg from "../../images/React.jpg";
import WebImg from "../../images/WebDevImg.jpg";

/* Design */
import Design1 from "../../images/Design1.jpg";
import Design2 from "../../images/Design2.jpg";
import Design3 from "../../images/Desgin3.jpg";

/* Photography */
import Photography1 from "../../images/Photography1.jpg";
import Photography2 from "../../images/Photography2.jpg";
import Photography3 from "../../images/Photography3.jpg";

/* Marketing */
import marketing1 from "../../images/marketing1.jpg";
import marketing2 from "../../images/marketing2.jpg";
import marketing3 from "../../images/marketing3.jpg";

/* Business */
import business1 from "../../images/business1.jpg";
import business2 from "../../images/business2.jpg";
import business3 from "../../images/business3.jpg";

// All Courses Array

export let AllCourses = [
  {
    courseTitle: "React - The Complete Guide (Hooks, React Router, Redux)",
    coursePhoto: ReactImg,
    courseTeacher: "Maximilian Schwarmuller",
    coursePrice: "$79.99",
    courseRating: 4.6,
    courseId: "wd1",
    courseCategory: "web development",
    courseHours: 48,
    courseDescription:
      "Dive in and learn React.js from scratch! Learn Reactjs, Hooks, Redux, React Router 6.4 Next.js and way more!",
  },

  {
    courseTitle: "Build Responsive Real-World Websites with HTML & CSS",
    coursePhoto: html,
    courseTeacher: "Jonas Schmedtmann",
    coursePrice: "$79.99",
    courseRating: 4.7,
    courseId: "wd2",
    courseCategory: "web development",
    courseHours: 37.5,
    courseDescription:
      "Learn modern HTML5, CSS3 and web design by building a stunning website for your portfolio! Includes flexbox and CSS Grid",
  },

  {
    courseTitle: "The Complete Web Development BootCamp 2023",
    coursePhoto: WebImg,
    courseTeacher: "Angela Yu",
    coursePrice: "$79.99",
    courseRating: 4.7,
    courseId: "wd3",
    courseCategory: "web development",
    courseHours: 65.5,
    courseDescription:
      "Become a Full-Stack Web Developer with just ONE course. HTML, CSS, Javascript, Node, React, MongoDB, Web3 and DApps",
  },

  {
    courseTitle: "User Experience (UX): The Ultimate Guide to Usability and UX",
    coursePhoto: Design3,
    courseTeacher: "David Travis",
    coursePrice: "$79.99",
    courseRating: 4.6,
    courseId: "d1",
    courseCategory: "design",
    courseHours: 12,
    courseDescription:
      "Get a job in UX and build your user research and UX design skills with this hands-on user experience training course.",
  },

  {
    courseTitle: "Complete Web & Mobile Designer in 2023: UI/UX, Figma, +more",
    coursePhoto: Design1,
    courseTeacher: "Andrei Neagoie, Daniel Schifano",
    coursePrice: "$79.99",
    courseRating: 4.5,
    courseId: "d2",
    courseCategory: "design",
    courseHours: 27.5,
    courseDescription:
      "Become a Designer in 2023! Master Mobile and Web Design, User Interface + User Experience (UI/UX Design), HTML, and CSS",
  },

  {
    courseTitle: "Master Web Design in Photoshop: Complete UI/UX Masterclass",
    coursePhoto: Design2,
    courseTeacher: "Cristian Doru Barin",
    coursePrice: "$79.99",
    courseRating: 4.3,
    courseId: "d3",
    courseCategory: "design",
    courseHours: 17.5,
    courseDescription:
      "Learn UI/UX and how to create stunning website | Everything you need to know about web design in 2023 | All in Photoshop",
  },

  {
    courseTitle:
      "Basic Food Photography: Capturing Delicious Food in the Kitchen",
    coursePhoto: Photography1,
    courseTeacher: "Andrew Olson",
    coursePrice: "$69.99",
    courseRating: 4.6,
    courseId: "ph1",
    courseCategory: "photography",
    courseHours: 5.5,
    courseDescription: "Learn how to take delicious food photos from scratch",
  },

  {
    courseTitle: "Photography Masterclass: A Complete Guide to Photography",
    coursePhoto: Photography3,
    courseTeacher: "Phil Ebiner, Willian Carnahan",
    coursePrice: "$89.99",
    courseRating: 4.8,
    courseId: "ph2",
    courseCategory: "photography",
    courseHours: 27,
    courseDescription:
      "The Best Online Professional Photography Class: How to Take Amazing Photos for Beginners & Advanced Photographers",
  },

  {
    courseTitle:
      "3D Virtual Tour and Real Estate Photography Business Course - Limited Edition",
    coursePhoto: Photography2,
    courseTeacher: "David Edgerton",
    coursePrice: "$44.99",
    courseRating: 4.7,
    courseId: "ph3",
    courseCategory: "photography",
    courseHours: 3,
    courseDescription:
      "360° 3D Virtual Tours, Real Estate Photography, Aerial Photos, Floor Plans and More!",
  },

  {
    courseTitle:
      "Marketing Analytics: Stand Out by Becoming an Analytics Pro! 2023",
    coursePhoto: marketing3,
    courseTeacher: "Joseph",
    coursePrice: "$99.99",
    courseRating: 4.6,
    courseId: "m1",
    courseCategory: "marketing",
    courseHours: 5,
    courseDescription:
      "Marketing requires a new, analytical breed of professionals. Be at the forefront of your profession.",
  },

  {
    courseTitle: "Business Branding With Personality: Build An Authentic Brand",
    coursePhoto: marketing2,
    courseTeacher: "Steve Houraghan",
    coursePrice: "$74.99",
    courseRating: 4.7,
    courseId: "m2",
    courseCategory: "marketing",
    courseHours: 3,
    courseDescription:
      "The Business Branding Strategy That Empowers Your Brand To Connect With Personality On A Human Level",
  },

  {
    courseTitle: "Social Media Marketing Agency : Digital Marketing + Business",
    coursePhoto: marketing1,
    courseTeacher: "Pouya Eti",
    coursePrice: "$89.99",
    courseRating: 4.4,
    courseId: "m3",
    courseCategory: "marketing",
    courseHours: 49.5,
    courseDescription:
      "Learn to build a business, find clients, & social media marketing all in one. Facebook ads, Instagram, Google ads & more.",
  },

  {
    courseTitle: "How to Budget and Forecast for Your Business",
    coursePhoto: business3,
    courseTeacher: "Tim Berry",
    coursePrice: "$64.99",
    courseRating: 4.5,
    courseId: "b1",
    courseCategory: "business",
    courseHours: 2.5,
    courseDescription:
      "Learn Budgeting and Forecasting, Principles and Concept of Costing, Direct Cost and Indirect Cost, Overhead Allocation",
  },

  {
    courseTitle: "A Comprehensive Guide to Project Management",
    coursePhoto: business2,
    courseTeacher: "Kareem Ullah",
    coursePrice: "$19.99",
    courseRating: 4.9,
    courseId: "b2",
    courseCategory: "business",
    courseHours: 2,
    courseDescription:
      "Understanding PMBOK, PMP, CAPM , Concepts & Framework for Project Success. Ultimate guide to Project Management PMI.",
  },

  {
    courseTitle: "Sales and Persuasion Skills for Startups",
    coursePhoto: business1,
    courseTeacher: "Len Smith, Sean Kaye",
    coursePrice: "$69.99",
    courseRating: 4.3,
    courseId: "b3",
    courseCategory: "business",
    courseHours: 1.5,
    courseDescription: "The entrepreneur's sure guide to getting a 'Yes'.",
  },
];

function SubCourse({
  courseTitle,
  coursePhoto,
  courseTeacher,
  coursePrice,
  courseRating,
  courseId,
  courseCategory,
  courseDescription,
  courseHours,
}) {
  return (
    <div className={styles["sub-course"]}>
      <div className={styles["course-card"]}>
        <img src={coursePhoto} alt="" className={styles["course-photo"]} />
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
