import { useState } from "react";
import { cn } from "@/lib/utils";

const funFacts = [
  {
    description:
      "I enjoy singing and playing instruments like guitar and ukulele. During college, I joined bands and performed at gigs.",
  },
  {
    description:
      "I play FPS, rhythm games, MMORPGs, and horror genres. Gaming is a way for me to unwind and challenge my mind.",
  },
  {
    description:
      "Fitness is important to me. Going to the gym helps me stay healthy, clear my mind, and stay motivated.",
  },
];

export default function FunFacts() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20 space-y-10">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-foreground">
          Fun Facts About Me
        </h2>
        <p className="text-muted-foreground max-w-2xl mx-auto text-base">
          When I’m not designing or coding, I enjoy a range of hobbies that keep
          me inspired and balanced.
        </p>
        <p className="text-sm text-muted-foreground italic">
          👉 Please click on the cards to reveal more fun facts.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {funFacts.map((fact, idx) => (
          <div
            key={idx}
            className="relative w-full h-72 cursor-pointer [perspective:1000px]"
            onClick={() => handleFlip(idx)}
          >
            <div
              className={cn(
                "relative h-full w-full rounded-2xl shadow-md transition-transform duration-700 [transform-style:preserve-3d]",
                flippedIndex === idx && "rotate-y-180"
              )}
            >
              {/* Front */}
              <div className="absolute inset-0 z-20 flex items-center justify-center px-4 text-xl font-semibold text-foreground bg-white dark:bg-neutral-900 border border-border rounded-2xl backface-hidden">
                Click Me
              </div>

              {/* Back */}
              <div className="absolute inset-0 z-10 flex items-center justify-center px-6 text-sm text-center text-muted-foreground bg-white dark:bg-neutral-800 border border-border rounded-2xl rotate-y-180 backface-hidden">
                {fact.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
