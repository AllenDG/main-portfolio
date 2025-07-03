// React Router
import { createBrowserRouter } from "react-router-dom";

// Layouts
import HomeLayout from "@/components/layouts/HomeLayout";

// Pages

import HomePage from "@/pages/home/HomePage";
import AboutPage from "@/pages/about-me/AboutMePage";
import WorkPage from "@/pages/work/WorkPage";
import BlogPage from "@/pages/blog/BlogPage";
import ContactPage from "@/pages/contact/ContactPage";
import NotFound from "@/pages/NotFound";
import LandingPage from "@/pages/index/LandingPage";

export const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/app",
    element: <HomeLayout />,
    children: [
      { path: "home-page", element: <HomePage /> },
      { path: "about-page", element: <AboutPage /> },
      { path: "work-page", element: <WorkPage /> },
      { path: "blog-page", element: <BlogPage /> },
      { path: "contact-page", element: <ContactPage /> },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
