import Accordion from "@/pages/about-me/components/Accordion";
import Designer from "@/pages/about-me/components/Designer";
import Developer from "@/pages/about-me/components/Developer";

export default function ProcessSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-10">
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          How I Turn Ideas Into Meaningful Digital Experiences
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every project I work on is more than just code or design. It’s a
          journey of understanding people, solving real problems, and delivering
          seamless user-first solutions.
        </p>
      </div>

      {/* Accordion */}
      <Accordion
        items={[
          {
            title: "UI/UX Design Process",
            content: <Designer />,
          },
          {
            title: "Frontend Development Process",
            content: <Developer />,
          },
        ]}
      />

      {/* Extra Note Section */}
      <div className="mt-12 mx-auto">
        <div className="border border-border rounded-2xl bg-card/40 shadow-sm p-6 md:p-8">
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            Note: I am familiar with Git flow and experienced in collaboration
            using ticketing tools such as ClickUp. I enjoy contributing in team
            environments and continuously enhance my workflow by applying modern
            development practices, including layered architecture, Vite, and
            modern CSS component libraries. I am also experienced in Agile
            methodology, actively participating in ceremonies such as sprint
            planning, daily standups, retrospectives, and backlog refinement to
            ensure smooth collaboration and continuous delivery.
          </p>
        </div>
      </div>
    </section>
  );
}
