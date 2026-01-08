// import React, { useState, useEffect } from "react";

// const Navbar = () => {
//   const [isDark, setIsDark] = useState(true);
//   const [menuOpen, setMenuOpen] = useState(false);

//   useEffect(() => {
//     document.documentElement.setAttribute(
//       "data-theme",
//       isDark ? "dark" : "light"
//     );
//   }, [isDark]);

//   const toggleTheme = () => setIsDark(!isDark);
//   const toggleMenu = () => setMenuOpen(!menuOpen);

//   const navLinks = [
//     { name: "Home", to: "/" },
//     { name: "About", to: "about" },
//     { name: "Skills", to: "skills" },
//     { name: "Projects", to: "projects" },
//     { name: "Education", to: "education" },
//     { name: "Contact", to: "contact" },
//   ];

//   const handleScroll = (id) => {
//     setMenuOpen(false);
//     if (id === "/") {
//       window.scrollTo({ top: 0, behavior: "smooth" });
//     } else {
//       const element = document.getElementById(id);
//       if (element) {
//         element.scrollIntoView({ behavior: "smooth" });
//       }
//     }
//   };

//   return (
//     <nav
//       className="fixed w-full z-50 shadow-md"
//       style={{ backgroundColor: "var(--pf-base-100)" }}
//     >
//       <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
//         <button
//           type="button"
//           onClick={() => handleScroll("/")}
//           className="text-[var(--pf-primary)] text-2xl font-extrabold tracking-widest select-none transition-colors hover:text-[var(--pf-accent)]"
//           aria-label="Go to Home"
//         >
//           BUSHRA
//         </button>

//         {/* Desktop Nav Links */}
//         <ul className="hidden md:flex space-x-14 font-semibold uppercase tracking-widest">
//           {navLinks.map(({ name, to }) => (
//             <li key={name}>
//               <button
//                 type="button"
//                 onClick={() => handleScroll(to)}
//                 className="relative px-3 py-2 transition-colors text-[var(--pf-primary)] hover:text-[var(--pf-accent)]"
//               >
//                 {name}
//                 <span
//                   className="absolute left-0 -bottom-1 h-[2px] bg-[var(--pf-accent)] rounded transition-all w-0 group-hover:w-full"
//                   style={{ willChange: "width" }}
//                 />
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Right controls */}
//         <div className="flex items-center space-x-5">
//           {/* Theme toggle */}
//           <button
//             type="button"
//             onClick={toggleTheme}
//             aria-label="Toggle Dark Mode"
//             className="btn btn-primary btn-sm px-3 py-1 font-semibold select-none focus:outline-none focus:ring-2 focus:ring-[var(--pf-accent)] rounded-md transition"
//             title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
//             style={{
//               backgroundColor: "var(--pf-primary)",
//               color: "var(--pf-base-100)",
//               boxShadow: "0 4px 6px rgba(62,58,57,0.15)",
//             }}
//           >
//             {isDark ? "☀️" : "🌙"}
//           </button>

