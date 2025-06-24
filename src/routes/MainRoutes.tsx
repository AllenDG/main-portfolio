

// Misc
import AdminLayout from "@/components/layouts/AdminLayout";
import HomeLayout from "@/components/layouts/HomeLayout";
import AdminDashboard from "@/pages/admin/AdminDashboard";
import BlogPage from "@/pages/blog/BlogPage";
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/LoginPage";
import WorkPage from "@/pages/work/WorkPage";
import AboutPage from "@/pages/about-me/AboutMePage"
import { createBrowserRouter } from "react-router-dom";
import NotFound from "@/pages/NotFound";
import ProtectedRoute from "./ProtectedRoute";


export const MainRoutes = createBrowserRouter([
  {
    path: "*",
    element: <NotFound />,
  },

  {
    path: "/login",
    element: <LoginPage />,
  },

  // 🌐 Public Routes (for all users)
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "work", element: <WorkPage /> },
      { path: "blog", element: <BlogPage /> },
    ],
  },

  // 🔐 Admin-only Routes
  {
    path: "/admin",
    element: (
      <ProtectedRoute allowedRoles={["admin"]}>
        <AdminLayout />
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <AdminDashboard /> },
    ],
  },
]);
