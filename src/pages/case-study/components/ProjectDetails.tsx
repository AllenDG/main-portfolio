// ProjectDetails.tsx
import { Badge } from "@/components/ui/badge";
import type { Project } from "@/types/projects";

export default function ProjectDetails({ project }: { project: Project }) {
  return (
    <div>
      <h1 className="text-4xl font-bold text-foreground mb-2">
        {project.title}
      </h1>
      <Badge variant="secondary" className="text-sm">
        {project.tag}
      </Badge>
    </div>
  );
}
