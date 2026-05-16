import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Layout from "./Layout";
import About from "./component/About/About";
import Home from "./component/Home/Home";
import ContactUs from "./component/Contact/ContactUs";
import Github from "./component/Github/Github";
import User from "./component/User/User";

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element: <Home />,
//       },

//       {
//         path: "/about",
//         element: <About />,
//       },
//       {
//         path: "/contact",
//         element: <ContactUs />,
//       },
//       {
//         path: "/github",
//         element: <Github />,
//       },
//     ],
//   },
// ]);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route path="" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<ContactUs />} />
      <Route path="/github" element={<Github />} />
      <Route path="/user/:userid" element={<User />} />
    </Route>,
  ),
);
createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />,
);
