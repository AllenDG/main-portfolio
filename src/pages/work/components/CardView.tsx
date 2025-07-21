"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { Github, ExternalLink } from "lucide-react"; // Removed icons to disable actions

import type { Project } from "@/types/projects";

type Props = {
  projects: Project[];
};

export default function CardView({ projects }: Props) {
  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 pb-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="flex flex-col w-full bg-background rounded-xl p-4 shadow-md border-2"
        >
          {/* Image */}
          <div className="w-full h-48 overflow-hidden rounded-lg">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover object-top opacity-60"
            />
          </div>

          {/* Title & Tag */}
          <div className="flex items-center justify-between mt-4">
            <h3 className="text-xl font-semibold text-foreground truncate">
              {project.title}
            </h3>
            <Badge variant="secondary">{project.tag}</Badge>
          </div>

          {/* Description */}
          <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 mt-2">
            {project.description}
          </p>

          {/* Links Disabled */}
          {/* <div className="flex items-center gap-3 mt-3">
            <Github className="w-5 h-5 text-muted-foreground" />
            <ExternalLink className="w-5 h-5 text-muted-foreground" />
          </div> */}

          {/* CTA Button Disabled */}
          <div className="mt-4">
            <Button variant="secondary" className="w-full" disabled>
              Case Study
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}
