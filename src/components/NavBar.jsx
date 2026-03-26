import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";

function NavBar({ scrolled }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth <= 1024); // Tablet and mobile breakpoint
    };

    checkIsMobile();
    window.addEventListener("resize", checkIsMobile);

    return () => window.removeEventListener("resize", checkIsMobile);
  }, []);
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className={`primary-nav ${scrolled ? "sticky" : ""}`}>
        <ul className={isMobile ? "mobile-hidden" : ""}>
          {["home", "about", "projects", "services", "contact"].map((item) => (
            <li key={item}>
              <NavLink
                to={`/${item === "home" ? "" : item}`}
                className={({ isActive }) => (isActive ? "active" : "")}
                end={item === "home"}
                onClick={closeMobileMenu}
              >
                {item.charAt(0).toUpperCase() + item.slice(1)}
              </NavLink>
            </li>
          ))}
        </ul>

        {isMobile && (
          <button
            className={`hamburger-menu ${isMobileMenuOpen ? "open" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        )}
      </nav>

      {isMobile && (
        <div
          className={`mobile-menu-overlay ${isMobileMenuOpen ? "open" : ""}`}
        >
          <div className="mobile-menu-content">
            {["home", "about", "projects", "services", "contact"].map(
              (item) => (
                <NavLink
                  key={item}
                  to={`/${item === "home" ? "" : item}`}
                  className={({ isActive }) => (isActive ? "active" : "")}
                  end={item === "home"}
                  onClick={closeMobileMenu}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </NavLink>
              ),
            )}
          </div>
        </div>
      )}
    </>
  );
}

export default NavBar;
