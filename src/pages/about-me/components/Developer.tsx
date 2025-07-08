export default function Developer() {
  const steps = [
    {
      step: "1. Gather functional requirements",
      description: "Understand what features need to be built and how they work.",
    },
    {
      step: "2. Break down UI into components",
      description: "Plan the component hierarchy and reusability.",
    },
    {
      step: "3. Build responsive layout",
      description: "Structure the UI using Tailwind CSS for all screen sizes.",
    },
    {
      step: "4. Integrate backend APIs",
      description: "Connect the UI to live data and handle loading states.",
    },
    {
      step: "5. Test and optimize",
      description: "Ensure accessibility, responsiveness, and clean code.",
    },
    {
      step: "6. Deploy & maintain",
      description: "Launch the project on Vercel or Netlify and monitor performance.",
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
