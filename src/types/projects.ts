// ─── Image Imports ──────────────────────────────────────────────

// Gym Management
import gym from "@/assets/images/gym-management/gym.png";
import dashboard from "@/assets/images/gym-management/dashboard.jpg";
import profileManagement from "@/assets/images/gym-management/profile-management.jpg";
import paymentLogs from "@/assets/images/gym-management/payment-logs.jpg";
import systemSettings from "@/assets/images/gym-management/system-settings.jpg";
import userDashboard from "@/assets/images/gym-management/user-dashboard.png";
import userLogs from "@/assets/images/gym-management/user-logs.png";
import processFlowGym from "@/assets/images/gym-management/process_diagram.png";

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

// Dormitory
import dormMain from "@/assets/images/dormitory/dormotiry.png"; // correct spelling in your folder: "dormitiy.png"
import dormLanding from "@/assets/images/dormitory/dormitory_2.png";
import dormAbout from "@/assets/images/dormitory/dormitory_3.png";
import dormPostPropery from "@/assets/images/dormitory/domitory_4.png";
import dormView from "@/assets/images/dormitory/dormitory_5.png";
import dormViewChat from "@/assets/images/dormitory/dormitory_6.png";
import dormCalendarAppointment from "@/assets/images/dormitory/dormitory_7.png";

import ownerDashboard from "@/assets/images/dormitory/dormitory_owner_1.png";
import dormOwnerRental from "@/assets/images/dormitory/dormitory_owner_2.png";
import dormOwnerTenants from "@/assets/images/dormitory/dormitory_owner_3.png"; // no owner_4.png in your folder

import dormLogin from "@/assets/images/dormitory/login.png";
import dormRegister from "@/assets/images/dormitory/register.png";
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
  lowFidelity?: string;
  highFidelity?: string;
  processFlow?: string;
};

// ─── Project Data ──────────────────────────────────────────────

export const projects: Project[] = [
  {
    title: "Gym Management System",
    description:
      "A comprehensive gym management platform that streamlines operations through smart technology, transforming traditional manual processes into efficient digital workflows that enhance both administrative efficiency and member experience.",
    github: "https://github.com/AllenDG/gym_frontend",
    live: "https://gym-frontend-lac.vercel.app/login",
    tag: "Frontend, designer",
    image: gym,
    processFlow: processFlowGym,
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
    live: "https://aignition-frontend.vercel.app/",
    tag: "Frontend, Designer",
    image: aignitionMain,
    techStack: [
      "JotForm Integration",
      "ReactJS",
      "Supabase",
      "Tailwind CSS",
      "TypeScript",
      "Rest API",
      "Vite",
      "ShadCN",
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

  {
    title: "Dormitory",
    description:
      "Dormitory is a digital platform designed to make student and young professional housing accessible, transparent, and hassle-free. It centralizes dormitory listings and connects tenants with owners, helping them find safe, affordable, and reliable accommodations while giving property managers the tools to manage rentals effectively.",
    github: "https://github.com/AllenDG/Web-Dormitory",
    live: "https://web-dormitory.vercel.app/",
    tag: "Frontend, UI/UX",
    image: dormMain,
    processFlow: "",
    techStack: ["ReactJS", "Tailwind CSS", "Javascript", "Firebase", "MUI"],

    story:
      "Dormitory emerged from recognizing the growing challenges students and young professionals face in finding safe, affordable housing. Traditional methods such as recommendations or scattered social media posts proved unreliable and time consuming. Our solution aimed to provide a centralized, user friendly app that enables tenants to search, filter, and inquire about dorms easily, while empowering property owners to efficiently manage their listings and reach a broader audience. By addressing both sides of the housing challenge, Dormitory bridges the gap between rising demand and limited accessibility.",

    impact:
      "The project streamlined the dorm hunting process for students by consolidating property information into a single, reliable platform. Tenants gained confidence in their housing choices through verified listings and direct communication with owners. Property managers benefited from simplified listing management, analytics insights, and increased visibility. Beyond the immediate functional improvements, Dormitory laid the groundwork for a scalable nationwide solution to student housing accessibility.",

    role:"webdev",

    challenges:
      "Designing for two distinct user groups students/tenants and dorm owners—posed a challenge in balancing different needs within one cohesive platform. Ensuring verified and regularly updated listings was also critical to building trust. On the business side, convincing dorm owners to move away from traditional advertising methods to adopt the app required strong value propositions and user-centric design. Additionally, the UI/UX needed to remain simple and intuitive while incorporating advanced features like analytics and subscription management.",

    goal: [
      "Provide students and young professionals with a centralized, reliable, and easy-to-use platform for finding safe and affordable dorms.",
      "Enable property owners to manage, track, and optimize their listings with built-in dashboards and analytics.",
      "Build trust between tenants and property managers through verified listings, real-time availability, and direct communication.",
      "Lay the foundation for scalability, expanding beyond Pangasinan to other major university hubs in the Philippines.",
    ],

    keyResponsibilities:
      "Led the UI/UX design and frontend development, focusing on creating user flows, wireframes, and responsive layouts. Conducted research on student housing pain points to ensure the design addressed real needs. Developed both tenant- and owner-facing interfaces, ensuring a balance between usability and feature richness. Collaborated with team members to align design goals with business objectives and technical feasibility.",

    features: [
      // Student / Tenant
      "Landing Page with filters and search functionality",
      "Find Rentals page with advanced filters, price ranges, and map integration",
      "About Us and How It Works pages for trust-building and onboarding",
      "Direct chat for inquiries and scheduling with dorm managers",
      "Ability for users to register as owners and post properties",

      // Owner / Property Manager
      "Dashboard with analytics and listing performance insights",
      "Rental Table for managing property listings",
      "Tenants Table for organizing tenant details",
      "Settings for subscription management and profile updates",
    ],

    takeaways:
     "This is my most outstanding project in my entire college academic year. It deepened my ability to design for multi-user platforms, requiring empathy for both tenants and property owners. It highlighted the importance of verification and trust in platforms dealing with essential needs like housing. I also gained valuable experience aligning business models (freemium and subscription) with user experience design, ensuring the product could sustain itself while providing value. Ultimately, Dormitory reinforced my belief that thoughtful, user-centered design can directly improve quality of life by solving real-world problems.",
    contributors: getContributors("Dormitory"),

    featureImages: [
      { image: dormLogin, label: "User- Login Page" },
      { image: dormRegister, label: "User- Register Page" },
      { image: dormLanding, label: "User- Landing Page" },
      { image: dormAbout, label: "User - About Page" },
      { image: dormPostPropery, label: "User - Post Property" },
      { image: dormView, label: "User - View Property" },
      { image: dormViewChat, label: "User - Chat Inquiry" },
      {
        image: dormCalendarAppointment,
        label: "User - Calendar & Appointments",
      },

      // Owner / Property Manager
      { image: ownerDashboard, label: "Admin - Dashboard" },
      { image: dormOwnerRental, label: "Admin - Rentals Management" },
      { image: dormOwnerTenants, label: "Admin - Dorm Settings" },

    ],
  },
];
