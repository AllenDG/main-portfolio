import { cn } from "@/lib/utils";
import { ThreeDCardDemo } from "../components/ThreeDCardDemo";
import TypeWriter from "../components/TypeWriter";
import KnowMoreButton from "../components/Buttons";
import CvButton from "../components/CvButton";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center py-16 px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 overflow-hidden bg-[#f3f3f3] dark:bg-neutral-900">
      {/* Dot Grid Background */}
      <div
        className={cn(
          "absolute inset-0 z-0",
          "[background-size:18px_18px]",
          "[background-image:radial-gradient(#9e9e9e_1.2px,transparent_1.2px)]",
          "dark:[background-image:radial-gradient(#5a5a5a_1.2px,transparent_1.2px)]"
        )}
      />
      {/* Radial Fade Effect */}
      <div className="pointer-events-none absolute inset-0 z-10 flex items-center justify-center bg-[#f3f3f3] [mask-image:radial-gradient(ellipse_at_center,transparent_25%,black)] dark:bg-neutral-900" />

      {/* Content Wrapper */}
      <div className="relative z-20 w-full max-w-7xl flex flex-col-reverse lg:flex-row items-center justify-between gap-12 mb-12">
        {/* Left Side - Text */}
        <div className="flex-1 space-y-8 text-center lg:text-left">
          <p className="text-sm sm:text-base uppercase tracking-[0.25em] text-muted-foreground">
            Welcome to my journey
          </p>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
            Hello, I’m <span className="text-primary">Allen</span>
            <br />
            <span className="text-primary">
              <TypeWriter className="ml-1" />
            </span>
          </h1>

          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto lg:mx-0">
            I craft user-first digital experiences that seamlessly blend design
            and functionality. Whether you're hiring, exploring, or just curious
            — I'm glad you're here.
          </p>

          {/* Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
            <CvButton />
            <KnowMoreButton />
          </div>
        </div>

        {/* Right Side - 3D Card */}
        <div className="flex-1 flex justify-center">
          <ThreeDCardDemo />
        </div>
      </div>
    </section>
  );
}
