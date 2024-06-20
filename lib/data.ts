import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Website Developer Intern",
    location: "Chakwal, PK",
    description:
      "I completed a three-month internship where I advanced my skills in WordPress and SEO from the ground up to an intermediate level.",
    icon: React.createElement(CgWorkAlt),
    date: "Aug, 2023 - Oct, 2023",
  },
  {
    title: "JR. Website Developer",
    location: "Chakwal, PK",
    description:
      "After my internship, I continued working at the same company for six months, further honing my skills in WordPress and SEO through practical experience.",
    icon: React.createElement(CgWorkAlt),
    date: "Nov, 2023 - Apr, 2024",
  },
  {
    title: "Frontend Developer",
    location: "Lahore, PK",
    description:
      "After that, I switched offices and am now working for a new startup, handling their freelance projects as a developer.",
    icon: React.createElement(FaReact),
    date: "May, 2024 - Present",
  },
] as const;

export const projectsData = [
  {
    title: "Next.JS Portfolio",
    description:
      "I use next.js with aceternity ui to create this portfolio website with modren ui design",
    tags: ["React", "Next.js", "Aceternity UI", "Tailwind"],
    imageUrl: corpcommentImg,
  },
  // {
  //   title: "rmtDev",
  //   description:
  //     "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
  //   tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
  //   imageUrl: rmtdevImg,
  // },
  // {
  //   title: "Word Analytics",
  //   description:
  //     "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
  //   tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
  //   imageUrl: wordanalyticsImg,
  // },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Framer Motion",
  "WordPress",
  "SEO",
] as const;
