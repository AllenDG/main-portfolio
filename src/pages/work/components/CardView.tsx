"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

import type { Project } from "@/types/projects";

type Props = {
  projects: Project[];
};

// Helper function to create URL-friendly slug
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single hyphen
    .trim();
};

export default function CardView({ projects }: Props) {
  const navigate = useNavigate();

  const handleViewProject = (project: Project, index: number) => {
    const slug = createSlug(project.title);
    // Navigate with both slug and index for reliability
    navigate(`/projects/${slug}`, { 
      state: { 
        project, 
        projectIndex: index 
      } 
    });
  };

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

          {/* CTA Button - Now Enabled */}
          <div className="mt-4">
            <Button 
              variant="secondary" 
              className="w-full"
              onClick={() => handleViewProject(project, idx)}
            >
              View Project
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}