import React from 'react';
import { MapPin, Phone, Clock, Star } from 'lucide-react';
import { FaInstagram } from 'react-icons/fa';
import './style.scss';

const Contact = () => {
  return (
    <section className="contact-section page-section bg-white" id="contact">
      <div className="section-header">
        <span className="badge">Get In Touch</span>
        <h2>Visit <span>Us</span></h2>
        <div className="divider"></div>
      </div>
      
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-card">
            <div className="icon-circle"><MapPin color="var(--primary)" size={24} /></div>
            <div>
              <h4>Address</h4>
              <p>near GAS GODOWN, near Ganga Gas godown, Mullampara Town, Manjeri, Kerala 676121</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle"><Phone color="var(--primary)" size={24} /></div>
            <div>
              <h4>Phone</h4>
              <p>+91 9946395402 | 9495075524</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle"><FaInstagram color="var(--primary)" size={24} /></div>
            <div>
              <h4>Instagram</h4>
              <p><a href="https://www.instagram.com/afsal_catering" target="_blank" rel="noopener noreferrer" style={{color: 'inherit', textDecoration: 'none'}}>@afsal_catering</a></p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle"><Clock color="var(--primary)" size={24} /></div>
            <div>
              <h4>Operating Hours</h4>
              <p>Open Daily (Closes at 6:30 PM)</p>
            </div>
          </div>
          <div className="info-card">
            <div className="icon-circle"><Star color="var(--primary)" size={24} fill="var(--primary)" /></div>
            <div>
              <h4>Google Rating</h4>
              <p>4.5/5 (55 Reviews)</p>
            </div>
          </div>
          <div className="contact-buttons">
            <a href="https://wa.me/919946395402" target="_blank" rel="noopener noreferrer" style={{textDecoration: 'none', display: 'block'}}>
              <button className="whatsapp-btn full-width">Chat on WhatsApp</button>
            </a>
            <a href="tel:+919946395402" style={{textDecoration: 'none', display: 'block'}}>
              <button className="call-btn full-width">Call Now</button>
            </a>
          </div>
        </div>
        <div className="contact-map">
          <div className="map-placeholder">
            <iframe 
              src="https://maps.google.com/maps?q=AFSAL%20CATERING%20AND%20BANQUET%20HALL,%20near%20GAS%20GODOWN,%20Mullampara%20Town,%20Manjeri&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{border:0, borderRadius: '12px'}} 
              allowFullScreen="" 
              loading="lazy">
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
