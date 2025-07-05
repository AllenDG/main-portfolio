import { ThreeDCardDemo } from "../components/ThreeDCardDemo";
import TypeWriter from "../components/TypeWriter";

export default function HeroSection() {
  return (
    <section className="w-full min-h-screen flex flex-col lg:flex-row items-center justify-between gap-12 px-4 py-20 from-background to-muted">
      {/* Left Side - Text */}
      <div className="flex-1 max-w-3xl space-y-6 text-left">
        <p className="text-sm uppercase tracking-widest text-muted-foreground">
          Welcome to my journey
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-foreground">
          Hello, I’m <span className="text-primary">Allen</span> <br />
          <span className="text-primary">
            <TypeWriter className="ml-1" />
          </span>
        </h1>

        <p className="text-base md:text-lg text-muted-foreground max-w-xl">
          I craft user-first digital experiences that connect design and function.
          
        </p>
      </div>

      {/* Right Side - 3D Card */}
      <div className="flex-1 flex justify-center">
        <ThreeDCardDemo />
      </div>
    </section>
  );
}
