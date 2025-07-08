import AboutBanner from "./screens/AboutBanner";
import ProcessSection from "./screens/ProcessSection";


export default function AboutMePage() {
  return (
    <main className="flex flex-col w-full">
      <div className="mb-8">
        <AboutBanner />
      </div>

      <div className="mb-8">
        <ProcessSection/>
      </div>
    </main>
  );
}
