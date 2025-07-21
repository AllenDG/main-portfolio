// React Router
import { createBrowserRouter } from "react-router-dom";

// Layouts
import HomeLayout from "@/components/layouts/HomeLayout";

// Pages
// This will be your one-pager
import AboutPage from "@/pages/about-me/AboutMePage";
import BlogPage from "@/pages/blog/BlogPage";
import NotFound from "@/pages/NotFound";
import MainPage from "@/pages/MainPage";

export const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { path: "/", element: <MainPage /> }, // One-pager with Home, Work, Contact
      { path: "about", element: <AboutPage /> },
      { path: "blog", element: <BlogPage /> },
    ],
  },
]);
