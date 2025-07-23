// components/ProjectStory.tsx
import type { Project } from "@/types/projects";

export default function ProjectStory({ project }: { project: Project }) {
  return (
    <div className="w-full">
      <div className="bg-card p-8 rounded-sm shadow-sm border space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-foreground mb-2">Project Story</h2>
          <p className="text-muted-foreground leading-relaxed">{project.story}</p>
        </div>

        {project.impact && (
          <>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Impact</h3>
              <p className="text-muted-foreground leading-relaxed">{project.impact}</p>
            </div>
          </>
        )}

        {project.challenges && (
          <>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Challenges</h3>
              <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
            </div>
          </>
        )}

        {project.goal && (
          <>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Goal</h3>
              <p className="text-muted-foreground leading-relaxed">{project.goal}</p>
            </div>
          </>
        )}

        {project.keyResponsibilities && (
          <>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Key Responsibilities</h3>
              <p className="text-muted-foreground leading-relaxed">{project.keyResponsibilities}</p>
            </div>
          </>
        )}

        {project.features && (
          <>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Features</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          </>
        )}

        {project.takeaways && (
          <>
            <div className="border-t pt-6">
              <h3 className="text-xl font-semibold text-foreground mb-2">Takeaways</h3>
              <p className="text-muted-foreground leading-relaxed">{project.takeaways}</p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
