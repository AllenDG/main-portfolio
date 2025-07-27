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

import { contributorsData } from "@/types/avatar";
import { AnimatedAvatarTooltip} from "@/components/ui/animated-tooltip";

export default function ProjectStory({ project }: { project: Project }) {

  const featureImages = project.featureImages || [];

  // Filter screenshots by different user types
  const publicScreenshots = featureImages.filter((img) => {
    const label = img.label.toLowerCase();
    return (
      label.startsWith("user-") &&
      !label.includes("user portal") &&
      !label.includes("admin")
    );
  });

  const userPortalScreenshots = featureImages.filter((img) => {
    const label = img.label.toLowerCase();
    return label.includes("user portal");
  });

  const adminScreenshots = featureImages.filter((img) => {
    const label = img.label.toLowerCase();
    return label.startsWith("admin");
  });

  return (
    <div className="w-full">
      <div className="bg-card p-8 rounded-sm shadow-sm border space-y-8">
        {/* Contributors */}
       {contributorsData.length > 0 && (
  <div className="mb-6">
    <h3 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
      <Users className="w-5 h-5 text-primary" /> Contributors
    </h3>
    <AnimatedAvatarTooltip items={contributorsData} />
  </div>
)}

        {/* Story */}
        <div>
          <h2 className="text-xl font-semibold text-foreground mb-2 flex items-center gap-2">
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

        {/* Screenshots Section with Support for Three User Types */}
        {(publicScreenshots.length > 0 ||
          userPortalScreenshots.length > 0 ||
          adminScreenshots.length > 0) && (
          <div className="border-t pt-6">
            {/* Public/User Screens */}
            {publicScreenshots.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium text-foreground mb-4">
                  Public Website Screens
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {publicScreenshots.map((item, idx) => (
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

            {/* User Portal Screens */}
            {userPortalScreenshots.length > 0 && (
              <div className="mb-6">
                <h4 className="text-lg font-medium text-foreground mb-4">
                  User Portal Screens
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {userPortalScreenshots.map((item, idx) => (
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

            {/* Admin Screens */}
            {adminScreenshots.length > 0 && (
              <div>
                <h4 className="text-lg font-medium text-foreground mb-4">
                  Admin Dashboard Screens
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                  {adminScreenshots.map((item, idx) => (
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
