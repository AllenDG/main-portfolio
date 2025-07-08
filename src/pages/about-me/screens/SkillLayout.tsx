
import TechStack from "@/pages/about-me/components/Techstack";
import Tools from "@/pages/about-me/components/Tools";


export default function SkillLayout() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-12">
      
      <div className="">
        <TechStack />
        <Tools />
      </div>
    </section>
  );
}
