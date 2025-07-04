/* eslint-disable @typescript-eslint/no-explicit-any */
// src/components/sections/TimelineDemo.tsx

import timelineJson from "@/components/data/timelineData.json";
import { Timeline } from "@/components/ui/timeline";


export function TimelineDemo() {
  const mappedData = timelineJson.map((entry) => ({
    title: entry.title,
    content: (
      <section>
        {entry.sections.map((section: any, index: number) => (
          <div key={index} className="mb-8">
            <p className="text-3xl font-semibold text-neutral-900 dark:text-white">
              {section.heading}
            </p>
            {section.details.map((detail: string, i: number) => (
              <p
                key={i}
                className="mb-4 text-xs md:text-sm font-normal text-neutral-800 dark:text-neutral-200"
              >
                {detail}
              </p>
            ))}
          </div>
        ))}
      </section>
    ),
  }));

  return (
    <div className="relative w-full overflow-clip">
      <Timeline data={mappedData} />
    </div>
  );
}
