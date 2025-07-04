import { HeroSection } from "@/pages/home/screens/HeroSection";
import { CoverDemo } from "./components/CoverDemo";
import ExperienceSection from "./screens/ExperienceSection";

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
