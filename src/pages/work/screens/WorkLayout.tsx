import { useState } from "react";
import ViewToggle from "../components/ViewToggle";
import CardView from "../components/CardView";
import ListView from "../components/ListView";

import DropFilter from "../components/DropFilter";
import SearchBar from "../components/SearchBar";


export default function WorkLayout() {
  const [viewMode, setViewMode] = useState<"card" | "list">("card");

  return (
    <section className="w-full py-20 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-48 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Header */}
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            My Projects
          </h2>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          {/* Left: Search */}
          <SearchBar />

          {/* Right: View & Dropdown */}
          <div className="flex items-center gap-3">
            <DropFilter />
            <ViewToggle view={viewMode} onChange={setViewMode} />
          </div>
        </div>

        {/* Project View */}
        <div className="w-full">
          {viewMode === "card" ? <CardView /> : <ListView />}
        </div>
      </div>
    </section>
  );
}
