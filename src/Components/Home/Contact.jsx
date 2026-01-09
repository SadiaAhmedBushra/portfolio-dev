import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";

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

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative max-w-5xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 py-20 overflow-hidden"
      style={{ color: "var(--pf-primary)" }}
    >
      {/* Floating Ambient Background */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10"
        style={{
          filter: "blur(160px)",
          background:
            "radial-gradient(circle at 20% 30%, rgba(210,180,140,0.28), transparent 40%)," +
            "radial-gradient(circle at 80% 70%, rgba(245,235,220,0.22), transparent 45%)",
          opacity: 0.45,
        }}
      />

      {/* Floating Orbs */}
      <motion.div
        className="absolute top-20 left-6 w-20 h-20 sm:w-32 sm:h-32 rounded-full bg-[var(--pf-accent)] opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-6 w-24 h-24 sm:w-40 sm:h-40 rounded-full bg-[var(--pf-primary)] opacity-15"
        animate={{ y: [0, 35, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        className="text-4xl sm:text-5xl font-extrabold mb-16 sm:mb-20 text-center tracking-wide"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        Get In Touch
      </motion.h2>

      {/* Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
        {/* Contact Info */}
        <motion.div
          className="space-y-6 sm:space-y-8 rounded-xl p-8 sm:p-10
                     bg-[rgba(255,255,255,0.07)]
                     dark:bg-[rgba(0,0,0,0.45)]
                     backdrop-blur-md border-l-4 border-[var(--pf-primary)]"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-4 sm:mb-6">
            Contact Information
          </h3>

          <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
            <FaEnvelope className="text-[var(--pf-accent)] text-lg sm:text-xl" />
            <a
              href="mailto:sadia.ahmed@example.com"
              className="hover:underline break-all"
            >
              sadiahmedbushra28@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-3 sm:gap-4 text-base sm:text-lg">
            <FaPhoneAlt className="text-[var(--pf-accent)] text-lg sm:text-xl" />
            <span>+880 1968-484451</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="rounded-xl p-8 sm:p-10
                     bg-[rgba(255,255,255,0.08)]
                     dark:bg-[rgba(0,0,0,0.4)]
                     backdrop-blur-md"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 text-center md:text-left">
            Find Me Online
          </h3>

          <div className="flex gap-5 sm:gap-6 flex-wrap justify-center md:justify-start">
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/SadiaAhmedBushra",
                label: "GitHub",
              },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/sadia-ahmed-062082263/",
                label: "LinkedIn",
              },
            ].map(({ icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center
                           rounded-full shadow-lg
                           bg-[var(--pf-base-100)]
                           text-[var(--pf-primary)]
                           hover:bg-[var(--pf-accent)]
                           transition"
                aria-label={label}
              >
                {icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
