import React from "react";

import { FaReact, FaWordpress } from "react-icons/fa";

import citadelsol from "@/public/projectImages/Citadel.png";
import zealsoft from "@/public/projectImages/ZealSoft.png";
import gogency from "@/public/projectImages/Gogency.png";

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
    title: "Assistant Web Developer at Xecutors",
    location: "Chakwal, PK",
    description:
      "Currently at Xecutors, developing features and fixing bugs while working with React, Next.js, Nhost, Hasura, and GraphQL.",
    icon: React.createElement(FaReact),
    date: "July, 2024 - Present",
  },
  {
    title: "Frontend Developer at Citadel Solutions",
    location: "Lahore, PK",
    description:
      "Contributed to various projects, including 'ZealSoft Business Solutions,' focusing on React.js and WordPress development.",
    icon: React.createElement(FaWordpress),
    date: "May, 2024 - June, 2024",
  },
  {
    title: "Junior Website Developer at Zitsol",
    location: "Chakwal, PK",
    description:
      "Worked as a WordPress Developer and SEO Optimizer, enhancing website performance through on-page and off-page strategies.",
    icon: React.createElement(FaWordpress),
    date: "Nov, 2023 - Apr, 2024",
  },
  {
    title: "Website Developer Intern at Zitsol",
    location: "Chakwal, PK",
    description:
      "Completed a three-month internship, gaining hands-on experience in WordPress and SEO while enhancing my skills through online resources.",
    icon: React.createElement(FaWordpress),
    date: "Aug, 2023 - Oct, 2023",
  },
] as const;

export const projectsData = [
  {
    title: "Gogency Website",
    description:
      "Developed the Gogency website using WordPress and Elementor. Focused on SEO and optimization based on Google Analytics and PageSpeed Insights.",
    tags: ["WordPress", "Elementor", "SEO", "Google Analytics"],
    imageUrl: gogency, // Replace with the actual image URL
    link: "https://gogency.com/", // Replace with the actual project link
  },
  {
    title: "ZealSoft Solutions",
    description:
      "Created the ZealSoft Business Solutions website using WordPress and Elementor. Focused on SEO and optimization based on Google Analytics and PageSpeed Insights.",
    tags: ["WordPress", "Elementor", "SEO", "Google Analytics"],
    imageUrl: zealsoft, // Replace with the actual image URL
    link: "https://www.zealsoftsolutions.com/", // Replace with the actual project link
  },
  {
    title: "Citadel Solutions",
    description:
      "Developed the Citadel Solutions website using WordPress and Elementor. Focused on SEO and optimization based on Google Analytics and PageSpeed Insights.",
    tags: ["WordPress", "Elementor", "SEO", "Google Analytics"],
    imageUrl: citadelsol, // Replace with the actual image URL
    link: "https://citadelsol.io/", // Replace with the actual project link
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "TailwindCSS",
  "JavaScript",
  "TypeScript",
  "React.JS",
  "Next.JS",

  "Git",
  "GITHub",
  "Nhost",
  "GraphQL",
  "WordPress",
  "SEO",
] as const;
