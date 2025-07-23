// Tools.tsx
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/projects";


const getTools = (project: Project): string[] => {
  const tools: string[] = [];
  if (project.role === "uiux") {
    tools.push("Figma", "Prototyping"," Canva");
  }
  if (project.role === "webdev") {
    tools.push("VS Code", "Git", "Insomnia", );
    if (
      project.techStack.some((tech) => tech.toLowerCase().includes("react"))
    ) {
      tools.push("React Developer Tools");
    }
  }
  return tools;
};

export default function Tools({ project }: { project: Project }) {
  const tools = getTools(project);
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-2">Tools</h3>
      <div className="flex flex-wrap gap-2">
        {tools.map((tool, idx) => (
          <Badge key={idx} variant="outline" className="text-xs">
            {tool}
          </Badge>
        ))}
      </div>
    </div>
  );
}
