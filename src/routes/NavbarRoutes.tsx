import { Home, User, Book } from "lucide-react";

const iconClass = "w-5 h-5 text-black dark:text-white";

export const NavbarRoutes = [
  {
    title: "Home",
    href: "/",
    icon: <Home className={iconClass} />,
  },
  {
    title: "About",
    href: "/about",
    icon: <User className={iconClass} />,
  },
  {
    title: "Blog",
    href: "/blog",
    icon: <Book className={iconClass} />,
  },
];
