import type { Project } from "@/types/projects";
import CaptiveMarket from "../components/CaptiveMarket";
import ProjectDetails from "../components/ProjectDetails";
import ProjectLinks from "../components/ProjectLinks";
import Role from "../components/Roles";
import Techstack from "../components/Techstack";
import Tools from "../components/Tools";

export default function CaseStudyHeader({ project }: { project: Project }) {
  return (
    <div className="gap-12 mb-12">
      <div className="space-y-2 divide-y divide-border">
        <div className="pb-4">
          <ProjectDetails project={project} />
        </div>
        <div className="pt-4 pb-4">
          <Role role={project.role} />
        </div>
        <div className="pt-4 pb-4">
          <CaptiveMarket project={project} />
        </div>
        <div className="pt-4 pb-4">
          <Tools project={project} />
        </div>
        <div className="pt-4 pb-4">
          <Techstack techStack={project.techStack} />
        </div>
        <div className="pt-4">
          <ProjectLinks github={project.github} live={project.live} />
        </div>
      </div>
    </div>
  );
}
