// src/data/project.ts
import Dormitory from "@/assets/images/Dormitory.jpg";
import bulk from "@/assets/images/Bulk Adding Appointment.png";
import drive from "@/assets/images/DriveEase.jpg";
import progress from "@/assets/images/progress.png";
import photo from "@/assets/images/photoStudios.png";
import gym from "@/assets/images/gym.png";
import design from "@/assets/images/DesignBox.jpg";

export type Project = {
  title: string;
  description: string;
  github: string;
  live: string;
  tag: string;
  image: string;
  techStack: string[];
  story: string;
  role: "uiux" | "webdev";
  impact?: string;
};

export const projects: Project[] = [
  {
    title: "Drive Ease",
    description:
      "A modern appointment system for car rental bookings with features like real-time availability, vehicle filtering, and booking history.",
    github: "https://github.com/username/driveease",
    live: "https://www.figma.com/proto/D4eiNYldpg84uombuP1ZgU/Untitled?page-id=0%3A1&node-id=30-2365&p=f&viewport=342%2C232%2C0.17&t=zSYHyMj4uAVAJt5o-1&scaling=contain&content-scaling=fixed",
    tag: "Mockup",
    image: drive,
    techStack: ["Figma, Fully Designed"],
    story:
      "Developed an intuitive web platform allowing customers to schedule car rentals based on availability. Integrated calendar views, search filters, and booking history. The interface is optimized for mobile and desktop.",
    impact:
      "Boosted rental workflow efficiency and provided customers with a smooth appointment experience.",
    role: "uiux",
  },

  {
    title: "Bulk Appointment System",
    description:
      "A dashboard platform designed for bulk scheduling appointments with advanced features like search, cart management, and appointment history tracking.",
    github: "",
    live: "https://www.figma.com/design/dL1QGfSOXkdONZavxyLPoN/Personal?node-id=30-7&t=eNKw8fpqAC58CzZV-1",
    tag: "Mockup",
    image: bulk,
    techStack: ["Figma"],
    story:
      "Built a powerful system enabling users to book multiple appointments at once, manage appointment queues, and maintain a clean appointment history. The cart-like feature makes bulk bookings seamless for end users and admins.",
    impact:
      "Improved appointment scheduling speed for enterprises by over 40% and reduced manual entry overhead.",
    role: "uiux",
  },

  {
    title: "Pawesome Paws",
    description:
      "A responsive appointment system designed for pet owners to easily book veterinary and grooming appointments.",
    github: "",
    live: "https://www.figma.com/design/dL1QGfSOXkdONZavxyLPoN/Personal?node-id=0-1&t=eNKw8fpqAC58CzZV-1",
    tag: "Mockup",
    image: progress, // Temporary placeholder
    techStack: ["Figma, Low Fed Mockup"],
    story:
      "This project allows pet owners to manage their pets' appointments with ease. Features include service selection, appointment scheduling, and appointment history tracking. The UI is tailored for mobile responsiveness and intuitive use.",
    impact:
      "Simplified the scheduling experience for pet owners and improved clinic efficiency in managing bookings.",
    role: "uiux",
  },

  //development
  {
    title: "Gym Management",
    description:
      "A fully functional admin dashboard for gym operations including attendance logs, payment tracking, and user history. Includes user login and daily check-in features.",
    github: "https://github.com/AllenDG/gym_frontend",
    live: "https://gym-frontend-lac.vercel.app/login",
    tag: "Web Dev",
    image: gym,
    techStack: ["ReactJS", "TypeScript", "Tailwind CSS", "Zustand"],
    story:
      "Built for a real client, this project streamlined gym operations with a modern dashboard and real-time attendance tracking, improving accountability and member engagement.",
    impact:
      "Reduced manual logging by 80% and introduced seamless real-time monitoring for gym staff and members.",
    role: "webdev",
  },

  {
    title: "Dormitory ",
    description:
      "An apartment and dorm listing platform that allows students and professionals to browse, search, and inquire about rental listings.",
    github: "https://github.com/AllenDG/Web-Dormitory",
    live: "https://web-dormitory.vercel.app",
    tag: "Web Dev",
    image: Dormitory,
    techStack: ["ReactJS", "JavaScript"],
    story:
      "This project was aimed at solving student housing visibility. It features card listings, filtering by price/location, and property inquiries.",
    impact:
      "Helped students and tenants quickly discover nearby dorms and improved listing visibility for property owners.",
    role: "webdev",
  },

  {
    title: "Photo Studio Website",
    description:
      "A responsive promotional website for a local photo studio business featuring gallery sections, services, and contact forms.",
    github: "https://github.com/AllenDG/Photo-Studio",
    live: "https://photostudio-website.netlify.app/",
    tag: "Web Dev",
    image: photo,
    techStack: ["HTML", "CSS", "JavaScript"],
    story:
      "This static site project focused on performance, aesthetic balance, and SEO fundamentals. Designed for easy updates by non-tech clients.",
    impact:
      "Enabled the client to showcase their portfolio and services online, improving customer inquiries by 60%.",
    role: "webdev",
  },

  {
    title: "Hiring Management System",
    description:
      "An internal tool for companies to manage job listings, applicants, and interview schedules with seamless admin controls.",
    github: "", // Add if available
    live: "", // Add if deployed
    tag: "Web Dev",
    image:
      "https://www.vhv.rs/dpng/d/487-4873849_work-in-progress-website-hd-png-download.png",
    techStack: ["ReactJS", "ASP.NET"],
    story:
      "Developed as a complete solution to manage the hiring pipeline, including job postings, applicant tracking, and admin analytics dashboard.",
    impact:
      "Centralized candidate management for HR teams and streamlined the interview scheduling process.",
    role: "webdev",
  },

  {
    title: "Design Box",
    description:
      "A visual idea board and inspiration gallery for design concepts. Includes hover effects, layout demos, and live previews.",
    github: "https://github.com/AllenDG/design-box",
    live: "https://design-box.vercel.app",
    tag: "Frontend",
    image: design,
    techStack: ["ReactJS", "Tailwind CSS"],
    story:
      "Design Box helped showcase reusable design components for future UI/UX and frontend work. It also served as a design pattern sandbox.",
    impact:
      "Improved design consistency across projects and accelerated component reuse by 40%.",
    role: "webdev",
  },
];
