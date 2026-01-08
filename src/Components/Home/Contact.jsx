import React from "react";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaFacebookF,
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
      className="relative max-w-5xl mx-auto px-6 py-28 overflow-hidden"
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
        className="absolute top-20 left-10 w-32 h-32 rounded-full bg-[var(--pf-accent)] opacity-20"
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-24 right-16 w-40 h-40 rounded-full bg-[var(--pf-primary)] opacity-15"
        animate={{ y: [0, 35, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Heading */}
      <motion.h2
        className="text-5xl font-extrabold mb-20 text-center tracking-wide"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.4 }}
      >
        Get In Touch
      </motion.h2>

      {/* Content */}
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Contact Info */}
        <motion.div
          className="space-y-8 rounded-xl p-10
                     bg-[rgba(255,255,255,0.07)]
                     dark:bg-[rgba(0,0,0,0.45)]
                     backdrop-blur-md border-l-4 border-[var(--pf-primary)]"
          variants={slideLeft}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-3xl font-semibold mb-6">
            Contact Information
          </h3>

          <div className="flex items-center gap-4 text-lg">
            <FaEnvelope className="text-[var(--pf-accent)]" />
            <a
              href="mailto:sadia.ahmed@example.com"
              className="hover:underline"
            >
              sadiahmedbushra28@gmail.com
            </a>
          </div>

          <div className="flex items-center gap-4 text-lg">
            <FaPhoneAlt className="text-[var(--pf-accent)]" />
            <span>+880 1968-484451</span>
          </div>
        </motion.div>

        {/* Social Links */}
        <motion.div
          className="rounded-xl p-10
                     bg-[rgba(255,255,255,0.08)]
                     dark:bg-[rgba(0,0,0,0.4)]
                     backdrop-blur-md"
          variants={slideRight}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <h3 className="text-3xl font-semibold mb-8">
            Find Me Online
          </h3>

          <div className="flex gap-6 flex-wrap">
            {[
              { icon: <FaGithub />, link: "https://github.com/SadiaAhmedBushra", label: "GitHub" },
              {
                icon: <FaLinkedin />,
                link: "https://www.linkedin.com/in/sadia-ahmed-062082263/",
                label: "LinkedIn",
              }
            ].map(({ icon, link, label }) => (
              <motion.a
                key={label}
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -6, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                className="w-14 h-14 flex items-center justify-center
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
