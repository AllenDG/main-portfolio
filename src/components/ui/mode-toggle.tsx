// src/components/ui/mode-toggle.tsx
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
  const { theme, setTheme } = useTheme();

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white transition"
      title="Toggle Theme"
    >
      {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
    </button>
  );
}
