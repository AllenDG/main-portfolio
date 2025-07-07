"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function DropFilter() {
  const [category, setCategory] = useState("all");

  return (
    <div className="w-full sm:w-48">
      <Select value={category} onValueChange={setCategory}>
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
