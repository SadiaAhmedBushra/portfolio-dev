// import React from "react";
// import { motion } from "framer-motion";
// import photoUrl from "../../assets/bFormal.png";

// const ResumeDownloadButton = () => {
//   const resumeDownloadUrl =
//     "https://drive.google.com/uc?export=download&id=1dctSFpBaDAttzS4upa68rR50ATsPFHff";

//   return (
//     <a
//       href={resumeDownloadUrl}
//       target="_blank"
//       rel="noopener noreferrer"
//       download
//       className={`
//         resume-btn
//         bg-[var(--pf-primary)] 
//         px-6 py-3 
//         rounded-full 
//         shadow-lg 
//         hover:bg-[var(--pf-accent)] 
//         transition-colors 
//         duration-300
//         font-semibold
//         text-lg
//         cursor-pointer
//         flex items-center
//         gap-3
//         select-none
//         drop-shadow-md
//       `}
//       aria-label="Download Resume"
//       title="Download Resume"
//       style={{
//         textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
//       }}
//     >
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         className="h-6 w-6"
//         fill="none"
//         viewBox="0 0 24 24"
//         stroke="currentColor"
//         strokeWidth={2}
//         style={{ color: "inherit" }}
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
//         />
//       </svg>
//       Resume
//     </a>
//   );
// };

// const floatVariants = {
//   animate: {
//     y: [0, -20, 0],
//     x: [0, 20, 0],
//     rotate: [0, 10, 0],
//     transition: {
//       duration: 10,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// const pulseVariants = {
//   animate: {
//     scale: [1, 1.1, 1],
//     opacity: [0.7, 1, 0.7],
//     transition: {
//       duration: 4,
//       repeat: Infinity,
//       ease: "easeInOut",
//     },
//   },
// };

// const Hero = () => {
//   return (
//     <section
//       id="home"
//       className="relative min-h-[80vh] flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 py-16"
//       style={{ color: "var(--pf-primary)" }}
//     >
//       {/* Background blobs */}
//       <motion.div
//         className="absolute top-10 left-5 w-44 h-44 rounded-full bg-[rgba(210,180,140,0.4)] blur-3xl"
//         variants={floatVariants}
//         animate="animate"
//       />
//       <motion.div
//         className="absolute top-36 right-10 w-60 h-60 rounded-full bg-[rgba(245,235,220,0.4)] blur-3xl"
//         variants={floatVariants}
//         animate="animate"
//         style={{ animationDelay: "2s" }}
//       />
//       <motion.div
//         className="absolute bottom-16 left-1/3 w-36 h-36 rounded-full bg-[rgba(210,180,140,0.3)] blur-3xl"
//         variants={floatVariants}
//         animate="animate"
//         style={{ animationDelay: "4s" }}
//       />
//       <motion.div
//         className="absolute bottom-28 right-1/4 w-24 h-24 rounded-full bg-[rgba(245,235,220,0.5)] blur-xl"
//         variants={pulseVariants}
//         animate="animate"
//         style={{ animationDelay: "1.5s" }}
//       />
//       <motion.div
//         className="absolute top-24 left-2/3 w-20 h-20 rounded-full bg-[rgba(210,180,140,0.5)] blur-xl"
//         variants={pulseVariants}
//         animate="animate"
//         style={{ animationDelay: "3s" }}
//       />

//       {/* Text Content */}
//       <div className="md:w-1/2 text-center md:text-left space-y-6 z-10">
//         <h1
//           className="text-5xl font-extrabold tracking-wide"
//           style={{ color: "var(--pf-primary)" }}
//         >
//           Sadia Ahmed Bushra
//         </h1>
//         <p
//           className="text-xl font-semibold"
//           style={{ color: "var(--pf-secondary)" }}
//         >
//           Junior Web Developer | Teaching Assistant
//         </p>
//         <p
//           className="text-base max-w-xl"
//           style={{ color: "var(--pf-primary)" }}
//         >
//           I specialize in creating modern web applications with React and
//           Tailwind CSS, focusing on performance, accessibility, and seamless
//           user experiences. Dedicated to continuous learning and delivering
//           professional results.
//         </p>

//         {/* Bounce animation wrapper */}
//         <motion.div
//           animate={{ y: [0, -15, 0] }}
//           transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
//           className="inline-block mt-4"
//         >
//           <ResumeDownloadButton />
//         </motion.div>
//       </div>

//       {/* Photo */}
//       <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-10">
//         <img
//           src={photoUrl}
//           alt="Sadia Ahmed Bushra"
//           className="w-56 h-56 rounded-full object-cover border-4 border-[var(--pf-accent)] shadow-lg transition-transform hover:scale-105"
//           loading="lazy"
//         />
//       </div>
//     </section>
//   );
// };

// export default Hero;

import React from "react";
import { motion } from "framer-motion";
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
      className="relative min-h-[80vh] flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 py-16 overflow-hidden"
      style={{ color: "var(--pf-primary)", backgroundColor: "var(--pf-base-100)" }}
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
        className="absolute top-16 left-10 w-36 h-36 rounded-full bg-[var(--pf-accent)] opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-14 w-44 h-44 rounded-full bg-[var(--pf-primary)] opacity-15"
        animate={{ y: [0, 35, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Left side Text */}
      <motion.div
        className="md:w-1/2 text-center md:text-left space-y-6 z-10"
        variants={slideLeft}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <h1 className="text-5xl font-extrabold tracking-wide" style={{ color: "var(--pf-primary)" }}>
          Sadia Ahmed Bushra
        </h1>
        <p className="text-xl font-semibold" style={{ color: "var(--pf-secondary)" }}>
          Junior Web Developer | Teaching Assistant
        </p>
        <p className="text-base max-w-xl" style={{ color: "var(--pf-primary)" }}>
          I specialize in creating modern web applications with React and Tailwind CSS, focusing on performance, accessibility, and seamless user experiences. Dedicated to continuous learning and delivering professional results.
        </p>

        {/* Your original bouncing resume button */}
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
  className="resume-btn bg-[var(--pf-primary)] px-6 py-3 rounded-full shadow-lg hover:bg-[var(--pf-accent)] transition-colors duration-300 font-semibold text-lg cursor-pointer flex items-center gap-3 select-none drop-shadow-md"
  aria-label="Download Resume"
  title="Download Resume"
  style={{
    textShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
    // remove color here to allow CSS override
  }}
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}
    style={{ color: "inherit" }} // inherits color from .resume-btn
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4 16v2a2 2 0 002 2h12a2 2 0 002-2v-2M12 12v8m0 0l-4-4m4 4l4-4M12 4v8"
    />
  </svg>
  Resume
</a>

        </motion.div>
      </motion.div>

      {/* Right side Photo */}
      <motion.div
        className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end z-10"
        variants={slideRight}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.4 }}
      >
        <img
          src={photoUrl}
          alt="Sadia Ahmed Bushra"
          className="w-56 h-56 rounded-full object-cover border-4 border-[var(--pf-accent)] shadow-lg transition-transform hover:scale-105"
          loading="lazy"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
