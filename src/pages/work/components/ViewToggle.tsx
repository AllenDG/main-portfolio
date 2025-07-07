import { Button } from "@/components/ui/button";
import { LayoutGrid, List } from "lucide-react";
import { cn } from "@/lib/utils";

type ViewMode = "card" | "list";

interface ViewToggleProps {
  view: ViewMode;
  onChange: (view: ViewMode) => void;
}

export default function ViewToggle({ view, onChange }: ViewToggleProps) {
  return (
    <div className="flex gap-2">
      <Button
        variant={view === "card" ? "default" : "outline"}
        size="icon"
        className={cn(
          "transition-all",
          view === "card" && "bg-primary text-white"
        )}
        onClick={() => onChange("card")}
        aria-label="Card View"
      >
        <LayoutGrid className="w-5 h-5" />
      </Button>

      <Button
        variant={view === "list" ? "default" : "outline"}
        size="icon"
        className={cn(
          "transition-all",
          view === "list" && "bg-primary text-white"
        )}
        onClick={() => onChange("list")}
        aria-label="List View"
      >
        <List className="w-5 h-5" />
      </Button>
    </div>
  );
}
