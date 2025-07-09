"use client";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  category: "all" | "uiux" | "webdev";
  setCategory: (val: "all" | "uiux" | "webdev") => void;
};

export default function DropFilter({ category, setCategory }: Props) {
  return (
    <div className="w-full sm:w-48">
      <Select
        value={category}
        onValueChange={(val) => setCategory(val as never)}
      >
        <SelectTrigger className="w-full">
          <SelectValue placeholder="Filter by" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All</SelectItem>
          <SelectItem value="uiux">UI/UX</SelectItem>
          <SelectItem value="webdev">Web Dev</SelectItem>
        </SelectContent>
      </Select>
    </div>
  );
}
