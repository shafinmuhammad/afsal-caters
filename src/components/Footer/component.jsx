import React from 'react';
import { MapPin, Phone, Mail, Heart } from 'lucide-react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../../assets/round-logo.png';
import './style.scss';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-brand">
          <div className="footer-logo">
            <img src={logo} alt="Afsal Catering Logo" />
            <h3>AFSAL CATERING<br/>& BANQUET HALL</h3>
          </div>
          <p>Experience the best catering service in Manjeri. Making every celebration memorable with delicious food.</p>
          <div className="social-icons">
            <a href="https://www.facebook.com/afsalcateringservice" target="_blank" rel="noopener noreferrer"><FaFacebook size={20} /></a>
            <a href="https://www.instagram.com/afsal_catering" target="_blank" rel="noopener noreferrer"><FaInstagram size={20} /></a>
          </div>
        </div>
        
        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#menu">Our Menu</a></li>
            <li><a href="#gallery">Gallery</a></li>
            <li><a href="#reservations">Reservations</a></li>
          </ul>
        </div>
        
        <div className="footer-links">
          <h4>Our Specialties</h4>
          <ul>
            <li><a href="#menu">Wedding Catering</a></li>
            <li><a href="#menu">Corporate Events</a></li>
            <li><a href="#menu">Housewarming Parties</a></li>
            <li><a href="#menu">Customized Menus</a></li>
            <li><a href="#menu">Event Management</a></li>
          </ul>
        </div>
        
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <ul>
            <li style={{display: 'flex', alignItems: 'flex-start'}}><MapPin color="var(--primary)" size={18} style={{marginRight: '8px', flexShrink: 0}} /> <span>near GAS GODOWN, near Ganga Gas godown, Mullampara Town, Manjeri, Kerala 676121</span></li>
            <li style={{display: 'flex', alignItems: 'center'}}><Phone color="var(--primary)" size={18} style={{marginRight: '8px'}} /> +91 9946395402 | 9495075524</li>
            <li style={{display: 'flex', alignItems: 'center'}}><Mail color="var(--primary)" size={18} style={{marginRight: '8px'}} /> info@afsalcatering.com</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 AFSAL CATERING. All Rights Reserved.</p>
        <p style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Made with <Heart color="var(--primary)" size={14} fill="var(--primary)" style={{margin: '0 4px'}} /> in Manjeri</p>
      </div>
    </footer>
  );
};

export default Footer;
