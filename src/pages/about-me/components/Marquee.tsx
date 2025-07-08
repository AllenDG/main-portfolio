// components/ui/Marquee.tsx
import { motion } from "framer-motion";

interface MarqueeProps {
  items: string[];
  speed?: number;
}

export default function Marquee({ items, speed = 30 }: MarqueeProps) {
  return (
    <div className="overflow-hidden w-full py-4 border-y border-border bg-muted">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{ x: ["100%", "-100%"] }}
        transition={{
          repeat: Infinity,
          duration: speed,
          ease: "linear",
        }}
      >
        {items.concat(items).map((item, idx) => (
          <span
            key={idx}
            className="text-sm text-muted-foreground font-medium px-4 py-1 rounded bg-background shadow-sm border border-border"
          >
            {item}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
