import React from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.35,
    },
  },
};

const slideInLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const slideInRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

const AboutMe = () => {
  return (
    <section
      id="about"
      className="relative max-w-4xl mx-auto px-6 py-24"
      style={{ color: "var(--pf-primary)" }}
    >
      {/* Global subtle glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10"
        style={{
          filter: "blur(140px)",
          background:
            "radial-gradient(circle at 20% 30%, rgba(210,180,140,0.25), transparent 40%)," +
            "radial-gradient(circle at 80% 70%, rgba(245,235,220,0.22), transparent 45%)",
          opacity: 0.35,
        }}
      />

      <h2 className="text-5xl font-extrabold mb-20 text-center tracking-wide">
        About Me
      </h2>

      <motion.div
        className="space-y-24"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Programming Journey */}
        <motion.div
          variants={slideInLeft}
          className="relative overflow-hidden rounded-xl border-l-4 border-[var(--pf-primary)]
                     bg-[rgba(255,255,255,0.06)] dark:bg-[rgba(0,0,0,0.45)]
                     backdrop-blur-md px-6 py-10"
        >
          {/* Animated soothing background */}
          <motion.div
            aria-hidden="true"
            className="absolute inset-0 -z-10"
            initial={{ x: -40, y: -20 }}
            animate={{ x: 40, y: 20 }}
            transition={{
              duration: 18,
              repeat: Infinity,
              repeatType: "mirror",
              ease: "easeInOut",
            }}
            style={{
              background:
                "radial-gradient(circle at 25% 35%, rgba(210,180,140,0.28), transparent 45%)," +
                "radial-gradient(circle at 75% 65%, rgba(245,235,220,0.22), transparent 50%)",
              filter: "blur(100px)",
            }}
          />

          <h3 className="text-3xl font-semibold mb-6">
            My Programming Journey
          </h3>

          <p className="text-[var(--pf-secondary)] text-lg font-serif leading-relaxed">
            I’m Sadia Ahmed Bushra, a passionate software developer whose journey
            began with curiosity — questioning how digital experiences are built
            and how thoughtful design can simplify complexity. Over time, this
            curiosity evolved into hands-on experience with frontend and
            full-stack development, where I focus on crafting calm, intuitive,
            and meaningful web applications.
          </p>
        </motion.div>

        {/* What Drives Me */}
        <motion.div
          variants={slideInRight}
          className="rounded-xl p-10 shadow-lg
                     bg-[rgba(255,255,255,0.08)] dark:bg-[rgba(0,0,0,0.45)]
                     backdrop-blur-md"
        >
          <h3 className="text-3xl font-semibold mb-6">
            What Drives Me
          </h3>
          <p className="text-[var(--pf-secondary)] text-lg font-serif leading-relaxed italic">
            I’m driven by the joy of building experiences that feel effortless
            to users. Whether it’s designing elegant interfaces or structuring
            efficient application logic, I enjoy working on products that balance
            beauty, performance, and usability. Collaboration, learning, and
            creative problem-solving energize me.
          </p>
        </motion.div>

        {/* Beyond Coding (Hobbies) */}
        <motion.div
          variants={slideInLeft}
          className="rounded-xl border border-dashed border-[var(--pf-accent)]
                     bg-[rgba(255,255,255,0.05)] dark:bg-[rgba(0,0,0,0.35)]
                     backdrop-blur-sm px-8 py-10"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Beyond Coding
          </h3>
          <p className="text-[var(--pf-secondary)] text-lg font-serif leading-relaxed">
            Outside of programming, I enjoy creative outlets like painting, which
            helps me explore color, balance, and expression — skills that
            naturally influence my UI design choices. I also find peace in nature
            and love nurturing indoor plants, a hobby that reflects my patience,
            mindfulness, and appreciation for growth.
          </p>
        </motion.div>

        {/* Personality & Vision */}
        <motion.div
          variants={slideInRight}
          className="rounded-xl border-l-2 border-[var(--pf-primary)]
                     bg-[rgba(255,255,255,0.07)] dark:bg-[rgba(0,0,0,0.4)]
                     backdrop-blur-md px-6 py-10"
        >
          <h3 className="text-3xl font-semibold mb-6">
            Personality & Vision
          </h3>
          <p className="text-[var(--pf-secondary)] text-lg font-serif leading-relaxed">
            My personality blends curiosity, dedication, and empathy. I believe
            continuous learning and thoughtful design are the foundations of
            meaningful software. My goal is to contribute to projects that not
            only solve problems but also inspire confidence, clarity, and
            positive impact — for users and teams alike.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutMe;
