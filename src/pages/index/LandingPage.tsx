// src/pages/index/LandingPage.tsx
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { useNavigate } from "react-router-dom";
import { ArrowDown } from "lucide-react";
import { BackgroundBeams } from "@/components/ui/background-beams";


export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-black">
      <BackgroundBeams />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-6 px-6 text-center">
        <TextGenerateEffect
          words="Do you want to know about my journey?"
          className="text-4xl sm:text-5xl md:text-6xl text-white drop-shadow-xl"
        />
      </div>

      <button
        onClick={() => navigate("/app")}
        className="fixed bottom-6 right-6 z-20 animate-bounce rounded-full bg-white p-3 text-black shadow-lg transition hover:scale-110 hover:bg-gray-200"
        title="Click to enter"
      >
        <ArrowDown className="h-6 w-6" />
      </button>
    </div>
  );
}
