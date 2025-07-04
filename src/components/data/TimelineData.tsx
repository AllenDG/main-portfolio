
import timelineJson from "./timelineData.json";

export default function TimelineData() {
  return (
    <div className="p-8 space-y-10">
      {timelineJson.map((item, index) => (
        <div key={index}>
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">
            {item.title}
          </h2>
          {item.sections.map((section, idx) => (
            <div key={idx} className="mb-6">
              <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
                {section.heading}
              </h3>
              <ul className="list-disc list-inside text-sm text-neutral-700 dark:text-neutral-300 mt-2 space-y-1">
                {section.details.map((detail: string, dIdx: number) => (
                  <li key={dIdx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}
