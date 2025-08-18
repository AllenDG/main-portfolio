// src/layouts/HomeLayout.tsx
import { Outlet, useLocation } from "react-router-dom";
import { useTheme } from "next-themes";
import { useEffect } from "react";
import Navbar from "@/components/common/navigation/Navbar";
import Footer from "@/components/layouts/FooterLayout";

const HomeLayout = () => {
  const { theme } = useTheme();
  const { pathname } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div
      className={`flex flex-col min-h-screen ${theme === "dark" ? "dark" : ""}`}
    >
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="flex-1">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
