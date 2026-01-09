import React from "react";
import { motion } from "framer-motion";
import { MdOutlineDownloadForOffline } from "react-icons/md";
import photoUrl from "../../assets/bFormal.png";

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

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[80vh] flex flex-col md:flex-row items-center max-w-7xl mx-auto px-4 sm:px-6 md:px-12 py-16 overflow-hidden"
      style={{
        color: "var(--pf-primary)",
        backgroundColor: "var(--pf-base-100)",
      }}
    >
      {/* Floating Ambient Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          filter: "blur(120px)",
          background:
            "radial-gradient(circle at 20% 30%, rgba(210,180,140,0.2), transparent 40%)," +
            "radial-gradient(circle at 80% 70%, rgba(245,235,220,0.15), transparent 45%)",
          opacity: 0.5,
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-16 left-10 w-24 h-24 rounded-full bg-[var(--pf-accent)] opacity-20 sm:w-36 sm:h-36"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-8 w-32 h-32 rounded-full bg-[var(--pf-primary)] opacity-15 sm:w-44 sm:h-44"
        animate={{ y: [0, 35, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Text */}
      <motion.div
        className="w-full md:w-1/2 text-center md:text-left space-y-6 z-10"
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1
          className="text-4xl sm:text-5xl font-extrabold tracking-wide"
          style={{ color: "var(--pf-primary)" }}
        >
          Sadia Ahmed Bushra
        </h1>
        <p
          className="text-lg sm:text-xl font-semibold"
          style={{ color: "var(--pf-secondary)" }}
        >
          Junior Web Developer | Teaching Assistant
        </p>
        <p className="text-sm sm:text-base max-w-xl mx-auto md:mx-0  text-[var(--pf-secondary)] ">
          I specialize in creating modern web applications with React and
          Tailwind CSS, focusing on performance, accessibility, and seamless
          user experiences. Dedicated to continuous learning and delivering
          professional results.
        </p>

        <motion.div
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="inline-block mt-4"
        >
          <a
            href="https://drive.google.com/uc?export=download&id=1dctSFpBaDAttzS4upa68rR50ATsPFHff"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="resume-btn bg-[var(--pf-primary)] px-6 py-2 rounded-lg shadow-lg hover:bg-[var(--pf-accent)] transition-colors duration-300 font-semibold text-lg cursor-pointer flex items-center gap-3 select-none drop-shadow-md mx-auto md:mx-0"
            aria-label="Download Resume"
            title="Download Resume"
            style={{
              textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
            }}
          >
            <MdOutlineDownloadForOffline
              className="h-6 w-6"
              style={{ color: "inherit" }}
            />
            Download Resume
          </a>
        </motion.div>
      </motion.div>

      {/* Photo */}
      <motion.div
        className="w-56 h-56 md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-10"
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <img
          src={photoUrl}
          alt="Sadia Ahmed Bushra"
          className="w-40 h-40 sm:w-56 sm:h-56 rounded-full object-cover border-4 border-[var(--pf-accent)] shadow-lg transition-transform hover:scale-105"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
