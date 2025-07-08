import Accordion from "@/pages/about-me/components/Accordion";
import Designer from "@/pages/about-me/components/Designer";
import Developer from "@/pages/about-me/components/Developer";

export default function ProcessSection() {
  return (
    <section className="w-full max-w-5xl mx-auto px-6 py-20 space-y-10">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          How I Turn Ideas Into Meaningful Digital Experiences
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Every project I work on is more than just code or design. It’s a journey of
          understanding people, solving real problems, and delivering seamless
          user-first solutions.
        </p>
      </div>

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
    </section>
  );
}
