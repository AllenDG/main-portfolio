"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function WorkButton() {
  const handleClick = () => {
    // Replace with your action or scroll to a section
    window.scrollTo({
      top: document.getElementById("projects")?.offsetTop || 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
      <Button
        variant="default"
        className="inline-flex items-center gap-2 px-6 py-3 rounded-xl shadow-md transition-all"
        onClick={handleClick}
      >
        Let’s Build Something Together
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
}
