"use client";

import { useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import ViewModal from "./ViewModal";
import type { Project } from "@/types/projects";

type Props = {
  projects: Project[];
};

export default function CardView({ projects }: Props) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 gap-y-42">
        {projects.map((project, idx) => (
          <PinContainer key={idx} title={project.title} href={project.live}>
            <div className="flex flex-col w-[300px] bg-background rounded-xl p-4 shadow-md">
              {/* Image */}
              <div className="w-full h-48 overflow-hidden rounded-lg">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:brightness-110 transition"
                  />
                </a>
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

              {/* Links */}
              <div className="flex items-center gap-3 mt-3">
                <a href={project.github} target="_blank" rel="noreferrer">
                  <Github className="w-5 h-5 text-foreground hover:text-cyan-500 transition" />
                </a>
                <a href={project.live} target="_blank" rel="noreferrer">
                  <ExternalLink className="w-5 h-5 text-foreground hover:text-cyan-500 transition" />
                </a>
              </div>

              {/* CTA Button */}
              <div className="mt-4">
                <Button
                  variant="secondary"
                  className="w-full hover:scale-[1.02] transition"
                  onClick={() => setSelectedProject(project)}
                >
                  View Project
                </Button>
              </div>
            </div>
          </PinContainer>
        ))}
      </div>

      {/* View Modal */}
      {selectedProject && (
        <ViewModal
          open={true}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
          description={selectedProject.description}
          techStack={selectedProject.techStack}
          story={selectedProject.story}
          image={selectedProject.image}
        />
      )}
    </>
  );
}
