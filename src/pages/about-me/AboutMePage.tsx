import AboutBanner from "./screens/AboutBanner";
import FunFacts from "./screens/FunFacts";
import ProcessSection from "./screens/ProcessSection";
import SkillLayout from "./screens/SkillLayout";
import Testimonials from "./screens/Testimonials";

export default function AboutMePage() {
  return (
    <main className="flex flex-col w-full">
      <div className="mb-8">
        <AboutBanner />
      </div>

      <div className="mb-8">
        <ProcessSection />
      </div>

      <div className="mb-8">
        <SkillLayout />
      </div>

      <div className="mb-8">
        <FunFacts />
      </div>

      <div className="mb-8">
        <Testimonials/>
      </div>
    </main>
  );
}
