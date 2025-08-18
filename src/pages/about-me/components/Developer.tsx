export default function Developer() {
  const steps = [
    {
      step: "1. Gather functional requirements",
      description:
        "Understand what features need to be built, who the users are, and define clear acceptance criteria.",
    },
    {
      step: "2. Plan clean layered architecture",
      description:
        "Separate concerns into presentation (UI), application logic, and data layers for scalability and maintainability.",
    },
    {
      step: "3. Setup project with Vite & libraries",
      description:
        "Initialize with Vite for fast builds, configure Tailwind CSS and ShadCN UI for modern styling, and install required libraries.",
    },
    {
      step: "4. Setup routes & navigation",
      description:
        "Use React Router (or Next.js routing) to structure pages, nested layouts, and dynamic routes.",
    },
    {
      step: "5. Break down UI into components",
      description:
        "Design reusable and accessible components with Tailwind CSS, ShadCN, and modern CSS utilities.",
    },
    {
      step: "6. Build responsive layout",
      description:
        "Ensure mobile-first design and adapt layouts across devices using grid, flex, and responsive utilities.",
    },
    {
      step: "7. Integrate backend APIs",
      description:
        "Connect UI to live data sources, handle loading states, error boundaries, and caching where needed.",
    },
    {
      step: "8. Test and optimize",
      description:
        "Validate functionality with unit and integration tests, improve performance, and check accessibility compliance.",
    },
    {
      step: "9. Deploy & maintain",
      description:
        "Deploy to Vercel/Netlify, monitor performance, and continuously improve with CI/CD pipelines.",
    },
  ];

  return (
    <div className="space-y-6">
      {steps.map((item, index) => (
        <div
          key={index}
          className="border border-border rounded-lg px-5 py-4 bg-background hover:shadow-lg transition-all"
        >
          <h4 className="text-foreground font-semibold mb-1">{item.step}</h4>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