//           {/* Hamburger */}
//           <button
//             type="button"
//             onClick={toggleMenu}
//             className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer select-none focus:outline-none"
//             aria-label="Toggle Menu"
//             aria-expanded={menuOpen}
//           >
//             <span
//               className={`block h-1.5 w-7 rounded transform transition duration-300 ease-in-out bg-[var(--pf-primary)] ${
//                 menuOpen ? "rotate-45 translate-y-2" : ""
//               }`}
//             />
//             <span
//               className={`block h-1.5 w-7 rounded transition-opacity duration-300 ease-in-out bg-[var(--pf-primary)] ${
//                 menuOpen ? "opacity-0" : "opacity-100"
//               }`}
//             />
//             <span
//               className={`block h-1.5 w-7 rounded transform transition duration-300 ease-in-out bg-[var(--pf-primary)] ${
//                 menuOpen ? "-rotate-45 -translate-y-2" : ""
//               }`}
//             />
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden font-semibold uppercase tracking-widest overflow-hidden transition-[max-height,padding] duration-500 ease-in-out`}
//         style={{
//           maxHeight: menuOpen ? "16rem" : "0",
//           padding: menuOpen ? "1.25rem 2rem" : "0 2rem",
//           backgroundColor: "var(--pf-secondary)",
//           color: "var(--pf-base-content)",
//         }}
//       >
//         <ul className="flex flex-col space-y-6">
//           {navLinks.map(({ name, to }) => (
//             <li key={name}>
//               <button
//                 type="button"
//                 onClick={() => handleScroll(to)}
//                 className="block px-3 py-2 rounded-md transition-colors text-[var(--pf-base-content)] hover:text-[var(--pf-accent)]"
//               >
//                 {name}
//               </button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;













import React, { useState, useEffect } from "react";

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
        if (section) {
          if (section.offsetTop <= scrollPosition) {
            currentSection = sections[i].id;
          }
        }
      }
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setActiveSection(id);
  };

  // Utility to get active styles based on theme for buttons
  const getActiveClasses = () => {
    return isDark
      ? "text-[var(--pf-accent)] font-bold"
      : "text-[var(--pf-accent)] font-bold";
  };

  // Utility to get inactive styles based on theme
  const getInactiveClasses = () => {
    return isDark
      ? "text-[var(--pf-primary)] hover:text-[var(--pf-accent)]"
      : "text-[var(--pf-primary)] hover:text-[var(--pf-accent)]";
  };

  // For mobile menu: active vs inactive colors
  const getMobileActiveClasses = () => {
    return isDark
      ? "text-[var(--pf-accent)] font-bold"
      : "text-[var(--pf-accent)] font-bold";
  };

  const getMobileInactiveClasses = () => {
    return isDark
      ? "text-[var(--pf-base-content)] hover:text-[var(--pf-accent)]"
      : "text-[var(--pf-base-content)] hover:text-[var(--pf-accent)]";
  };

  return (
    <nav
      className="fixed w-full z-50 shadow-md"
      style={{ backgroundColor: "var(--pf-base-100)" }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center h-16">
        <button
          type="button"
          onClick={() => handleClick("/")}
          className={`text-2xl font-extrabold tracking-widest select-none transition-colors ${
            activeSection === "/"
              ? getActiveClasses()
              : getInactiveClasses()
          }`}
          aria-label="Go to Home"
        >
          BUSHRA
        </button>

        {/* Desktop Nav Links */}
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
                <span
                  className="absolute left-0 -bottom-1 h-[2px] bg-[var(--pf-accent)] rounded transition-all w-0 group-hover:w-full"
                  style={{ willChange: "width" }}
                />
              </button>
            </li>
          ))}
        </ul>

        {/* Right controls */}
        <div className="flex items-center space-x-5">
          {/* Theme toggle */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label="Toggle Dark Mode"
            className="btn btn-primary btn-sm px-3 py-1 font-semibold select-none focus:outline-none focus:ring-2 focus:ring-[var(--pf-accent)] rounded-md transition"
            title={isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}
            style={{
              backgroundColor: "var(--pf-primary)",
              color: "var(--pf-base-100)",
              boxShadow: "0 4px 6px rgba(62,58,57,0.15)",
            }}
          >
            {isDark ? "☀️" : "🌙"}
          </button>

          {/* Hamburger */}
          <button
            type="button"
            onClick={toggleMenu}
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 space-y-1.5 cursor-pointer select-none focus:outline-none"
            aria-label="Toggle Menu"
            aria-expanded={menuOpen}
          >
            <span
              className={`block h-1.5 w-7 rounded transform transition duration-300 ease-in-out bg-[var(--pf-primary)] ${
                menuOpen ? "rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block h-1.5 w-7 rounded transition-opacity duration-300 ease-in-out bg-[var(--pf-primary)] ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`block h-1.5 w-7 rounded transform transition duration-300 ease-in-out bg-[var(--pf-primary)] ${
                menuOpen ? "-rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden font-semibold uppercase tracking-widest overflow-hidden transition-[max-height,padding] duration-500 ease-in-out`}
        style={{
          maxHeight: menuOpen ? "16rem" : "0",
          padding: menuOpen ? "1.25rem 2rem" : "0 2rem",
          backgroundColor: "var(--pf-secondary)",
          color: "var(--pf-base-content)",
        }}
      >
        <ul className="flex flex-col space-y-6">
          {navLinks.map(({ name, to }) => (
            <li key={name}>
              <button
                type="button"
                onClick={() => handleClick(to)}
                className={`block px-3 py-2 rounded-md transition-colors ${
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

