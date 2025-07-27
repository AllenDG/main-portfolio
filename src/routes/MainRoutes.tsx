// React Router
import { createBrowserRouter } from "react-router-dom";

// Layouts
import HomeLayout from "@/components/layouts/HomeLayout";

// Pages
import AboutPage from "@/pages/about-me/AboutMePage";
import BlogPage from "@/pages/blog/BlogPage";
import NotFound from "@/pages/NotFound";
import MainPage from "@/pages/MainPage";
import CaseStudy from "@/pages/case-study/CaseStudy";


export const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <MainPage /> }, 
      { path: "about", element: <AboutPage /> },
      { path: "blog", element: <BlogPage /> },
      { path: "projects/:slug", element: <CaseStudy /> },
    ],
  },
]);
