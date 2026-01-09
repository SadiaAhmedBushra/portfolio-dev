import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Teaching Assistant",
    organization: "University of Liberal Arts Bangladesh",
    period: "Jun 2024 - Present",
    description:
      "Assist faculty during lab classes by providing programming support and guidance to students. Collaborate with faculty and department administration to prepare course files and support activities for IEB accreditation.",
  },
  {
    title: "Teaching Assistant (Part-time)",
    organization: "University of Liberal Arts Bangladesh",
    period: "Jun 2023 - Sep 2023",
    description:
      "Assist faculty during lab classes by providing programming support and guidance to students. Collaborate with faculty and department administration to prepare course files and support activities for IEB accreditation.",
  },
  {
    title: "Vice President",
    organization: "ULAB Computer Programming Club",
    period: "Jul 2022 - Nov 2022",
    description:
      "Provided leadership in planning and managing academic workshops, seminars, and contests. Collaborated with the executive team to enhance student engagement and promote technical learning.",
  },
  {
    title: "General Secretary",
    organization: "ULAB Computer Programming Club",
    period: "Feb 2022 - Jul 2022",
    description:
      "Oversaw club operations, communication, and coordination among members and executives. Supported the successful execution of multiple technical events, workshops, and community activities.",
  }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const itemVariantsLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

const itemVariantsRight = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 100 } },
};

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative max-w-5xl mx-auto px-6 py-20"
      style={{ color: "var(--pf-primary)" }}
    >
      <h2 className="text-4xl font-extrabold mb-12 text-center tracking-wide">
        Experience & Leadership
      </h2>

      <motion.div
        className="relative border-l-4 border-[var(--pf-accent)] ml-4 md:ml-20"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {experiences.map((exp, index) => {
          const isLeft = index % 2 === 0;
          return (
            <motion.div
              key={index}
              className={`mb-16 pl-8 md:pl-16 relative cursor-default rounded-md hover:bg-[var(--pf-accent)] hover:bg-opacity-20 transition-colors`}
              variants={isLeft ? itemVariantsLeft : itemVariantsRight}
            >
              {/* Dot on timeline */}
              <span
                className="absolute -left-8 top-3 w-6 h-6 rounded-full border-4 border-[var(--pf-primary)] bg-[var(--pf-base-100)]"
                aria-hidden="true"
              ></span>

              <h3 className="text-2xl font-bold">{exp.title}</h3>
              <p className="text-[var(--pf-secondary)] italic mb-1">
                {exp.organization}
              </p>
              <p className="text-sm text-[var(--pf-primary)] font-semibold mb-2">
                {exp.period}
              </p>
              <p className="text-[var(--pf-primary)] leading-relaxed whitespace-pre-line">
                {exp.description}
              </p>
            </motion.div>
          );
        })}
      </motion.div>
    </section>
  );
};

export default ExperienceSection;
