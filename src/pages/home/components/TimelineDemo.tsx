// src/components/sections/TimelineDemo.tsx
import { timelineData } from "@/components/data/timelineData";
import { Timeline } from "@/components/ui/timeline";


export function TimelineDemo() {
  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={timelineData} />
    </div>
  );
}
