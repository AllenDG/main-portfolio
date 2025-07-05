// src/components/ui/TypeWriterTitle.tsx
import Typewriter from "typewriter-effect";

interface TypeWriterTitleProps {
  className?: string;
}

export default function TypeWriterTitle({ className = "" }: TypeWriterTitleProps) {
  return (
    <span className={`inline-block text-primary dark:text-white ${className}`}>
      <Typewriter
        options={{
          strings: ["Web Designer", "UI/UX", "Frontend Developer"],
          autoStart: true,
          loop: true,
          delay: 75,
          deleteSpeed: 40,
        }}
      />
    </span>
  );
}
