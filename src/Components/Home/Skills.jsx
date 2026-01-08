import React from "react";
import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaTools,
  FaCode,
  FaComments,
  FaLightbulb,
  FaClock,
  FaUserCheck,
  FaUsers,
} from "react-icons/fa";
import { FiDatabase } from "react-icons/fi";
import { GiSkills } from "react-icons/gi"; // Soft Skills main icon

const slideLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const SkillBar = ({ name, level }) => (
  <div className="space-y-2">
    <div className="flex justify-between text-sm font-medium">
      <span>{name}</span>
      <span>{level}%</span>
    </div>
    <div className="w-full h-2 rounded-full bg-[rgba(0,0,0,0.15)] overflow-hidden">
      <motion.div
        className="h-full rounded-full bg-[var(--pf-primary)]"
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: false }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
    </div>
  </div>
);

const softSkillsData = [
  {
    icon: <FaComments className="text-[var(--pf-accent)] w-8 h-8" />,
    title: "Communication & Collaboration",
    description:
      "Effectively exchanging ideas and working well with others to achieve common goals.",
  },
  {
    icon: <FaLightbulb className="text-[var(--pf-accent)] w-8 h-8" />,
    title: "Problem-Solving & Critical Thinking",
    description:
      "Analyzing challenges thoughtfully and finding innovative, logical solutions.",
  },
  {
    icon: <FaClock className="text-[var(--pf-accent)] w-8 h-8" />,
    title: "Time Management & Organization",
    description:
      "Prioritizing tasks and managing time efficiently to meet deadlines.",
  },
  {
    icon: <FaUserCheck className="text-[var(--pf-accent)] w-8 h-8" />,
    title: "Adaptability & Growth Mindset",
    description:
      "Embracing change and continuously learning to improve skills and knowledge.",
  },
  {
    icon: <FaUsers className="text-[var(--pf-accent)] w-8 h-8" />,
    title: "Leadership & Mentoring",
    description:
      "Guiding and inspiring others while fostering a positive environment.",
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden"
      style={{ color: "var(--pf-primary)" }}
    >
      {/* Ambient Animated Background */}
      <motion.div
        aria-hidden
        className="absolute inset-0 -z-10"
        animate={{ opacity: [0.25, 0.4, 0.25] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        style={{
          filter: "blur(160px)",
          background:
            "radial-gradient(circle at 20% 30%, rgba(210,180,140,0.25), transparent 40%)," +
            "radial-gradient(circle at 80% 70%, rgba(245,235,220,0.25), transparent 45%)",
        }}
      />

      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-20 text-center tracking-wide"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        Skills & Expertise
      </motion.h2>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-16">
        {/* Frontend */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="rounded-xl p-10 backdrop-blur-md
                     bg-[rgba(255,255,255,0.07)]
                     dark:bg-[rgba(0,0,0,0.45)]
                     border-l-4 border-[var(--pf-primary)]"
        >
          <h3 className="text-3xl font-semibold mb-8 flex flex-row gap-3 items-center">
            <FaLaptopCode className="text-3xl" /> Frontend
          </h3>
          <div className="space-y-6">
            <SkillBar name="React" level={90} />
            <SkillBar name="Tailwind CSS" level={92} />
            <SkillBar name="DaisyUI" level={85} />
            <SkillBar name="Framer Motion" level={80} />
            <SkillBar name="Next.js (Exploring)" level={35} />
          </div>
        </motion.div>

        {/* Backend */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="rounded-xl p-10 backdrop-blur-md
                     bg-[rgba(255,255,255,0.08)]
                     dark:bg-[rgba(0,0,0,0.4)]"
        >
          <h3 className="text-3xl font-semibold mb-8 flex flex-row gap-3 items-center">
            <FiDatabase className="text-3xl" /> Backend & Database
          </h3>
          <div className="space-y-6">
            <SkillBar name="Node.js" level={80} />
            <SkillBar name="Express.js" level={78} />
            <SkillBar name="MongoDB" level={75} />
            <SkillBar name="Firebase Authentication" level={85} />
            <SkillBar name="REST API Integration" level={82} />
          </div>
        </motion.div>

        {/* Programming Languages */}
        <motion.div
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="rounded-xl p-10 backdrop-blur-md
                     bg-[rgba(255,255,255,0.06)]
                     dark:bg-[rgba(0,0,0,0.35)]
                     border border-dashed border-[var(--pf-accent)]"
        >
          <h3 className="text-3xl font-semibold mb-8 flex flex-row gap-3 items-center">
            <FaCode className="text-3xl" /> Programming Languages
          </h3>
          <div className="space-y-6">
            <SkillBar name="JavaScript" level={92} />
            <SkillBar name="C" level={75} />
            <SkillBar name="C++" level={88} />
          </div>
        </motion.div>

        {/* Tools */}
        <motion.div
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="rounded-xl p-10 backdrop-blur-md
                     bg-[rgba(255,255,255,0.07)]
                     dark:bg-[rgba(0,0,0,0.4)]
                     border-l-2 border-[var(--pf-primary)]"
        >
          <h3 className="text-3xl font-semibold mb-8 flex flex-row gap-3 items-center">
            <FaTools className="text-3xl" /> Tools
          </h3>
          <div className="space-y-6">
            <SkillBar name="Git & GitHub" level={88} />
            <SkillBar name="Vercel" level={70} />
            <SkillBar name="Netlify" level={90} />
            <SkillBar name="VS Code" level={95} />
          </div>
        </motion.div>
      </div>

      {/* Soft Skills - full width */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        className="mt-20 rounded-xl p-10 backdrop-blur-md
                   bg-[rgba(255,255,255,0.06)]
                   dark:bg-[rgba(0,0,0,0.35)]
                   border border-dashed border-[var(--pf-accent)]
                   max-w-full"
        style={{ maxWidth: "100vw" }}
      >
        <h3 className="text-3xl font-semibold mb-10 flex flex-row gap-3 items-center">
          <GiSkills className="text-3xl" /> Soft Skills
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {softSkillsData.map(({ icon, title, description }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              className="flex items-start gap-4 p-5 bg-[rgba(255,255,255,0.15)] dark:bg-[rgba(0,0,0,0.25)] rounded-lg shadow-lg hover:shadow-[0_10px_25px_rgba(245,180,130,0.3)] cursor-default transition-shadow"
            >
              <div className="flex-shrink-0">{icon}</div>
              <div>
                <h4 className="text-xl font-semibold mb-1">{title}</h4>
                <p className="text-[var(--pf-secondary)] text-sm leading-snug">
                  {description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;
