import { motion } from "framer-motion";
import { Github, Instagram, Linkedin, Facebook } from "lucide-react";

const socials = [
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    link: "https://www.linkedin.com/in/your-profile",
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    link: "https://github.com/your-username",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    link: "https://instagram.com/your-profile",
  },
  {
    name: "Facebook",
    icon: <Facebook className="w-5 h-5" />,
    link: "https://facebook.com/your-profile",
  },
];

export default function Socials() {
  return (
    <div className="flex gap-4 flex-wrap mt-4">
      {socials.map((social, index) => (
        <motion.a
          key={index}
          href={social.link}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="inline-flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-lg shadow-sm hover:bg-muted transition-colors"
        >
          {social.icon}
          <span className="text-sm font-medium text-foreground">
            {social.name}
          </span>
          
        </motion.a>
      ))}
    </div>
  );
}
