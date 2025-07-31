import cilan from "@/assets/images/avatar/cilan.jpg";
import pat from "@/assets/images/avatar/patrick.jpg";
import dave from "@/assets/images/45230660.jpg";
import allen from "@/assets/images/506784290_1115604103733190_3104913920678501961_n.jpg";

export type ContributorDetail = {
  name: string;
  designation: string;
  image: string;
};

export type ProjectTitle =
  | "Gym Management System"
  | "Aignition Global Education Alliance";

export const contributorsData: Record<ProjectTitle, ContributorDetail[]> = {
  "Gym Management System": [
    {
      name: "Dave Charm Bulaquenia",
      designation: "Backend Developer | Solutions Designer",
      image: dave,
    },
    {
      name: "Allen Walter De Guzman",
      designation: "Frontend Developer",
      image: allen,
    },
  ],
  "Aignition Global Education Alliance": [
    {
      name: "Christian Fernandez",
      designation: "Lead UI UX Designer/Solutions Designer",
      image: cilan,
    },
    {
      name: "Patrick Ted Diesta",
      designation: "Lead Developer",
      image: pat,
    },
    {
      name: "Joepher Joe Ribo",
      designation: "Full stack Developer",
      image: "/avatars/allen.png",
    },
    {
      name: "Allen Walter De Guzman",
      designation: "Frontend Developer/UI UX Designer",
      image: allen,
    },
    {
      name: "Walex Lim",
      designation: "Frontend Developer",
      image: "/avatars/allen.png",
    },
  ],
};
