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

// Layouts
import CourseLayout from "./courses/layout/CourseLayout";
import RootLayout from "./layouts/RootLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="courses" element={<CourseLayout />}>
        <Route path="web-development" element={<WebDev />} />
        <Route path="design" element={<Design />} />
        <Route path="photography" element={<Photography />} />
        <Route path="marketing" element={<Marketing />} />
        <Route path="business" element={<Business />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
