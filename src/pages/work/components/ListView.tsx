"use client";
import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { Project } from "@/types/projects";

type Props = {
  projects: Project[];
};

export default function ListView({ projects }: Props) {
  return (
    <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-10 py-14 flex flex-col gap-14">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-background dark:bg-neutral-900 p-6 md:p-8 rounded-xl border border-border shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {project.role === "uiux"
                  ? "UI/UX Designer"
                  : "Frontend Developer"}
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5 text-muted-foreground hover:text-cyan-500 transition" />
              </a>
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-5 h-5 text-muted-foreground hover:text-cyan-500 transition" />
              </a>
            </div>
          </div>

          <p className="text-base text-muted-foreground mb-5">
            {project.description}
          </p>

          <div className="mb-5">
            <span className="text-sm font-medium text-muted-foreground">
              Tech Stack:
            </span>
            <div className="flex flex-wrap gap-2 mt-2">
              {project.techStack.map((tech, i) => (
                <Badge key={i} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {project.impact && (
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">Impact:</span>{" "}
              {project.impact}
            </p>
          )}

          <div className="mt-6">
            <Button
              variant="secondary"
              className="hover:scale-[1.02] transition-transform"
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Case Study
              </a>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
