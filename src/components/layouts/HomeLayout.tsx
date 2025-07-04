// src/layouts/HomeLayout.tsx
import { Outlet } from "react-router-dom";
import { useTheme } from "next-themes";
import Navbar from "@/components/common/navigation/Navbar";
import Footer from "@/components/layouts/FooterLayout";

const HomeLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === "dark" ? "dark" : ""}`}>
      <div className="flex flex-col min-h-screen bg-background text-foreground">
        <Navbar />

        <main className="flex-1 container mx-auto px-4 py-6">
          <Outlet />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default HomeLayout;
