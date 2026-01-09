import React, { useEffect, useState } from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  // Detect current theme by reading the data-theme attribute
  const [isDark, setIsDark] = useState(
    document.documentElement.getAttribute("data-theme") === "dark"
  );

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const theme = document.documentElement.getAttribute("data-theme");
      setIsDark(theme === "dark");
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  // Colors that adapt to dark/light
  const bgColor = "var(--pf-base-100)";
  const textColor = "var(--pf-primary)";
  const accentColor = "var(--pf-accent)";
  const secondaryBg = "var(--pf-secondary)";
  const baseContent = "var(--pf-base-content)";

  // For links and icons, use textColor but change opacity for subtlety in light mode
  const linkClass = isDark
    ? `hover:text-[${accentColor}] transition-colors`
    : `text-[${textColor}] hover:text-[${accentColor}] transition-colors`;

  return (
    <footer
      className="py-12 px-6 sm:px-12"
      style={{ backgroundColor: bgColor, color: textColor }}
      aria-label="Footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About / Brand */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold tracking-wide">BUSHRA</h2>
          <p
            className="text-sm max-w-xs leading-relaxed"
            style={{ opacity: isDark ? 0.9 : 0.7 }}
          >
            Passionate about creating elegant, efficient web solutions. Connect
            with me on social or explore my work and skills.
          </p>
          <div className="flex space-x-5 mt-4">
            <a
              href="https://linkedin.com/in/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className={`${linkClass}`}
            >
              <FaLinkedin size={22} />
            </a>
            <a
              href="https://github.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className={`${linkClass}`}
            >
              <FaGithub size={22} />
            </a>
            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
              className={`${linkClass}`}
            >
              <FaTwitter size={22} />
            </a>
            <a
              href="mailto:youremail@example.com"
              aria-label="Email"
              className={`${linkClass}`}
            >
              <FaEnvelope size={22} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <nav aria-label="Footer navigation" className="space-y-3">
          <h3 className="text-xl font-semibold" style={{ color: textColor }}>
            Quick Links
          </h3>
          <ul className="space-y-2 text-sm" style={{ color: textColor }}>
            {[
              { name: "About", href: "#about" },
              { name: "Skills", href: "#skills" },
              { name: "Projects", href: "#projects" },
              { name: "Education", href: "#education" },
              { name: "Contact", href: "#contact" },
            ].map(({ name, href }) => (
              <li key={name}>
                <a href={href} className={`${linkClass}`}>
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Newsletter / Contact */}
        <div>
          <h3
            className="text-xl font-semibold mb-3"
            style={{ color: textColor }}
          >
            Stay Connected
          </h3>
          <p
            className="text-sm max-w-sm leading-relaxed mb-4"
            style={{ opacity: isDark ? 0.9 : 0.7, color: textColor }}
          >
            Subscribe to get updates about my latest projects and articles.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex flex-col sm:flex-row gap-3"
            aria-label="Subscribe form"
          >
            <input
              type="email"
              placeholder="Your email"
              required
              className="flex-grow rounded-md px-4 py-2"
              style={{
                border: "none",
                color: isDark ? "var(--pf-primary)" : "var(--pf-secondary)",
                backgroundColor: isDark ? "var(--pf-base-100)" : "var(--pf-primary)",
              }}
            />
            <button
              type="submit"
              className="font-semibold px-5 py-2 rounded-md transition-colors"
              style={{
                backgroundColor: accentColor,
                color: bgColor,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = textColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = accentColor)
              }
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div
        className="mt-12 border-t opacity-20 pt-6 text-center text-xs select-none"
        style={{ borderColor: baseContent, color: textColor }}
      >
        &copy; {new Date().getFullYear()} BUSHRA. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
