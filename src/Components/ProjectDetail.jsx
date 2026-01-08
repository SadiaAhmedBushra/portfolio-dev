import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "life-journal",
    name: "🌱 The Life Journal",
    description:
      "A digital platform for sharing and preserving life lessons with authentication, premium content, and community interaction.",
    techStack: [
      "React",
      "React Router",
      "Tailwind CSS",
      "Firebase",
      "Stripe",
      "MongoDB",
      "Node.js",
      "Express.js",
    ],
    liveLink: "https://the-life-journal.web.app/",
    githubClient: "https://github.com/SadiaAhmedBushra/life-journal-client",
    challenges: [
      "Handling real-time UI updates without page reloads.",
      "Integrating Stripe payment with secure backend webhooks for premium access control.",
    ],
    improvements: [
      "Add more social interaction features.",
      "Improve performance with code splitting.",
      "Extend premium features with subscription plans.",
    ],
  },
  {
    id: "travelease",
    name: "TravelEase",
    description:
      "Full-stack vehicle booking app with user authentication, vehicle management, and a sleek modern UI.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Firebase Authentication",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Framer Motion",
    ],
    liveLink: "https://travelease-client.netlify.app/",
    githubClient: "https://github.com/SadiaAhmedBushra/b12-a09-green-nest",
    challenges: [
      "Implementing strong password validation.",
      "Managing vehicle bookings with real-time updates.",
      "Securing private routes with Firebase Auth.",
    ],
    improvements: [
      "Enhance UI animations.",
      "Add admin features for managing listings.",
      "Implement multi-language support.",
    ],
  },
    {
    id: "greennest",
    name: "🌿 GreenNest",
    description:
      "Elegant SPA for indoor plant lovers offering plant care guides, shopping, and expert consultations with a calming design.",
    techStack: [
      "React",
      "Vite",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "Firebase Auth",
      "Axios",
      "React Router",
    ],
    liveLink: "https://b12-a09-green-nest-ph.netlify.app/",
    githubClient: "https://github.com/SadiaAhmedBushra/b12-a09-green-nest",
    challenges: [
      "Building responsive UI with calming design.",
      "Implementing secure Firebase Authentication with multiple login methods.",
      "Integrating third-party libraries like Axios and Framer Motion smoothly.",
    ],
    improvements: [
      "Add more plant-related features and expert advice.",
      "Optimize performance and loading times.",
      "Expand to multi-language support and user profiles.",
    ],
  }
];

const techStackVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: (i) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: i * 0.15,
      type: "spring",
      stiffness: 100,
      damping: 10,
    },
  }),
};

const sectionVariants = {
  hidden: { y: 30, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const ProjectDetail = () => {
  const { id } = useParams();

  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div
        className="max-w-4xl mx-auto p-10 text-center text-xl"
        style={{ color: "var(--pf-primary)" }}
      >
        <p>Project not found.</p>
        <Link
          to="/projects"
          className="underline text-[var(--pf-accent)] hover:text-[var(--pf-secondary)]"
        >
          Back to Projects
        </Link>
      </div>
    );
  }

  return (
    <section
      className="max-w-4xl mx-auto px-6 py-16"
      style={{ color: "var(--pf-primary)" }}
    >
      <h1 className="text-4xl font-extrabold mb-8 text-center">
        {project.name}
      </h1>

      {/* Tech Stack */}
      <motion.div
        className="mb-8 flex flex-wrap gap-3"
        initial="hidden"
        animate="visible"
      >
        {project.techStack.map((tech, i) => (
          <motion.span
            key={tech}
            custom={i}
            variants={techStackVariants}
            className="text-sm font-semibold px-4 py-1 rounded-full bg-[var(--pf-accent)]"
            style={{
              userSelect: "none",
              color: "#2e2e2e", // darker text for visibility in dark mode
            }}
          >
            {tech}
          </motion.span>
        ))}
      </motion.div>

      {/* Description */}
      <motion.div
        className="mb-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-semibold mb-3">Description</h2>
        <p className="text-[var(--pf-secondary)] leading-relaxed">
          {project.description}
        </p>
      </motion.div>

      {/* Links */}
      <motion.div
        className="mb-8 flex flex-col md:flex-row md:space-x-8 space-y-4 md:space-y-0"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <a
          href={project.liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-primary px-6 py-3 font-semibold rounded-md shadow-md text-center"
          style={{
            backgroundColor: "var(--pf-primary)",
            color: "var(--pf-base-100)",
          }}
        >
          Visit Live Project
        </a>
        <a
          href={project.githubClient}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-secondary px-6 py-3 font-semibold rounded-md shadow-md text-center"
          style={{
            backgroundColor: "var(--pf-accent)",
            color: "var(--pf-primary)",
          }}
        >
          GitHub Client Repo
        </a>
      </motion.div>

      {/* Challenges Faced */}
      <motion.div
        className="mb-8"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-semibold mb-3">Challenges Faced</h2>
        <ul className="list-disc list-inside text-[var(--pf-secondary)] space-y-2">
          {project.challenges.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>

      {/* Improvements */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
      >
        <h2 className="text-2xl font-semibold mb-3">
          Potential Improvements & Future Plans
        </h2>
        <ul className="list-disc list-inside text-[var(--pf-secondary)] space-y-2">
          {project.improvements.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
};

export default ProjectDetail;
