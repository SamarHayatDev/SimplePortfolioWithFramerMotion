"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        My name is Samar Hayat. After completing my FA, I joined an IT house for
        an internship where I learned about WordPress. Later, I discovered a
        passion for coding, especially in{" "}
        <span className="font-medium">JavaScript and React.js</span>. I am
        currently enhancing my skills in these areas. Although I do freelance
        work with WordPress, I am seeking opportunities to work with a team and
        learn <span className="font-medium">industry standards</span> from
        experienced professionals. I am a Pakistan-based frontend developer.
      </p>

      <p>
        <span className="italic">When I'm not coding</span>, I enjoy watching
        anime, which I find entertaining. I also have a bit of an introverted
        side. Besides anime,{" "}
        <span className="font-medium">I love learning new things</span>.
        Currently, I'm learning about UI/UX design to better collaborate with
        designers on future projects.
      </p>
    </motion.section>
  );
}
