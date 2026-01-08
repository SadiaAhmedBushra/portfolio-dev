import React from "react";
import photoUrl from "../../assets/bFormal.png";

const Hero = () => {
  
  return (
    <section
      id="home"
      className="min-h-[80vh] flex flex-col md:flex-row items-center max-w-7xl mx-auto px-6 md:px-12 py-16"
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-center md:text-left space-y-6">
        <h1
          className="text-5xl font-extrabold tracking-wide"
          style={{ color: "var(--pf-primary)" }}
        >
          Sadia Ahmed Bushra
        </h1>
        <p
          className="text-xl font-semibold"
          style={{ color: "var(--pf-secondary)" }}
        >
          Frontend Developer | Web Developer | Passionate about building
          clean, user-friendly interfaces.
        </p>
        <p
          className="text-base max-w-xl"
          style={{ color: "var(--pf-primary)" }}
        >
          I specialize in creating modern web applications with React and
          Tailwind CSS, focusing on performance, accessibility, and seamless
          user experiences. Dedicated to continuous learning and delivering
          professional results.
        </p>
      </div>

      {/* Photo */}
      <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center md:justify-end">
        <img
          src={photoUrl}
          alt="Sadia Ahmed Bushra"
          className="w-56 h-56 rounded-full object-cover border-4 border-[var(--pf-accent)] shadow-lg transition-transform hover:scale-105"
          loading="lazy"
        />
      </div>
    </section>
  );
};

export default Hero;
