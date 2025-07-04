// src/components/layout/Navbar.tsx
import { FloatingDock } from "@/components/ui/floating-dock";
import { NavbarRoutes } from "@/routes/NavbarRoutes";


export default function Navbar() {
  return (
    <div className="absolute top-4 right-4 z-50 flex items-center gap-4">
   
      <FloatingDock items={NavbarRoutes} />
    </div>
  );
}
