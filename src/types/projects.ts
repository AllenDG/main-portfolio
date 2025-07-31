// ─── Image Imports ──────────────────────────────────────────────

// Gym Management
import gym from "@/assets/images/gym-management/gym.png";
import dashboard from "@/assets/images/gym-management/dashboard.jpg";
import profileManagement from "@/assets/images/gym-management/profile-management.jpg";
import paymentLogs from "@/assets/images/gym-management/payment-logs.jpg";
import systemSettings from "@/assets/images/gym-management/system-settings.jpg";
import userDashboard from "@/assets/images/gym-management/user-dashboard.png";
import userLogs from "@/assets/images/gym-management/user-logs.png";

// Aignition Global Education
import aignitionMain from "@/assets/images/aignition/main.png";
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
import { contributorsData, type ProjectTitle } from "./avatar";

// ─── Utility ────────────────────────────────────────────────────

const getContributors = (title: string) => {
  return (
    contributorsData[title as ProjectTitle]?.map((c) => ({
      name: c.name,
      avatar: c.image,
      designation: c.designation,
    })) ?? []
  );
};

// ─── Type Definitions ──────────────────────────────────────────

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

// ─── Project Data ──────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Gym Management System",
    description:
      "A comprehensive gym management platform that streamlines operations through smart technology, transforming traditional manual processes into efficient digital workflows that enhance both administrative efficiency and member experience.",
    github: "https://github.com/AllenDG/gym_frontend",
    live: "https://gym-frontend-lac.vercel.app/login",
    tag: "Development",
    image: gym,
    techStack: ["ReactJS", "Supabase", "Tailwind CSS", "TypeScript", "Zustand"],

    story:
      "This comprehensive gym management platform was developed to address critical operational inefficiencies that plagued traditional fitness facilities. The project emerged from observing how manual processes created bottlenecks in member management, payment tracking, and operational reporting. By designing a digital-first solution, I transformed these pain points into streamlined workflows that not only improved day-to-day operations but also provided valuable insights for business growth and decision-making.",

    impact:
      "The implementation delivered significant operational improvements across all aspects of gym management. Administrative tasks that previously consumed hours of manual work were automated, allowing staff to focus on member service and facility improvement. The real-time reporting capabilities provided management with actionable insights into membership trends, payment patterns, and facility usage, enabling data-driven decisions that improved both operational efficiency and member satisfaction.",

    role: "webdev",

    challenges:
      "The primary challenge was designing a system that could replace deeply ingrained manual processes while ensuring seamless adoption by staff members with varying levels of technical expertise. Additionally, maintaining data integrity during the transition from paper-based records to digital systems required careful planning and implementation. Balancing comprehensive functionality with user-friendly interfaces demanded constant iteration and feedback incorporation to create a solution that was both powerful and intuitive.",

    goal: [
      "Transform manual gym operations into efficient digital workflows that reduce administrative overhead and human error",
      "Provide gym staff with a centralized platform for managing all aspects of member relationships and facility operations",
      "Deliver actionable business insights through real-time reporting and analytics capabilities",
      "Create a scalable, maintainable solution that can adapt to growing business needs and future feature requirements",
    ],

    keyResponsibilities:
      "Led frontend development and UI/UX design of the entire system, taking ownership of the complete user experience from initial wireframes to final implementation. Collaborated closely with gym management to understand operational workflows and translate business requirements into technical specifications. Conducted user research and testing sessions to ensure the platform met real-world usage patterns and successfully facilitated the transition from manual to digital processes.",

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
      "This project significantly enhanced my understanding of developing solutions for real-world business challenges, particularly in environments where technology adoption requires careful change management. I gained valuable experience in stakeholder communication, user research methodologies, and the importance of iterative design in creating truly user-centered solutions. The project deepened my technical skills in building scalable React applications while reinforcing the critical importance of translating business needs into intuitive digital experiences that drive actual operational improvements.",

    contributors: getContributors("Gym Management System"),

    featureImages: [
      { image: gym, label: "User- Login Page" },
      { image: userDashboard, label: "User- User Dashboard" },
      { image: userLogs, label: "User - User Logs" },
      { image: dashboard, label: "Admin - Dashboard" },
      { image: profileManagement, label: "Admin - Profile Management" },
      { image: paymentLogs, label: "Admin - Payment Logs" },
      { image: systemSettings, label: "Admin - System Settings" },
    ],
  },

  {
    title: "Aignition Global Education Alliance",
    description:
      "A comprehensive web-based ecosystem designed to streamline and enhance academic competition management for educational institutions globally. This multi-platform solution integrates public engagement, participant management, and administrative oversight into a cohesive digital experience that serves diverse stakeholders across international educational programs.",
    github: "https://github.com/AllenDG/aignition_frontend",
    live: "https://aignition-platform.vercel.app",
    tag: "Development",
    image: aignitionMain,
    techStack: [
      "JotForm Integration",
      "ReactJS",
      "Supabase",
      "Tailwind CSS",
      "TypeScript",
      "Zustand",
    ],

    story:
      "The Aignition Global Education Alliance project represents an ambitious initiative to revolutionize global academic competition management through thoughtful digital transformation. Born from the recognition that traditional competition administration was fragmented and inefficient, this platform was conceived to create a unified ecosystem that could seamlessly serve multiple stakeholder groups while maintaining the integrity and excitement of academic competitions. The project required careful consideration of diverse user needs, from students participating in contests to administrators managing complex international programs.",

    impact:
      "The platform successfully digitized and streamlined the entire academic competition lifecycle, creating a seamless experience that spans from initial program discovery to final award distribution. By automating previously manual processes and providing real-time visibility into competition progress, the system eliminated administrative bottlenecks while ensuring fair and transparent evaluation processes. The integrated approach enabled the organization to scale their educational programs more effectively while maintaining high standards of participant engagement and administrative oversight.",

    role: "webdev",

    challenges:
      "Building a platform that serves diverse user groups with varying technical expertise presented significant UX design challenges, requiring careful balance between functionality and accessibility. The complexity of managing multiple competition formats, scoring systems, and participant verification processes demanded robust system architecture and careful data modeling. Additionally, ensuring seamless integration with third-party services while maintaining system reliability and security across international usage patterns required extensive testing and optimization.",

    goal: [
      "Create a unified digital ecosystem that integrates public outreach, participant engagement, and administrative management into one cohesive platform",
      "Develop user-centric interfaces for public visitors, competition participants, and program administrators that prioritize usability and accessibility",
      "Implement comprehensive contest management capabilities that support multiple competition formats and complex evaluation criteria",
      "Build a scalable architecture that can accommodate growing participation and expanding program offerings across global markets",
    ],

    keyResponsibilities:
      "Collaborated with a development team as a UI/UX designer and frontend developer, contributing to architectural decisions and leading the implementation of user-facing features. Participated in requirements gathering sessions with stakeholders to ensure the platform addressed real-world operational needs. Focused on creating consistent user experiences across the three distinct platform modules while maintaining code quality and performance standards throughout the collaborative development process.",

    features: [
      "Multi-module ecosystem with public website, participant portal, and admin dashboard",
      "Comprehensive contest management with multi-round competition support",
      "Automated participant verification and scoring systems",
      "Real-time ranking and award distribution capabilities",
      "Integrated summer camp and educational program management",
      "Advanced content management system",
      "Role-based authentication and access control",
      "Third-party integrations for registration",
      "Responsive design for global accessibility",
      "Comprehensive notification and communication system",
      "Detailed analytics and reporting dashboards",
      "Batch processing tools for admins",
    ],

    takeaways:
      "This project significantly enhanced my understanding of developing solutions for real-world business challenges while working collaboratively in a team environment. I gained valuable experience in stakeholder communication, requirements gathering, and translating business needs into technical specifications that could be effectively implemented by a development team. The collaborative development process improved my skills in code coordination, task delegation, and maintaining consistent design standards across team contributions. The project strengthened my technical abilities in real-time data handling, third-party service integration, and creating user-centric interfaces that prioritize both functionality and accessibility. Most importantly, I learned how thoughtful technology implementation combined with effective teamwork can create measurable business impact and operational transformation.",

    contributors: getContributors("Aignition Global Education Alliance"),

    featureImages: [
      { image: aignitionLogin, label: "User- Login Page" },
      { image: aignitionRegister, label: "User- Register Page" },
      { image: aignitionLanding, label: "User- About Page" },
      { image: aignitionSummerCamp, label: "User- Summer Camp Page" },
      { image: aignitionTimeline, label: "User- Timeline Page" },
      { image: aignitionContact, label: "User- Contact Page" },
      {
        image: userPortalDashboard,
        label: "UserPortal- User Portal Dashboard",
      },
      { image: userPortalContent, label: "UserPortal- User Portal Contests" },
      { image: aignitionAdminDashboard, label: "Admin- Admin Dashboard" },
      { image: userManagement, label: "Admin- User Management" },
      { image: programManagement, label: "Admin- Program Management" },
      { image: contestManagement, label: "Admin- Contest Management" },
      { image: contestantManagement, label: "Admin- Contestant Management" },
      { image: contentManagement, label: "Admin- Content Management" },
      { image: contactManagement, label: "Admin- Contact Management" },
    ],
  },
];
