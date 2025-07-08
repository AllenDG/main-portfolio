export default function Designer() {
  const steps = [
    {
      step: "1. Understand client needs and goals",
      description:
        "Discuss with stakeholders to identify pain points and goals.",
    },
    {
      step: "2. Create user personas & journey maps",
      description: "Define audience and visualize the user experience journey.",
    },
    {
      step: "3. Sketch user flows & wireframes",
      description: "Map out main screens and their logical navigation paths.",
    },
    {
      step: "4. Build low-fidelity mockups",
      description: "Design layout without colors or styles to plan structure.",
    },
    {
      step: "5. Create high-fidelity mockups in Figma",
      description: "Design detailed, polished UI screens with real content.",
    },
    {
      step: "6. User testing & iteration",
      description:
        "Validate the UI with real users and improve based on feedback.",
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
