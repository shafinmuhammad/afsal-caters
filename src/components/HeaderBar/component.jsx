import React, { useState, useEffect } from 'react';
import logo from '../../assets/round-logo.png';
import { useIsMobile } from '../../hooks/useIsMobile';
import './style.scss';

const HeaderBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'menu', 'gallery', 'reviews', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Check if section is currently somewhat near the top of the viewport
          if (rect.top <= 200 && rect.bottom >= 200) {
            current = section;
            break;
          }
        }
      }
      
      if (current && current !== activeSection) {
        setActiveSection(current);
      } else if (window.scrollY < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);

  const handleNavClick = (section) => {
    setMenuOpen(false);
    setActiveSection(section);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="logo-container">
        <img src={logo} alt="Afsal Catering Logo" className="logo" />
      </div>

      {isMobile ? (
        <div className="mobile-menu-container">
          <button className="hamburger-btn" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? '✕' : '☰'}
          </button>
          
          {menuOpen && (
            <div className="mobile-dropdown">
              <ul className="nav-links-mobile">
                <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>HOME</a></li>
                <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>ABOUT</a></li>
                <li><a href="#menu" className={activeSection === 'menu' ? 'active' : ''} onClick={() => handleNavClick('menu')}>SERVICE</a></li>
                <li><a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={() => handleNavClick('gallery')}>GALLERY</a></li>
                <li><a href="#reviews" className={activeSection === 'reviews' ? 'active' : ''} onClick={() => handleNavClick('reviews')}>REVIEWS</a></li>
                <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>CONTACT</a></li>
              </ul>
              <a href="https://wa.me/919946395402" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none'}}>
                <button className="btn-primary mobile-call-btn">ENQUIRY NOW</button>
              </a>
            </div>
          )}
        </div>
      ) : (
        <>
          <ul className="nav-links">
            <li><a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>Home</a></li>
            <li><a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>About</a></li>
            <li><a href="#menu" className={activeSection === 'menu' ? 'active' : ''} onClick={() => handleNavClick('menu')}>Menu</a></li>
            <li><a href="#gallery" className={activeSection === 'gallery' ? 'active' : ''} onClick={() => handleNavClick('gallery')}>Gallery</a></li>
            <li><a href="#reviews" className={activeSection === 'reviews' ? 'active' : ''} onClick={() => handleNavClick('reviews')}>Reviews</a></li>
            <li><a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>Contact</a></li>
          </ul>
          <a href="tel:+919946395402" style={{textDecoration: 'none'}}>
            <button className="btn-primary">Call Now</button>
          </a>
        </>
      )}
    </nav>
  );
};

export default HeaderBar;
