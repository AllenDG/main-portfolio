"use client";
import { Input } from "@/components/ui/input";

type Props = {
  searchTerm: string;
  setSearchTerm: (val: string) => void;
};

export default function SearchBar({ searchTerm, setSearchTerm }: Props) {
  return (
    <div className="w-full sm:w-1/2">
      <Input
        type="text"
        placeholder="Search projects..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="w-full"
      />
    </div>
  );
}
