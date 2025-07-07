"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import WorkButton from "../components/WorkButton";


export default function BannerWork() {
  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 bg-background">
      {/* Background Dot Grid */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:18px_18px]",
          "[background-image:radial-gradient(#e5e5e5_1.2px,transparent_1.2px)]",
          "dark:[background-image:radial-gradient(#4b4b4b_1.2px,transparent_1.2px)]"
        )}
      />

      {/* Radial Mask */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl text-center space-y-6">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground"
        >
          Transforming Ideas into Interactive Experiences
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-muted-foreground max-w-xl mx-auto text-base sm:text-lg"
        >
          From wireframes to live sites, here's what I’ve been building lately.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="mt-6"
        >
          <WorkButton />
        </motion.div>
      </div>
    </section>
  );
}
