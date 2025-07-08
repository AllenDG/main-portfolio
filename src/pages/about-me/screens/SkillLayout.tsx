import { HoverEffect } from "@/components/ui/card-hover-effect";

const techStack = [
  {
    title: "ReactJS",
   
  },
  {
    title: "JavaScript",
  
  },
  {
    title: "HTML & CSS",
  
  },
  {
    title: "Tailwind CSS",
   
  },
  {
    title: "Bootstrap",
    
  },
  {
    title: "JQuery",
   
  },
];

const tools = [
  {
    title: "Figma",
    
  },
  {
    title: "Canva",
   
  },
  {
    title: "Photoshop",
  
  },
  {
    title: "Adobe Premiere Pro",
    
  },
  {
    title: "Git & GitHub",
   
  },
  {
    title: "VS Code & Visual Studio",
   
  },
  {
    title: "Copilot Studio",
 
  },
  {
    title: "Insomnia",
   
  },
];

export default function SkillLayout() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-20">
      <div className="space-y-4 text-center">
        <h2 className="text-3xl font-bold text-foreground">
          Skillset Overview
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          A showcase of my core tech stack and essential tools that shape the
          way I design and build.
        </p>
      </div>

      {/* Tech Stack */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-center text-foreground">
          Tech Stack
        </h3>
        <div className="max-w-6xl mx-auto px-4">
          <HoverEffect items={techStack} />
        </div>
      </div>

      {/* Tools */}
      <div className="space-y-6">
        <h3 className="text-xl font-semibold text-center text-foreground">
          Tools I Use
        </h3>
        <div className="max-w-6xl mx-auto px-4">
          <HoverEffect items={tools} />
        </div>
      </div>
    </section>
  );
}
