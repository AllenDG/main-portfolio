// components/ui/AnimatedAvatarTooltip.tsx

"use client";

import React, { useState, useRef } from "react";
import {
  motion,
  useMotionValue,
  useTransform,
  useSpring,
  AnimatePresence,
} from "motion/react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Contributor = {
  id: number;
  name: string;
  designation: string; // changed from role to match original type
  image: string; // changed from avatar
};

export function AnimatedAvatarTooltip({ items }: { items: Contributor[] }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const x = useMotionValue(0);
  const animationFrameRef = useRef<number | null>(null);
  const springConfig = { stiffness: 100, damping: 15 };

  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );

  const handleMouseMove = (event: React.MouseEvent<HTMLImageElement>) => {
    if (animationFrameRef.current)
      cancelAnimationFrame(animationFrameRef.current);
    animationFrameRef.current = requestAnimationFrame(() => {
      const halfWidth = event.currentTarget.offsetWidth / 2;
      x.set(event.nativeEvent.offsetX - halfWidth);
    });
  };

  return (
    <div className="flex gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="group relative"
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: { type: "spring", stiffness: 260, damping: 10 },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX,
                  rotate,
                  whiteSpace: "nowrap",
                  pointerEvents: "none",
                }}
                className="absolute -top-16 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-4 py-2 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-base font-bold text-white">
                  {item.name}
                </div>
                {item.designation && (
                  <div className="text-xs text-white">{item.designation}</div>
                )}
              </motion.div>
            )}
          </AnimatePresence>

          <Avatar className="h-14 w-14 group-hover:z-30 group-hover:scale-105 transition duration-500">
            <AvatarImage
              src={item.image}
              alt={item.name}
              onMouseMove={handleMouseMove}
            />
            <AvatarFallback>
              {item.name.slice(0, 2).toUpperCase()}
            </AvatarFallback>
          </Avatar>
        </div>
      ))}
    </div>
  );
}
