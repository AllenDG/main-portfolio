import type { Project } from "@/types/projects";

// CaptiveMarket.tsx
const getCaptiveMarket = (project: Project): string => {
  const title = project.title.toLowerCase();
  if (title.includes('gym')) return 'Fitness & Health';
  if (title.includes('dormitory') || title.includes('apartment')) return 'Real Estate & Housing';
  if (title.includes('photo')) return 'Photography & Media';
  if (title.includes('drive') || title.includes('car')) return 'Transportation | Rental | Car Seller';
  if (title.includes('appointment') || title.includes('booking')) return 'Healthcare & Services';
  if (title.includes('hiring') || title.includes('management')) return 'HR & Recruitment';
  if (title.includes('pet') || title.includes('paws')) return 'Pet Care & Veterinary';
  if (title.includes('design')) return 'Design & Creative';
  return 'Technology & Software';
};

export default function CaptiveMarket({ project }: { project: Project }) {
  const market = getCaptiveMarket(project);
  return (
    <div>
      <h3 className="text-lg font-semibold text-foreground mb-2">Target Market</h3>
      <p className="text-muted-foreground">{market}</p>
    </div>
  );
}