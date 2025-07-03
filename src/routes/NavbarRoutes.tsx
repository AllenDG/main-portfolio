// src/routes/NavbarRoutes.ts
import { Home, BriefcaseBusiness, User, Book, Mail } from "lucide-react";

export const NavbarRoutes = [
  { title: "Home", href: "/", icon: <Home className="w-5 h-5" /> },
  {
    title: "Work",
    href: "/work-page",
    icon: <BriefcaseBusiness className="w-5 h-5" />,
  },
  { title: "About", href: "/about-page", icon: <User className="w-5 h-5" /> },
  { title: "Blog", href: "/blog-page", icon: <Book className="w-5 h-5" /> },
  {
    title: "Contact",
    href: "/contact-page",
    icon: <Mail className="w-5 h-5" />,
  },
];
