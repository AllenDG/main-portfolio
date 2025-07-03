// React Router
import { createBrowserRouter } from "react-router-dom";

// Layouts
import HomeLayout from "@/components/layouts/HomeLayout";

// Pages
import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about-me/AboutMePage";
import WorkPage from "@/pages/work/WorkPage";
import BlogPage from "@/pages/blog/BlogPage";

import NotFound from "@/pages/NotFound";
import ContactPage from "@/pages/contact/ContactPage";

export const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about-page", element: <AboutPage /> },
      { path: "work-page", element: <WorkPage /> },
      { path: "blog-page", element: <BlogPage /> },
      { path: "contact-page", element: <ContactPage /> },
    ],
  },
]);
