// Techstack.tsx
import { Badge } from "@/components/ui/badge";

export default function Techstack({ techStack }: { techStack: string[] }) {
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-2">Tech Stack & Libraries</h3>
      <div className="flex flex-wrap gap-2">
        {techStack.map((tech, idx) => (
          <Badge key={idx} variant="secondary" className="text-xs">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}