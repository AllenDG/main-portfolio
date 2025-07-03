// src/components/navbar/NavbarList.tsx
import { NavLink } from "react-router-dom";
import { NavbarRoutes } from "@/routes/NavbarRoutes";
import { cn } from "@/lib/utils";

export default function NavbarList() {
  return (
    <nav className="flex flex-col gap-4">
      {NavbarRoutes.map(({ title, href, icon }) => (
        <NavLink
          key={title}
          to={href}
          className={({ isActive }) =>
            cn(
              "group relative flex items-center justify-center w-12 h-12 rounded-xl transition-colors duration-200",
              isActive
                ? "bg-primary text-primary-foreground"
                : "text-muted-foreground hover:bg-accent hover:text-accent-foreground"
            )
          }
        >
          {/* Since icon is already JSX, no need to instantiate */}
          <span className="h-5 w-5 flex items-center justify-center">{icon}</span>
          <span className="absolute left-full ml-3 whitespace-nowrap text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity px-2 py-1 bg-background text-foreground border shadow rounded">
            {title}
          </span>
        </NavLink>
      ))}
    </nav>
  );
}
