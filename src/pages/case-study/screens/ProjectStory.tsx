// components/ProjectStory.tsx
import {
  CheckCircle,
  Target,
  AlertTriangle,
  Award,
  ClipboardList,
  Zap,
  Users,
} from "lucide-react";
import type { Project } from "@/types/projects";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function ProjectStory({ project }: { project: Project }) {
  const contributors = project.contributors || [];
  const featureImages = project.featureImages || [];

  return (
    <div className="w-full">
      <div className="bg-card p-8 rounded-sm shadow-sm border space-y-8">
        {/* Contributors */}
        {contributors.length > 0 && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" /> Contributors
            </h3>
            <div className="flex gap-4">
              {contributors.map((contributor, index) => (
                <div key={index} className="group relative">
                  <Avatar>
                    <AvatarImage
                      src={contributor.avatar}
                      alt={contributor.name}
                    />
                    <AvatarFallback>
                      {contributor.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <span className="absolute bottom-[-28px] left-1/2 -translate-x-1/2 bg-muted text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition text-center whitespace-nowrap">
                    {contributor.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Story */}
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2 flex items-center gap-2">
            <ClipboardList className="w-5 h-5 text-primary" /> Project Story
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            {project.story}
          </p>
        </div>

        {project.impact && (
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <CheckCircle className="w-5 h-5 text-primary" /> Impact
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.impact}
            </p>
          </div>
        )}

        {project.challenges && (
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" /> Challenges
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.challenges}
            </p>
          </div>
        )}

        {project.goal && (
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <Target className="w-5 h-5 text-primary" /> Goal
            </h3>
            <ul className="list-disc pl-6 text-muted-foreground space-y-1">
              {project.goal.map((item, index) => (
                <li key={index} className="pl-1 leading-relaxed text-pretty">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {project.keyResponsibilities && (
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <ClipboardList className="w-5 h-5 text-primary" /> Key
              Responsibilities
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.keyResponsibilities}
            </p>
          </div>
        )}

        {project.features && (
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" /> Features
            </h3>
            <ul className="list-disc list-inside text-muted-foreground space-y-1">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Feature Images */}
        {featureImages.length > 0 && (
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <Zap className="w-5 h-5 text-primary" /> Feature Screenshots
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {featureImages.map((item, idx) => (
                <div key={idx} className="border rounded overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.label}
                    className="w-full object-cover"
                  />
                  <div className="text-sm px-2 py-1 text-muted-foreground bg-muted">
                    {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {project.takeaways && (
          <div className="border-t pt-6">
            <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
              <Award className="w-5 h-5 text-primary" /> Takeaways
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {project.takeaways}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
