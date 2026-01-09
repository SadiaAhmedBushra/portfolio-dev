import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";

const educationData = [
  {
    degree: "Bachelor of Science - BSc Computer Science and Engineering",
    institution: "University of Liberal Arts Bangladesh (ULAB)",
    year: "2020 - 2024",
    cgpa: "3.98 / 4.00",
    details: [
      "Completed various projects during my bachelor’s degree in courses like Structured Programming, Data Structures, Algorithms, OOP, Software Development, Smartphone App Development, and Web Development",
      "Actively participated in programming contests arranged by university's programming club and ICPC Dhaka Regional",
      "Dean's List Scholarship - Spring 2024 & Fall 2023",
    ],
  },
  {
    degree: "Higher Secondary Certificate (HSC) - Science",
    institution: "Dhaka City College",
    year: "2017 - 2019",
    cgpa: "5.00 / 5.00 (without optional)",
    details: [
      "Science major",
      "HSC Examination General Scholarship - Dhaka Board",
    ],
  },
  {
    degree: "Secondary School Certificate (SSC) - Science",
    institution: "Mohammadpur Preparatory School and College",
    year: "2015 - 2017",
    cgpa: "5.00 / 5.00",
    details: ["Science major"],
  },
];

// Floating blob animation variants
const floatVariants = {
  animate: {
    y: [0, -15, 0],
    x: [0, 15, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

// Card animation variants for horizontal slide
const cardVariants = {
  enter: (direction) => ({
    x: direction > 0 ? 300 : -300,
    opacity: 0,
  }),
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction) => ({
    x: direction < 0 ? 300 : -300,
    opacity: 0,
  }),
};

const EducationalQualification = () => {
  const [[page, direction], setPage] = useState([0, 0]);
  const educationCount = educationData.length;

  // Automatically move to next slide every 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      paginate(1);
    }, 5000);
    return () => clearTimeout(timer);
  }, [page]);

  const paginate = (newDirection) => {
    setPage([
      (page + newDirection + educationCount) % educationCount,
      newDirection,
    ]);
  };

  return (
    <section
      id="education"
      className="relative max-w-6xl mx-auto px-6 py-28 overflow-hidden overflow-x-hidden flex flex-col"
      style={{ color: "var(--pf-primary)" }}
    >
      {/* Floating background blobs */}
      <motion.div
        className="absolute top-20 left-10 w-40 h-40 rounded-full bg-[rgba(210,180,140,0.15)] blur-3xl"
        variants={floatVariants}
        animate="animate"
      />
      <motion.div
        className="absolute top-48 right-20 w-56 h-56 rounded-full bg-[rgba(245,235,220,0.15)] blur-3xl"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "2s" }}
      />
      <motion.div
        className="absolute bottom-20 left-1/2 w-32 h-32 rounded-full bg-[rgba(210,180,140,0.1)] blur-3xl"
        variants={floatVariants}
        animate="animate"
        style={{ animationDelay: "4s" }}
      />

      {/* Section Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-20 text-center tracking-wide"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        Educational Qualification
      </motion.h2>

      {/* Carousel container with fixed height and relative positioning */}
      <div className="relative w-full max-w-4xl mx-auto min-h-[560px] sm:min-h-[520px] md:h-[350px] flex-grow">
        <AnimatePresence initial={false} custom={direction}>
          <motion.article
            key={page}
            custom={direction}
            variants={cardVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            className="absolute top-0 left-0 w-full h-full bg-[rgba(255,255,255,0.1)] dark:bg-[rgba(0,0,0,0.3)] p-7 sm:p-6 md:p-10 rounded-2xl shadow-lg cursor-default select-none flex flex-col justify-center items-center text-center"
            style={{ boxSizing: "border-box" }}
          >
            <h3 className="text-3xl font-semibold mb-3">
              {educationData[page].degree}
            </h3>
            <h4 className="text-xl text-[var(--pf-accent)] font-medium mb-1">
              {educationData[page].institution}
            </h4>
            <p className="italic text-sm mb-2">{educationData[page].year}</p>
            <p className="text-sm mb-4 font-semibold">
              CGPA: {educationData[page].cgpa}
            </p>
            <ul className="list-disc list-inside text-[var(--pf-secondary)] text-sm space-y-2 leading-relaxed pr-2">
              {educationData[page].details.map((detail, i) => (
                <li key={i}>{detail}</li>
              ))}
            </ul>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons fixed after container */}
      <div className="flex justify-center mt-6">
        <div className="flex justify-between max-w-xs w-full">
          <button
            onClick={() => paginate(-1)}
            aria-label="Previous"
            className="bg-[var(--pf-primary)] px-6 py-2 rounded-lg shadow-lg hover:bg-[var(--pf-accent)] transition-colors duration-300 font-semibold cursor-pointer flex items-center gap-2 select-none drop-shadow-md text-[var(--pf-base-100)] dark:text-[var(--pf-base-900)]"
            style={{ textShadow: "0 0 5px rgba(0,0,0,0.2)" }}
          >
            {/* <HiArrowLeft className="h-5 w-5" /> */}
            Prev
          </button>

          <button
            onClick={() => paginate(1)}
            aria-label="Next"
            className="bg-[var(--pf-primary)] px-6 py-2 rounded-lg shadow-lg hover:bg-[var(--pf-accent)] transition-colors duration-300 font-semibold cursor-pointer flex items-center gap-2 select-none drop-shadow-md text-[var(--pf-base-100)] dark:text-[var(--pf-base-900)]"
            style={{ textShadow: "0 0 5px rgba(0,0,0,0.2)" }}
          >
            Next
            {/* <HiArrowRight className="h-5 w-5" /> */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default EducationalQualification;
