import { cn } from "@/lib/utils";

export default function DotBackground() {
  return (
    <>
      {/* Dot Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:18px_18px]",
          "[background-image:radial-gradient(#e5e5e5_1.2px,transparent_1.2px)]",
          "dark:[background-image:radial-gradient(#4b4b4b_1.2px,transparent_1.2px)]"
        )}
      />

      {/* Radial Mask Overlay */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
    </>
  );
}
