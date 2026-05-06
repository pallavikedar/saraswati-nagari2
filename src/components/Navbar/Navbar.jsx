import React, { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../../assets/logo.png";
import styles from "./Navbar.module.css";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../Context/LanguageContext";
import { useLocation } from "react-router-dom";


export const Translation = () => {

  const { lang, setLang } = useLanguage();

  return (
    <select value={lang} onChange={(e) => setLang(e.target.value)}>
      <option value="en">English</option>
      <option value="mr">मराठी</option>
      <option value="hi">हिंदी</option>
    </select>
  );
};



const Navbar = () => {
    const location = useLocation();
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);


const handleSectionClick = (sectionId) => {
  closeMenu();

  if (location.pathname === "/") {
    // Same page → scroll directly
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  } else {
    // Different page → navigate + scroll
    navigate("/");

    setTimeout(() => {
      const el = document.getElementById(sectionId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 150);
  }
};



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const closeMenu = () => {
    setMenuOpen(false);
  };
  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <img src={logo} alt="Saraswati Nagri Logo" />
        </div>

        <button
          className={styles.menuButton}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FiX size={28} /> : <FiMenu size={28} />}
        </button>
        
        <ul className={`${styles.navLinks} ${menuOpen ? styles.show : ""}`}>
          <li>
    <span onClick={() => handleSectionClick("home")}>
      Home
    </span>
  </li>

  <li>
    <span onClick={() => handleSectionClick("about")}>
      About Us
    </span>
  </li>

  <li>
    <span onClick={() => handleSectionClick("layout")}>
      Projects
    </span>
  </li>
          <li><Link to="/gallery" onClick={closeMenu}>Gallery</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact Us</Link></li>
        </ul>
          {/* <Translation/> */}
      </div>
    </nav>
  );
};

export default Navbar;