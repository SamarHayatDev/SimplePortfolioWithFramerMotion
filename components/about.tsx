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
        I’m currently working as an Assistant Web Developer at Xecutors, where I
        collaborate on projects like <strong>Gogency.com</strong>. My role
        involves implementing new features, debugging reported issues, and
        ensuring smooth functionality across the platform. With over a year and
        a half of experience in web development, I’m most comfortable working
        with <strong>React, Next.js</strong>, and modern tools like{" "}
        <strong>Nhost</strong> and <strong>GraphQL</strong>.
      </p>

      <p>
        I’m passionate about continuously improving my skills and contributing
        to innovative projects that push the boundaries of web development.
      </p>
    </motion.section>
  );
}
