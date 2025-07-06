// components/CvButton.tsx
"use client";

import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { motion } from "framer-motion";

export default function CvButton() {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <a href="/cv/allen-cv.pdf" download>
        <Button
          variant="default"
          className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl shadow-lg transition-all hover:scale-105 hover:bg-primary/90"
        >
          <Download className="w-5 h-5 transition-transform group-hover:rotate-[-15deg]" />
          Download CV
        </Button>
      </a>
    </motion.div>
  );
}
