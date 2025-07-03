
import { FloatingDock } from "@/components/ui/floating-dock";
import { NavbarRoutes } from "@/routes/NavbarRoutes";

export default function Navbar() {
  return <FloatingDock items={NavbarRoutes} />;
}
