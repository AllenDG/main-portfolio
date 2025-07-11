
import { CoverDemo } from "@/pages/home/components/CoverDemo";
import ExperienceSection from "@/pages/home/screens/ExperienceSection";
import HeroSection from "./screens/HeroSection";

export default function HomePage() {
  return (
    <main className="flex flex-col w-full">
      <div className="mb-8">
        <HeroSection />
      </div>
      <div className="mb-8">
        <CoverDemo />
      </div>
      <div className="mb-8">
        <ExperienceSection />
      </div>
    </main>
  );
}
