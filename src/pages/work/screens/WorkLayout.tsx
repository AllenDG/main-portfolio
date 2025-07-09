"use client";
import { useState } from "react";
import ViewToggle from "../components/ViewToggle";
import CardView from "../components/CardView";
import ListView from "../components/ListView";
import DropFilter from "../components/DropFilter";
import SearchBar from "../components/SearchBar";
import { projects } from "@/types/projects";



export default function WorkLayout() {
  const [viewMode, setViewMode] = useState<"card" | "list">("card");
  const [category, setCategory] = useState<"all" | "uiux" | "webdev">("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = category === "all" || project.role === category;
    const matchesSearch = project.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="w-full py-20 px-6 sm:px-10 md:px-16 lg:px-32 xl:px-48 bg-background">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        <div className="text-center sm:text-left space-y-2">
          <h2 className="text-4xl font-bold tracking-tight text-foreground">
            My Projects
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          <div className="flex items-center gap-3">
            <DropFilter category={category} setCategory={setCategory} />
            <ViewToggle view={viewMode} onChange={setViewMode} />
          </div>
        </div>

        <div className="w-full">
          {viewMode === "card" ? (
            <CardView projects={filteredProjects} />
          ) : (
            <ListView projects={filteredProjects} />
          )}
        </div>
      </div>
    </section>
  );
}
