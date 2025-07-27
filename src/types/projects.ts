// src/data/project.ts
/*import Dormitory from "@/assets/images/Dormitory.jpg";
import drive from "@/assets/images/DriveEase.jpg";
import photo from "@/assets/images/photoStudios.png";*/

//gym
import gym from "@/assets/images/gym-management/gym.png";
import dashboard from "@/assets/images/gym-management/dashboard.jpg";
import profileManagement from "@/assets/images/gym-management/profile-management.jpg";
import paymentLogs from "@/assets/images/gym-management/payment-logs.jpg";
import systemSettings from "@/assets/images/gym-management/system-settings.jpg";
import userDashboard from "@/assets/images/gym-management/user-dashboard.png";
import userLogs from "@/assets/images/gym-management/user-logs.png";

//aignition
import aignitionMain from "@/assets/images/aignition/main.png";

//aignition feature images
import aignitionLanding from "@/assets/images/aignition/landing-about.png";
import aignitionSummerCamp from "@/assets/images/aignition/landing-summer-camp.png";
import aignitionTimeline from "@/assets/images/aignition/landing-timeline.png";
import aignitionContact from "@/assets/images/aignition/landing-contact.png";
import aignitionLogin from "@/assets/images/aignition/landing-login.png";
import aignitionRegister from "@/assets/images/aignition/landing-register.png";
import aignitionAdminDashboard from "@/assets/images/aignition/admin-dashboard.png";
import contactManagement from "@/assets/images/aignition/contact-management-dashboard.png";
import contentManagement from "@/assets/images/aignition/content-management-dashboard.png";
import contestManagement from "@/assets/images/aignition/contest-management-dashboard.png";
import contestantManagement from "@/assets/images/aignition/contestant-management-dashboard.png";
import programManagement from "@/assets/images/aignition/program-management-dashboard.png";
import userManagement from "@/assets/images/aignition/user-management-dashboard.png";
import userPortalDashboard from "@/assets/images/aignition/user-portal-dashboard.png";
import userPortalContent from "@/assets/images/aignition/user-portal-content.png";

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
    title: "Gym Management System",
    description:
      "A comprehensive gym management platform that streamlines operations through smart technology, featuring automated check-ins, payment tracking, and centralized member management for enhanced operational efficiency.",
    github: "https://github.com/AllenDG/gym_frontend",
    live: "https://gym-frontend-lac.vercel.app/login",
    tag: "Development",
    image: gym,
    techStack: ["ReactJS", "TypeScript", "Tailwind CSS", "Zustand", "Supabase"],
    story:
      "This comprehensive gym management platform was developed to address critical operational inefficiencies faced by a local fitness facility. The client was struggling with manual processes scattered check-in sheets, paper-based payment records, and disorganized member information that consumed valuable time and reduced focus on core business activities. The existing workflow relied heavily on manual administration, creating bottlenecks in daily operations where staff spent excessive time tracking member check-ins, managing payment schedules, and maintaining member records across multiple disconnected systems.",
    impact:
      "The implementation delivered significant operational improvements, transforming hours of daily administrative tasks into automated workflows. Staff can now focus on member engagement and service delivery rather than manual data entry. The centralized system provides complete operational visibility, enabling better resource allocation and strategic planning. The platform successfully transformed paper based processes into efficient digital workflows, demonstrating measurable improvements in both operational efficiency and member satisfaction.",
    role: "webdev",
    challenges:
      "The primary challenge was designing a system that could replace deeply ingrained manual processes while serving users with varying levels of technical familiarity. Creating an intuitive interface that staff could adopt quickly was crucial for successful implementation. On the technical side, implementing real-time data synchronization for check-ins and ensuring data accuracy across attendance and payment logs required robust state management and reliable database integration. Security was paramount, particularly around user authentication, admin privileges, and sensitive member information protection.",
    goal: [
      "Transform manual gym operations into efficient digital workflows by eliminating scattered check-in sheets, paper-based payment records, and disconnected member information systems.",
      "Provide gym staff with a centralized platform that reduces administrative overhead and allows focus on core business activities like member engagement and service delivery.",
      "Deliver actionable business insights through comprehensive reporting and data visualization tools that support strategic decision-making and growth planning.",
      "Create a scalable, maintainable solution built with modern development practices and clean architecture that can adapt to future business needs and expansion.",
    ],
    keyResponsibilities:
      "Led frontend development and UI/UX design of the entire system, creating intuitive user interfaces and seamless user experiences for both admin and member portals. Designed and implemented responsive UI components, developed the complete frontend architecture, connected to Supabase APIs using Zustand for state management, and implemented real-time data handling, user authentication systems, and comprehensive testing protocols to ensure reliable production deployment.",

    features: [
      "Dashboard with real-time operational insights",
      "Automated member check-in and attendance tracking",
      "Comprehensive payment management and renewal notifications",
      "Advanced reporting and data visualization tools",
      "Mobile-responsive design for cross-device accessibility",
      "Secure user authentication and role-based access control",
      "Member profile management and activity history",
      "System settings and configuration management",
    ],
    takeaways:
      "This project significantly enhanced my understanding of developing solutions for real-world business challenges while working collaboratively in a team environment. I gained valuable experience in stakeholder communication, requirements gathering, and translating business needs into technical specifications. The collaborative development process improved my skills in code coordination, task delegation, and maintaining consistent design standards across team contributions. The project strengthened my technical abilities in real-time data handling, third-party service integration, and creating user-centric interfaces that prioritize both functionality and accessibility. Most importantly, I learned how thoughtful technology implementation combined with effective teamwork can create measurable business impact and operational transformation.",
    contributors: [
      {
        name: "Allen Walter De Guzman",
        avatar: "/avatars/allen.png",
      },
      {
        name: "Dave Charm Bulaquenia",
        avatar: "/avatars/allen.png",
      },
    ],
    featureImages: [
      {
        image: gym, 
        label: "User- Login Page",
      },
      {
        image: userDashboard,
        label: "User- User Dashboard",
      },
      {
        image: userLogs,
        label: "User - User Logs",
      },
      {
        image: dashboard,
        label: "Admin - Dashboard",
      },
      {
        image: profileManagement,
        label: "Admin - Profile Management",
      },
      {
        image: paymentLogs,
        label: "Admin - Payment Logs",
      },
      {
        image: systemSettings,
        label: "Admin - System Settings",
      },
    ],
  },

  {
    title: "Aignition Global Education Alliance",
    description:
      "A comprehensive web-based ecosystem designed to streamline and enhance the management, participation, and analysis of global academic competitions. Features a public website, participant portal, and advanced admin dashboard for managing contests, programs, and educational initiatives worldwide.",
    github: "https://github.com/AllenDG/aignition_frontend", // Update with actual repo
    live: "https://aignition-platform.vercel.app", // Update with actual live link
    tag: "Development",
    image: aignitionMain, // Update with actual image path
    techStack: [
      "ReactJS",
      "TypeScript",
      "Tailwind CSS",
      "Zustand",
      "Supabase",
      "JotForm Integration",
    ],
    story:
      "The Aignition Global Education Alliance project represents a ambitious initiative to revolutionize global academic competition management through technology. Developed for an educational organization focused on empowering youth through innovation and collaboration, this comprehensive ecosystem addresses the complex challenges of managing international academic competitions like the Amerasian Tesla Olympiad. The platform needed to serve multiple stakeholders: the general public seeking information about competitions, participants managing their contest journey, and administrators overseeing complex operational workflows including contestant verification, scoring, awarding, and content management across multiple educational programs and summer camps.",
    impact:
      "The platform successfully digitized and streamlined the entire academic competition lifecycle, from public engagement to final awarding ceremonies. The system enhanced operational efficiency by providing automated contestant verification, real-time scoring management, and comprehensive reporting capabilities. Participants gained access to a centralized portal for contest registration, schedule tracking, and results viewing, while administrators benefited from powerful tools for managing complex multi-round competitions, summer programs, and global educational initiatives. The solution significantly improved the user experience for international participants and reduced administrative overhead for competition organizers.",
    role: "webdev",
    challenges:
      "Building a platform that serves diverse user groups with varying technical expertise presented significant UX design challenges. Creating intuitive interfaces for participants from different educational backgrounds while providing sophisticated administrative tools required careful information architecture planning. Technical challenges included implementing complex ranking systems with configurable scoring methods, managing multi-round contest workflows, integrating third-party services like JotForm for registration, and ensuring real-time data synchronization across participant and admin portals. Security was paramount given the sensitive nature of contest data, participant information, and competition integrity requirements.",
    goal: [
      "Create a unified digital ecosystem that transforms traditional paper-based academic competition management into efficient, scalable online workflows supporting global educational initiatives.",
      "Develop user-centric interfaces that serve three distinct user groups: general public visitors, competition participants, and administrative staff, each with tailored experiences and functionality.",
      "Implement comprehensive contest management capabilities including automated verification systems, flexible scoring mechanisms, real-time ranking updates, and detailed reporting tools for educational program analysis.",
      "Build a scalable architecture that can accommodate multiple competition types, summer programs, and educational initiatives while maintaining data integrity and security standards for international academic competitions.",
    ],
    keyResponsibilities:
     "Collaborated with a development team as a UI/UX designer and frontend developer across all three platform modules: main website, participant portal, and admin dashboard. Contributed to designing and implementing responsive user interfaces for complex workflows including contest registration, participant verification, scoring management, and content administration.", 
    features: [
      "Multi-module ecosystem with public website, participant portal, and admin dashboard",
      "Comprehensive contest management with multi-round competition support",
      "Automated participant verification and scoring systems",
      "Real-time ranking and award distribution capabilities",
      "Integrated summer camp and educational program management",
      "Advanced content management system for dynamic website updates",
      "Role-based authentication with secure access controls",
      "Third-party integrations for registration and form handling",
      "Responsive design optimized for global accessibility",
      "Comprehensive notification and communication systems",
      "Detailed analytics and reporting dashboards",
      "Batch processing tools for efficient administrative workflows",
    ],
    takeaways:
      "This project significantly enhanced my understanding of developing solutions for real-world business challenges while working collaboratively in a team environment. I gained valuable experience in stakeholder communication, requirements gathering, and translating business needs into technical specifications. The collaborative development process improved my skills in code coordination, task delegation, and maintaining consistent design standards across team contributions. The project strengthened my technical abilities in real-time data handling, third-party service integration, and creating user-centric interfaces that prioritize both functionality and accessibility. Most importantly, I learned how thoughtful technology implementation combined with effective teamwork can create measurable business impact and operational transformation.",
    contributors: [
      {
        name: "Allen Walter De Guzman",
        avatar: "/avatars/allen.png",
      },
      // Add other contributors as needed
    ],
    featureImages: [
      {
        image: aignitionLogin,
        label: "User- Login Page",
      },
      {
        image: aignitionRegister,
        label: "User- Register Page",
      },
      {
        image: aignitionLanding,
        label: "User- About Page",
      },
      {
        image: aignitionSummerCamp,
        label: "User- Summer Camp Page",
      },
      {
        image: aignitionTimeline,
        label: "User- Timeline Page",
      },
      {
        image: aignitionContact,
        label: "User- Contact Page",
      },

      //user portal
      {
        image: userPortalDashboard,
        label: "UserPortal- User Portal Dashboard",
      },
      {
        image: userPortalContent,
        label: "UserPortal- User Portal Contests",
      },

      //admin
      {
        image: aignitionAdminDashboard,
        label: "Admin- Admin Dashboard",
      },
      {
        image: userManagement,
        label: "Admin- User Management ",
      },
      {
        image: programManagement,
        label: "Admin- Program Management",
      },
      {
        image: contestManagement,
        label: "Admin- Contest Management",
      },
      {
        image: contestantManagement,
        label: "Admin- Contestant Management",
      },
      {
        image: contentManagement,
        label: "Admin- Content Management",
      },
      {
        image: contactManagement,
        label: "Admin- Contact Management",
      },
    ],
  },
];
