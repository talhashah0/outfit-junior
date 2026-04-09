import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  // lock scroll when menu opens
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <>
      <header className="oj-navbar">
        <div className="oj-navbar-inner">

          {/* MOBILE BUTTON */}
          <button
            className="oj-mobile-btn"
            onClick={() => setMenuOpen(true)}
          >
            OJ
          </button>

          {/* CENTER BRAND (NOT clickable) */}
          <div className="oj-brand-center">OUTFIT JUNIOR</div>

          {/* DESKTOP LINKS */}
          <div className="oj-links">
            <NavLink to="/" className="oj-link">HOME</NavLink>
            <NavLink to="/shop" className="oj-link">SHOP</NavLink>
            <NavLink to="/contact" className="oj-link">CONTACT</NavLink>
          </div>

        </div>
      </header>

      {/* MOBILE MENU OVERLAY */}
      <div className={`oj-mobile-menu ${menuOpen ? "open" : ""}`}>
        <button
          className="oj-close"
          onClick={() => setMenuOpen(false)}
        >
          ✕
        </button>

        <NavLink to="/" onClick={() => setMenuOpen(false)}>HOME</NavLink>
        <NavLink to="/shop" onClick={() => setMenuOpen(false)}>SHOP</NavLink>
        <NavLink to="/contact" onClick={() => setMenuOpen(false)}>CONTACT</NavLink>
      </div>
    </>
  );
}