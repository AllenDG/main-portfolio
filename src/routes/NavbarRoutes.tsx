import { Home, BriefcaseBusiness, User, Book, Mail } from "lucide-react";

const iconClass = "w-5 h-5 text-black dark:text-white";

export const NavbarRoutes = [
  {
    title: "Home",
    href: "/app/home-page",
    icon: <Home className={iconClass} />,
  },
  {
    title: "Work",
    href: "/app/work-page",
    icon: <BriefcaseBusiness className={iconClass} />,
  },
  {
    title: "About",
    href: "/app/about-page",
    icon: <User className={iconClass} />,
  },
  {
    title: "Blog",
    href: "/app/blog-page",
    icon: <Book className={iconClass} />,
  },
  {
    title: "Contact",
    href: "/app/contact-page",
    icon: <Mail className={iconClass} />,
  },
];
