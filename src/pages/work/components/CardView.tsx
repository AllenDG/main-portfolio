"use client";
import { useState } from "react";
import { PinContainer } from "@/components/ui/3d-pin";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";
import Dormitory from "@/assets/images/Dormitory.jpg";
import ViewModal from "./ViewModal";

type Project = {
  title: string;
  description: string;
  github: string;
  live: string;
  tag: string;
  image: string;
  techStack: string[];
  story: string;
};

const projects: Project[] = [
  {
    title: "Task Manager App",
    description:
      "A full-featured task management application built with React and Firebase.",
    github: "https://github.com/username/task-manager",
    live: "https://taskpro.vercel.app",
    tag: "Development",
    image: Dormitory,
    techStack: ["React", "Firebase", "Tailwind CSS"],
    story:
      "This project helped me understand how to architect real-time applications. I collaborated with a team, practiced Git workflows, and prioritized user experience by conducting testing with peers.",
  },

  {
    title: "Task Manager App",
    description:
      "A full-featured task management application built with React and Firebase.",
    github: "https://github.com/username/task-manager",
    live: "https://taskpro.vercel.app",
    tag: "Development",
    image: Dormitory,
    techStack: ["React", "Firebase", "Tailwind CSS"],
    story:
      "This project helped me understand how to architect real-time applications. I collaborated with a team, practiced Git workflows, and prioritized user experience by conducting testing with peers.",
  },

  {
    title: "Task Manager App",
    description:
      "A full-featured task management application built with React and Firebase.",
    github: "https://github.com/username/task-manager",
    live: "https://taskpro.vercel.app",
    tag: "Development",
    image: Dormitory,
    techStack: ["React", "Firebase", "Tailwind CSS"],
    story:
      "This project helped me understand how to architect real-time applications. I collaborated with a team, practiced Git workflows, and prioritized user experience by conducting testing with peers.",
  },

  {
    title: "Task Manager App",
    description:
      "A full-featured task management application built with React and Firebase.",
    github: "https://github.com/username/task-manager",
    live: "https://taskpro.vercel.app",
    tag: "Development",
    image: Dormitory,
    techStack: ["React", "Firebase", "Tailwind CSS"],
    story:
      "This project helped me understand how to architect real-time applications. I collaborated with a team, practiced Git workflows, and prioritized user experience by conducting testing with peers.",
  },

  {
    title: "Task Manager App",
    description:
      "A full-featured task management application built with React and Firebase.",
    github: "https://github.com/username/task-manager",
    live: "https://taskpro.vercel.app",
    tag: "Development",
    image: Dormitory,
    techStack: ["React", "Firebase", "Tailwind CSS"],
    story:
      "This project helped me understand how to architect real-time applications. I collaborated with a team, practiced Git workflows, and prioritized user experience by conducting testing with peers.",
  },

  {
    title: "Task Manager App",
    description:
      "A full-featured task management application built with React and Firebase.",
    github: "https://github.com/username/task-manager",
    live: "https://taskpro.vercel.app",
    tag: "Development",
    image: Dormitory,
    techStack: ["React", "Firebase", "Tailwind CSS"],
    story:
      "This project helped me understand how to architect real-time applications. I collaborated with a team, practiced Git workflows, and prioritized user experience by conducting testing with peers.",
  },
];

export default function CardView() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-x-44 gap-y-55 py-22">
        {projects.map((project, idx) => (
          <PinContainer key={idx} title={project.title} href={project.live}>
            <div className="flex flex-col gap-4 w-[25em] bg-background rounded-xl p-4">
              {/* Image */}
              <div className="w-full h-50 overflow-hidden rounded-lg">
                <a href={project.live} target="_blank" rel="noreferrer">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top hover:brightness-110 transition"
                  />
                </a>
              </div>

              {/* Title & Tag */}
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-foreground truncate">
                  {project.title}
                </h3>
                <Badge variant="secondary">{project.tag}</Badge>
              </div>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">
                {project.description}
              </p>

              {/* Links */}
              <div className="flex items-center gap-3 mt-2">
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
          image={selectedProject.image} // This should be the imported image directly
        />
      )}
    </>
  );
}
