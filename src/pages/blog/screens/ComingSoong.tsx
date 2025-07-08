import { motion } from "framer-motion";

export default function ComingSoon() {
  return (
    <section className="w-full min-h-[60vh] flex flex-col items-center justify-center px-6 text-center space-y-6 bg-background border border-border rounded-2xl shadow-sm">
      <motion.h1
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-foreground"
      >
        Blog Section Coming Soon 🚀
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="text-muted-foreground max-w-xl text-base"
      >
        I’m currently working on writing and designing this page. Soon, you'll
        be able to explore my thoughts on design, development, and everything in
        between.
      </motion.p>

      <motion.span
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="text-sm text-muted-foreground italic"
      >
          Stay tuned — something insightful is on its way.
      </motion.span>
    </section>
  );
}
