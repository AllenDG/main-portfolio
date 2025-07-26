// src/data/project.ts
import Dormitory from "@/assets/images/Dormitory.jpg";
import drive from "@/assets/images/DriveEase.jpg";
import photo from "@/assets/images/photoStudios.png";
import gym from "@/assets/images/gym.png";

export type Contributor = {
  name: string;
  avatar: string;
};

export type FeatureImage = {
  image: string;
  label: string;
};

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
  challenges?: string;
  goal?: string[];
  keyResponsibilities?: string;
  features?: string[];
  takeaways?: string;
  contributors?: Contributor[];
  featureImages?: FeatureImage[];
};

export const projects: Project[] = [
  {
    title: "Gym Management",
    description:
      "A fully functional admin dashboard for gym operations including attendance logs, payment tracking, and user history. Includes user login and daily check-in features.",
    github: "https://github.com/AllenDG/gym_frontend",
    live: "https://gym-frontend-lac.vercel.app/login",
    tag: "Development",
    image: gym,
    techStack: ["ReactJS", "TypeScript", "Tailwind CSS", "Zustand", "Supabase"],
    story:
      "This real world project was developed for a local gym to simplify operations and improve member management. It provides an intuitive dashboard where staff can track check-ins, monitor member activity, and manage payments—all in one place. Designed to reduce manual tasks and enhance operational visibility, the system helps gym owners stay focused on delivering better service while keeping day-to-day processes organized and efficient.",
    impact:
      "Improved operational efficiency by digitizing manual processes. Admins now monitor daily check-ins, view user history, and track payments with ease, while users can navigate to the check-in process for there daily attendance.",
    role: "webdev",
    challenges:
      "Designing and developing a system that serves both admins and regular gym members required careful UX consideration. One challenge was creating a seamless experience for users with varying levels of tech familiarity. On the technical side, implementing real-time updates for check-ins and ensuring data accuracy in attendance and payment logs demanded robust state management and reliable database integration. Ensuring security, especially around user authentication and admin privileges, was also critical.",
    goal: [
      "From the perspective of a gym owner, the goal was to eliminate the hassle of manual tracking and fragmented tools by introducing a system that centralizes member management, payment tracking, and real-time attendance.",
      "For users, the goal was to simplify the check-in experience and allow them to monitor their progress with ease.",
      "On the development side, this project was built with a layered architecture and clean code structure, following best practices to ensure maintainability, scalability, and a professional-grade product delivery.",
    ],
    keyResponsibilities:
      "Developed frontend architecture, integrated Supabase for data handling.",
    features: [
      "Real-time check-in tracking",
      "Attendance and payment logs",
      "User authentication",
    ],
    takeaways:
      "Improved understanding of real-time data handling and third-party integrations.",
    contributors: [
      {
        name: "Allen Walter",
        avatar: "/avatars/allen.png",
      },
    ],
    featureImages: [
      {
        image: "/features/gym-login.png",
        label: "Login Page",
      },
      {
        image: "/features/gym-dashboard.png",
        label: "Dashboard",
      },
    ],
  },
  {
    title: "Drive Ease",
    description:
      "A modern appointment system for car rental bookings with features like real-time availability, vehicle filtering, and booking history.",
    github: "https://github.com/username/driveease",
    live: "https://www.figma.com/proto/D4eiNYldpg84uombuP1ZgU/Untitled?page-id=0%3A1&node-id=30-2365&p=f&viewport=342%2C232%2C0.17&t=zSYHyMj4uAVAJt5o-1&scaling=contain&content-scaling=fixed",
    tag: "Mockup",
    image: drive,
    techStack: ["N/A"],
    story:
      "Drive Ease is a car rental appointment system designed to put users in control of their time and travel needs...",
    impact:
      "Drive Ease significantly reduced the friction involved in traditional car rental processes...",
    role: "uiux",
    challenges:
      "As my first design project, creating Drive Ease was a learning experience...",
    goal: [
      "From the perspective of users needing reliable car rentals, the goal was to make scheduling fast, convenient, and stress-free...",
      "The system was designed to streamline the rental appointment process...",
      "As a mockup project and my first UI/UX design, the goal on the design side was to apply clean user-centered thinking...",
    ],
    keyResponsibilities: "Designed the entire mockups.",
    features: [
      "Landing page with brief intro and visuals",
      "List of available vehicles with filter options",
      "Booking and scheduling interface",
      "Call-to-action (CTA) buttons for appointment and inquiries",
      "Login and registration screens for users",
    ],
    takeaways:
      "Creating Drive Ease as my first design project helped me understand the importance of simplicity and clarity in user experience...",
    contributors: [
      {
        name: "Allen Walter",
        avatar: "/avatars/allen.png",
      },
    ],
    featureImages: [
      {
        image: "/features/driveease-landing.png",
        label: "Landing Page",
      },
      {
        image: "/features/driveease-booking.png",
        label: "Booking Page",
      },
    ],
  },
  {
    title: "Dormitory ",
    description:
      "An apartment and dorm listing platform that allows students and professionals to browse, search, and inquire about rental listings.",
    github: "https://github.com/AllenDG/Web-Dormitory",
    live: "https://web-dormitory.vercel.app",
    tag: "Development",
    image: Dormitory,
    techStack: ["ReactJS", "JavaScript"],
    story:
      "This project was aimed at solving student housing visibility. It features card listings, filtering by price/location, and property inquiries.",
    impact:
      "Helped students and tenants quickly discover nearby dorms and improved listing visibility for property owners.",
    role: "webdev",
    challenges:
      "Designing flexible filtering systems for various user preferences.",
    goal: [
      "From the perspective of students and young professionals, the goal was to simplify the dorm-hunting process by providing a centralized place to explore listings.",
      "The platform aims to connect tenants with verified properties based on price, location, and needs.",
      "From a development perspective, the goal was to build reusable components and filter logic using best practices in ReactJS.",
    ],
    keyResponsibilities:
      "Implemented listing UI, filter logic, and inquiry forms.",
    features: [
      "Interactive property cards",
      "Price/location filters",
      "Inquiry submission",
    ],
    takeaways:
      "Learned how to balance user needs with simplicity in property listings.",
    contributors: [
      {
        name: "Allen Walter",
        avatar: "/avatars/allen.png",
      },
    ],
    featureImages: [
      {
        image: "/features/dormitory-home.png",
        label: "Homepage",
      },
      {
        image: "/features/dormitory-listing.png",
        label: "Listing Page",
      },
    ],
  },
  {
    title: "Photo Studio Website",
    description:
      "A responsive promotional website for a local photo studio business featuring gallery sections, services, and contact forms.",
    github: "https://github.com/AllenDG/Photo-Studio",
    live: "https://photostudio-website.netlify.app/",
    tag: "Development",
    image: photo,
    techStack: ["HTML", "CSS", "JavaScript"],
    story:
      "This static site project focused on performance, aesthetic balance, and SEO fundamentals. Designed for easy updates by non-tech clients.",
    impact:
      "Enabled the client to showcase their portfolio and services online, improving customer inquiries by 60%.",
    role: "webdev",
    challenges:
      "Maintaining responsive design while ensuring fast performance.",
    goal: [
      "From the perspective of the photo studio owner, the goal was to present their services beautifully online and attract more clients.",
      "The site was designed to be responsive and lightweight to ensure high-speed loading.",
      "From a coding standpoint, the goal was to apply clean structure for easier content updates by non-tech-savvy users.",
    ],
    keyResponsibilities: "Coded static pages, optimized for SEO and mobile.",
    features: ["Photo gallery", "Service descriptions", "Contact form"],
    takeaways:
      "Enhanced my skills in static web development and design-to-code translation.",
    contributors: [
      {
        name: "Allen Walter",
        avatar: "/avatars/allen.png",
      },
    ],
    featureImages: [
      {
        image: "/features/photo-home.png",
        label: "Home Page",
      },
      {
        image: "/features/photo-gallery.png",
        label: "Gallery Page",
      },
    ],
  },
];
