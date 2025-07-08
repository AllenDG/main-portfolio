import { motion } from "framer-motion";
import Socials from "@/pages/about-me/components/Socials";

export default function AboutBanner() {
  return (
    <section className="w-full max-w-7xl mx-auto px-6 py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* LEFT - IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="w-full h-full"
        >
          <div className="rounded-3xl overflow-hidden shadow-xl ring-1 ring-border">
            <img
              src="https://placehold.co/400x500?text=Your+Image"
              alt="Allen Profile"
              className="w-full h-[500px] object-cover"
            />
          </div>
        </motion.div>

        {/* RIGHT - INTRODUCTION */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-foreground leading-tight">
            Passionate about Design & Frontend Development
          </h2>
          <p className="text-muted-foreground text-base leading-relaxed">
            I'm a detail-oriented UI/UX Designer and Frontend Developer with a
            strong foundation in creating visually engaging and user-friendly
            interfaces. As a graduating IT student, I specialize in turning
            complex problems into simple, intuitive web experiences. I thrive on
            building responsive designs, interactive features, and seamless user
            journeys.
          </p>

          <div>
            <Socials />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
