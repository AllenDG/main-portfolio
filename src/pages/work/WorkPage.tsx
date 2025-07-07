import BannerWork from "./screens/BannerWork";
import WorkLayout from "./screens/WorkLayout";

export default function WorkPage() {
  return (
    <main className="flex flex-col w-full">
      <div className="mb-8">
        <BannerWork />
      </div>

      <div className="mb-8">
        <WorkLayout/>
      </div>
    </main>
  );
}
