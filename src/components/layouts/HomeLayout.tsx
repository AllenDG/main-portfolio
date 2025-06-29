// src/layouts/HomeLayout.tsx
import { Outlet } from "react-router-dom";
import Navbar from "@/components/common/navigation/Navbar";
import Footer from "@/components/layouts/FooterLayout";

const HomeLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white text-gray-900">
      <Navbar />

      <main className="flex-1 container mx-auto px-4 py-6">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default HomeLayout;
