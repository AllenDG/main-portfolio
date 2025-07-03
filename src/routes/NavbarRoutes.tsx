// src/routes/NavbarRoutes.ts
import { Home, BriefcaseBusiness, User, Book, Mail } from "lucide-react";

export const NavbarRoutes = [
  { title: "Home", href: "/app/home-page", icon: <Home className="w-5 h-5" /> },
  {
    title: "Work",
    href: "/app/work-page",
    icon: <BriefcaseBusiness className="w-5 h-5" />,
  },
  {
    title: "About",
    href: "/app/about-page",
    icon: <User className="w-5 h-5" />,
  },
  {
    title: "Blog",
    href: "/app/blog-page",
    icon: <Book className="w-5 h-5" />,
  },
  {
    title: "Contact",
    href: "/app/contact-page",
    icon: <Mail className="w-5 h-5" />,
  },
];
