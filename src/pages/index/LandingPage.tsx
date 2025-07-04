import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { ChromeGrid } from "@/components/ui/chrome-grid";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative h-svh w-screen overflow-hidden">
      <ChromeGrid />

      {/* Responsive Centered Text */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-4 text-center pointer-events-none">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light tracking-widest text-white mb-3">
          Hello, I'm Allen Walter F. De Guzman
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-white/70 font-mono tracking-wide">
          Would you like to know my journey?
        </p>
      </div>

      <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-30">
        <button
          onClick={() => navigate("/app/home-page")}
          className="animate-bounce rounded-full bg-white text-black shadow-xl transition-all 
               p-2 sm:p-3 md:p-4 
               hover:scale-110 hover:bg-gradient-to-r hover:from-gray-100 hover:to-gray-300 hover:shadow-2xl 
               focus:outline-none"
          title="Click to enter"
        >
          <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6" />
        </button>
      </div>
    </div>
  );
}
