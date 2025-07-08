"use client";

import { Github, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "Task Manager App",
    description:
      "A productivity-focused web app that enables users to create, manage, and complete tasks in real-time with team collaboration features.",
    techStack: ["React", "Firebase", "Tailwind CSS"],
    github: "https://github.com/username/task-manager",
    live: "https://taskpro.vercel.app",
    role: "Frontend Developer",
    impact:
      "Streamlined task workflows for teams, increasing efficiency by 30%.",
  },
  {
    title: "E-Commerce Dashboard",
    description:
      "An analytics dashboard for tracking sales, inventory, and customer activity, integrated with dynamic data visualization.",
    techStack: ["Next.js", "Supabase", "Recharts"],
    github: "https://github.com/username/ecom-dashboard",
    live: "https://ecomdash.vercel.app",
    role: "Full Stack Developer",
    impact:
      "Reduced admin processing time by 50% through optimized UI and API design.",
  },
];

export default function ListView() {
  return (
    <div className="max-w-8xl mx-auto px-6 sm:px-8 md:px-10 py-14 flex flex-col gap-14">
      {projects.map((project, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="bg-white dark:bg-neutral-900 p-6 md:p-8 rounded-xl border border-border shadow-md hover:shadow-xl transition-shadow duration-300"
        >
          {/* Title + Links */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h2 className="text-2xl font-semibold text-foreground">
                {project.title}
              </h2>
              <p className="text-sm text-muted-foreground mt-1">
                {project.role}
              </p>
            </div>
            <div className="flex gap-3">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-500 transition"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan-500 transition"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Description */}
          <p className="text-base text-muted-foreground leading-relaxed mb-5">
            {project.description}
          </p>

          {/* Tech Stack */}
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

          {/* Impact */}
          <p className="text-sm text-muted-foreground">
            <span className="text-foreground font-medium">Impact:</span>{" "}
            {project.impact}
          </p>

          {/* CTA */}
          <div className="mt-6">
            <Button
              variant="secondary"
              className="hover:scale-[1.02] transition-transform"
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer">
                Visit Project
              </a>
            </Button>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
