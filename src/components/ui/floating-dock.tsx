// src/components/ui/FloatingDock.tsx
import { cn } from "@/lib/utils";
import {
  AnimatePresence,
  MotionValue,
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

interface DockItem {
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}

export const FloatingDock = ({
  items,
  className,
}: {
  items: DockItem[];
  className?: string;
}) => {
  const mouseY = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseY.set(e.clientY)}
      onMouseLeave={() => mouseY.set(Infinity)}
      className={cn(
        "fixed top-1/2 left-4 -translate-y-1/2 hidden md:flex flex-col gap-4 p-4 rounded-2xl bg-white/90 dark:bg-zinc-900/80 shadow-lg border border-gray-200 dark:border-zinc-700 backdrop-blur-md z-50",
        className
      )}
    >
      {items.map((item) => (
        <VerticalDockItem
          key={item.title}
          mouseY={mouseY}
          title={item.title}
          icon={item.icon}
          href={item.href}
          onClick={item.onClick}
        />
      ))}
      <ThemeToggleItem mouseY={mouseY} />
    </motion.div>
  );
};

function VerticalDockItem({
  mouseY,
  title,
  icon,
  href,
  onClick,
}: {
  mouseY: MotionValue;
  title: string;
  icon: React.ReactNode;
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const distance = useTransform(mouseY, (val) => {
    const bounds = ref.current?.getBoundingClientRect() ?? { y: 0, height: 0 };
    return val - bounds.y - bounds.height / 2;
  });

  const sizeTransform = useTransform(distance, [-100, 0, 100], [48, 72, 48]);
  const iconSizeTransform = useTransform(distance, [-100, 0, 100], [24, 32, 24]);

  const size = useSpring(sizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const iconSize = useSpring(iconSizeTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  const Wrapper = ({ children }: { children: React.ReactNode }) =>
    href ? (
      <Link to={href}>{children}</Link>
    ) : (
      <button onClick={onClick} className="focus:outline-none">
        {children}
      </button>
    );

  return (
    <Wrapper>
      <motion.div
        ref={ref}
        style={{ width: size, height: size }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex items-center justify-center rounded-xl bg-muted transition-colors"
      >
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, x: 6 }}
              animate={{ opacity: 1, x: 12 }}
              exit={{ opacity: 0, x: 6 }}
              className="absolute left-full ml-3 text-sm whitespace-nowrap px-3 py-1 rounded bg-background text-foreground border shadow dark:bg-zinc-900"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>

        <motion.div
          style={{ width: iconSize, height: iconSize }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </Wrapper>
  );
}

function ThemeToggleItem({ mouseY }: { mouseY: MotionValue }) {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <VerticalDockItem
      mouseY={mouseY}
      title={isDark ? "Light Mode" : "Dark Mode"}
      icon={isDark ? <Sun className="text-white" /> : <Moon className="text-black" />}
      onClick={() => setTheme(isDark ? "light" : "dark")}
    />
  );
}