import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function KnowMoreButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/app/about-page");
  };

  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.9, ease: "easeOut" }}
    >
      <Button
        onClick={handleClick}
        variant="outline"
        className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl shadow-md transition-all hover:scale-105 hover:border-primary"
      >
        Know More About Me
        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>
    </motion.div>
  );
}
