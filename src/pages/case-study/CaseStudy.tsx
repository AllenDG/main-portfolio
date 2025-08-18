import { useLocation, useNavigate, useParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { projects, type Project } from "@/types/projects";
import CaseStudyHeader from "./screens/CaseStudyHeader";
import ProjectStory from "./screens/ProjectStory";

// Import the special Aignition image
import frame27685 from "@/assets/images/Frame 27685.png";

// Helper function to create slug
const createSlug = (title: string): string => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .trim();
};

export default function CaseStudy() {
  const { slug } = useParams<{ slug: string }>();
  const location = useLocation();
  const navigate = useNavigate();

  let project: Project | undefined = location.state?.project;

  if (!project && slug) {
    project = projects.find((p) => createSlug(p.title) === slug);
  }

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-6xl space-y-12">
        {/* Back Button */}
        <div className="w-full">
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Projects
          </Button>
        </div>

        {/* Header Section: Left + Right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <CaseStudyHeader project={project} />
          </div>
          <div className="flex items-center justify-center overflow-clip  w-[100%] h-[640px] shadow-md">
            <img
              src={
                project.title === "Aignition Global Education Alliance"
                  ? frame27685
                  : project.image
              }
              alt={project.title}
              className="object-cover scale-200 transition-transform duration-300"
            />
          </div>
        </div>

        {/* Story Section */}
        <ProjectStory project={project} />
      </div>
    </div>
  );
}
