export default function Designer() {
  const steps = [
    {
      step: "1. Gather requirements & analyze BRD",
      description:
        "Review the Business Requirements Document and meet with stakeholders to fully understand needs and goals.",
    },
    {
      step: "2. Create user stories & story map",
      description:
        "Break down features into user stories and map them to visualize priorities and workflows.",
    },
    {
      step: "3. Define user personas & journey maps",
      description:
        "Identify target users, their goals, pain points, and illustrate their end-to-end experience.",
    },
    {
      step: "4. Build product roadmap",
      description:
        "Outline feature delivery timeline and align design milestones with development phases.",
    },
    {
      step: "5. Design process flows",
      description:
        "Map detailed process flows to ensure clarity in navigation, decision points, and user actions.",
    },
    {
      step: "6. Sketch user flows & wireframes",
      description:
        "Draft the main screens and logical navigation structure with low-fidelity sketches.",
    },
    {
      step: "7. Create low-fidelity mockups",
      description:
        "Design the basic layout without colors or styles to establish the structure and hierarchy.",
    },
    {
      step: "8. Build high-fidelity mockups in Figma",
      description:
        "Design detailed, polished UI screens with colors, typography, and real content.",
    },
    {
      step: "9. Conduct user testing & iterate",
      description:
        "Test the designs with real users, gather feedback, and refine the solution for better usability.",
    },
  ];

  return (
    <div className="space-y-6">
      {steps.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg px-5 py-4 bg-background hover:shadow-md transition"
        >
          <h4 className="text-foreground font-semibold mb-1">{item.step}</h4>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
