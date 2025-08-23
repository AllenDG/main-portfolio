"use client";

import { Instagram, Linkedin, Github } from "lucide-react";

export default function FooterLayout() {
  return (
    <footer className="w-full h-58 bg-background border-t border-muted py-6 px-6 sm:px-12 md:px-20 lg:px-32 xl:px-40 text-muted-foreground">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between mt-12 gap-6 md:gap-4 h-full">
        {/* Left - Name / Logo */}
        <div className="text-center md:text-left text-sm">
          © {new Date().getFullYear()} AllenDG. All rights reserved.
        </div>

        {/* Right - Social Icons */}
        <div className="flex gap-4 ">
          <a
            href="https://www.instagram.com/pickaro_/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/allenwalterdg/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <a
            href="https://github.com/AllenDG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary transition-colors"
          >
            <Github className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
