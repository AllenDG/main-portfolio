import CautionCard from "@/components/ui/caution-card";
import BannerWork from "./screens/BannerWork";
import WorkLayout from "./screens/WorkLayout";

export default function WorkPage() {
  return (
    <main className="flex flex-col w-full">
      <div className="mb-8">
        <BannerWork />
      </div>

        <div className="px-6 sm:px-8 md:px-10 pt-10">
        <CautionCard message="Some of the projects showcased here were developed for real clients. For privacy and security reasons, sensitive credentials, internal dashboards, or full access are restricted." />
      </div>

      <div className="mb-8">
        <WorkLayout/>
      </div>
    </main>
  );
}
