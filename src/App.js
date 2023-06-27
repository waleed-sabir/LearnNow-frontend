import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import "./App.css";

// Pages
import Home from "./home/Home";
import WebDev from "./courses/pages/categories/WebDev";
import Design from "./courses/pages/categories/Design";
import Photography from "./courses/pages/categories/Photography";
import Marketing from "./courses/pages/categories/Marketing";
import Business from "./courses/pages/categories/Business";
import Login from "./home/Login";
import SignUp from "./home/SignUp";

// Layouts
import CourseLayout from "./courses/layout/CourseLayout";
import RootLayout from "./layouts/RootLayout";
import SubCourseLayout from "./courses/layout/SubCourseLayout";
import SubCourseDetails from "./courses/components/SubCourseDetails";

// Components
// import SubCourseDetails from "./courses/components/SubCourseDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<SignUp />} />

      <Route path="courses" element={<CourseLayout />}>
        <Route path="web-development" element={<WebDev />} />
        <Route path="design" element={<Design />} />
        <Route path="photography" element={<Photography />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="business" element={<Business />} />
      </Route>

      <Route path="course" element={<SubCourseLayout />}>
        <Route path="web-development/:id" element={<SubCourseDetails />} />
        <Route path="design/:id" element={<SubCourseDetails />} />
        <Route path="photography/:id" element={<SubCourseDetails />} />
        <Route path="marketing/:id" element={<SubCourseDetails />} />
        <Route path="business/:id" element={<SubCourseDetails />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
