import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const projects = [
  {
    id: "life-journal",
    name: "🌱 The Life Journal",
    image: "https://i.ibb.co/yBsVtD29/life-journal.png",
    liveLink: "https://the-life-journal.web.app/",
    description:
      "A digital platform for sharing and preserving life lessons with authentication, premium content, and community interaction.",
    techStack: [
      "React",
      "Firebase",
      "Stripe",
      "MongoDB",
      "Node.js",
      "Framer Motion",
    ],
  },
  {
    id: "travelease",
    name: "TravelEase",
    image: "https://i.ibb.co/5hnfjNTH/travel-Ease.png",
    liveLink: "https://travelease-client.netlify.app/",
    description:
      "Full-stack vehicle booking app with user authentication, vehicle management, and a sleek modern UI.",
    techStack: [
      "React",
      "Tailwind CSS",
      "Firebase",
      "Node.js",
      "MongoDB",
      "Framer Motion",
    ],
  },
  {
    id: "greennest",
    name: "🌿 GreenNest",
    image: "https://i.ibb.co/ynxThwFP/green-nest.png", // Please replace with actual image URL or local import
    liveLink: "https://b12-a09-green-nest-ph.netlify.app/",
    description:
      "Elegant SPA for indoor plant lovers offering plant care guides, shopping, and expert consultations with a calming design.",
    techStack: [
      "React",
      "Tailwind CSS",
      "DaisyUI",
      "Framer Motion",
      "Firebase Auth",
      "Axios",
    ],
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const Projects = () => {
  return (
    <section
      id="projects"
      className="flex flex-col items-center max-w-7xl mx-auto px-6 md:px-12 py-16"
      style={{ color: "var(--pf-primary)" }}
    >
      <h2 className="text-4xl font-extrabold mb-12 tracking-wide text-center">
        My Projects
      </h2>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center w-full max-w-[1100px]"
        initial="hidden"
        animate="visible"
      >
        {projects.map(
          ({ id, name, image, liveLink, description, techStack }, i) => (
            <motion.div
              key={id}
              className="bg-[var(--pf-base-100)] rounded-xl shadow-lg overflow-hidden transform hover:scale-[1.03] duration-300 flex flex-col"
              variants={cardVariants}
              custom={i}
              style={{ minWidth: "320px" }} // Ensure a minimum width for better banner visibility
            >
              {/* Project Image */}
              <img
                src={image}
                alt={name}
                className="w-full h-40 md:h-48 lg:h-56 object-cover"
                loading="lazy"
              />

              {/* Project Info */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-2xl font-bold mb-2">{name}</h3>
                <p className="text-sm mb-4 text-[var(--pf-secondary)] line-clamp-3">
                  {description}
                </p>

                {/* Tech Stack as bubble tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {techStack.map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-semibold px-3 py-1 rounded-full bg-[var(--pf-accent)]"
                      style={{
                        userSelect: "none",
                        color: "#2e2e2e", // Dark bubble text for visibility
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="mt-auto flex justify-between items-center space-x-4">
                  <Link
                    to={`/projects/${id}`}
                    className="btn btn-primary px-4 py-2 font-semibold rounded-md transition shadow"
                    style={{
                      backgroundColor: "var(--pf-primary)",
                      color: "var(--pf-base-100)",
                      boxShadow: "0 4px 6px rgba(62,58,57,0.2)",
                    }}
                  >
                    View Details
                  </Link>

                  <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--pf-accent)] font-semibold underline hover:text-[var(--pf-secondary)] transition"
                    aria-label={`Visit live site of ${name}`}
                  >
                    Live Site
                  </a>
                </div>
              </div>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
};

export default Projects;
