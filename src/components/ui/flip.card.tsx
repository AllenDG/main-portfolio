"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";

interface FlipCardProps {
  front: React.ReactNode;
  back: React.ReactNode;
  className?: string;
}

export function FlipCard({ front, back, className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <div
      onClick={() => setFlipped(!flipped)}
      className={cn(
        "w-full h-full [perspective:1000px] cursor-pointer",
        className
      )}
    >
      <div
        className={cn(
          "relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d]",
          flipped && "rotate-y-180"
        )}
      >
        {/* Front Face */}
        <div className="absolute w-full h-full backface-hidden rounded-xl p-6 shadow-md border border-border bg-background text-foreground dark:bg-neutral-900 dark:text-white">
          {front}
        </div>

        {/* Back Face */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180 rounded-xl p-6 shadow-md border border-border bg-muted text-muted-foreground dark:bg-neutral-800 dark:text-gray-300">
          {back}
        </div>
      </div>
    </div>
  );
}
