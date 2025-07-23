// ProjectLinks.tsx
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

export default function ProjectLinks({ github, live }: { github?: string; live?: string }) {
  return (
    <div className="flex gap-4 pt-4">
      {github && (
        <a href={github} target="_blank" rel="noopener noreferrer">
          <Button variant="outline">
            <Github className="w-4 h-4 mr-2" />
            View Code
          </Button>
        </a>
      )}
      {live && (
        <a href={live} target="_blank" rel="noopener noreferrer">
          <Button>
            <ExternalLink className="w-4 h-4 mr-2" />
            Live Demo
          </Button>
        </a>
      )}
    </div>
  );
}