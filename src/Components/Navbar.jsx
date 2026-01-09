import React, { useState, useEffect } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdOutlineLightMode, MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [isDark, setIsDark] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("/");

  useEffect(() => {
    document.documentElement.setAttribute(
      "data-theme",
      isDark ? "dark" : "light"
    );
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: "/" },
        { id: "about" },
        { id: "skills" },
        { id: "projects" },
        { id: "education" },
        { id: "contact" },
      ];

      let currentSection = "/";
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (let i = 1; i < sections.length; i++) {
        const section = document.getElementById(sections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          currentSection = sections[i].id;
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent horizontal scroll on body when menu is open
  useEffect(() => {
    document.body.style.overflowX = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  const toggleTheme = () => setIsDark(!isDark);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Contact", to: "contact" },
  ];

  const handleClick = (id) => {
    setMenuOpen(false);
    if (id === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: "smooth" });
    }
    setActiveSection(id);
  };

  const getActiveClasses = () => "text-[var(--pf-accent)] font-bold";

  const getInactiveClasses = () =>
    "text-[var(--pf-primary)] hover:text-[var(--pf-accent)]";

  const getMobileActiveClasses = () => "text-[var(--pf-accent)] font-bold";

  const getMobileInactiveClasses = () =>
    "text-[var(--pf-base-content)] hover:text-[var(--pf-accent)]";

  return (
    <nav
      className="fixed w-full z-50 shadow-md overflow-x-hidden"
      style={{ backgroundColor: "var(--pf-base-100)" }}
    >
      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 md:px-12 flex justify-between items-center h-16">
        <button
          type="button"
          onClick={() => handleClick("/")}
          className={`text-2xl font-extrabold tracking-widest select-none transition-colors ${
            activeSection === "/" ? getActiveClasses() : getInactiveClasses()
          }`}
        >
          BUSHRA
        </button>

        <ul className="hidden md:flex space-x-14 font-semibold uppercase tracking-widest">
          {navLinks.map(({ name, to }) => (
            <li key={name}>
              <button
                type="button"
                onClick={() => handleClick(to)}
                className={`relative px-3 py-2 transition-colors ${
                  activeSection === to
                    ? getActiveClasses()
                    : getInactiveClasses()
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center space-x-5">
          {/* Theme Button — Hero-style */}
          <button
            onClick={toggleTheme}
            className="bg-[var(--pf-primary)] p-1 rounded-full shadow-lg hover:bg-[var(--pf-accent)] transition-colors duration-300 cursor-pointer flex items-center justify-center drop-shadow-md"
            style={{
              color: "var(--pf-base-100)",
              textShadow: "0 0 5px rgba(0,0,0,0.2)",
            }}
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <MdOutlineLightMode size={22} />
            ) : (
              <MdOutlineDarkMode size={22} />
            )}
          </button>

          {/* Hamburger */}
          <button
            onClick={toggleMenu}
            className="md:hidden flex items-center justify-center w-8 h-8 mr-1"
            aria-label="Toggle Menu"
          >
            <RxHamburgerMenu size={26} className="text-[var(--pf-primary)]" />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden font-semibold uppercase tracking-widest overflow-hidden transition-[max-height,padding] duration-500 ease-in-out
          ${menuOpen ? "max-h-screen p-5" : "max-h-0 p-0"}`}
        style={{
          backgroundColor: "var(--pf-secondary)",
          color: "var(--pf-base-content)",
        }}
      >
        <ul className="flex flex-col space-y-6">
          {navLinks.map(({ name, to }) => (
            <li key={name}>
              <button
                onClick={() => handleClick(to)}
                className={`block px-3 py-2 ${
                  activeSection === to
                    ? getMobileActiveClasses()
                    : getMobileInactiveClasses()
                }`}
              >
                {name}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
