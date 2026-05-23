import React from 'react';
import { Award, Users, Building, Banknote } from 'lucide-react';
import banner2 from '../../assets/banner-2.png';
import mandiDish from '../../assets/mandi-dish.png';
import './style.scss';

const About = () => {
  return (
    <section className="about-section page-section bg-white" id="about">
      <div className="section-header">
        <span className="badge">Our Story</span>
        <h2>Welcome To AFSAL CATERING & BANQUET HALL</h2>
        <div className="divider"></div>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>At AFSAL Catering and Banquet Hall, we bring taste, elegance, and unforgettable experiences to every event. Located in Manjeri, Kerala, we provide professional catering services, banquet hall facilities, and complete event management solutions for weddings, receptions, engagements, corporate functions, and family celebrations.</p>
          <p>With a passion for quality food and excellent hospitality, our team focuses on delivering exceptional service and creating memorable moments for our clients. From delicious cuisine to well-organized events, we make every celebration special.</p>
          <a href="#menu" className="explore-link">Explore Our Services &rarr;</a>
        </div>
        <div className="about-image-container">
          <div className="image-overlay">
            <h3>Premium Catering & Event Experiences</h3>
            <p>in Manjeri, Kerala</p>
          </div>
          <img src={banner2} alt="Catering Setup" onError={(e) => e.target.src = mandiDish} />
        </div>
      </div>

      <div className="features-grid">
        <div className="feature-card">
          <span className="icon"><Award color="var(--primary)" size={32} /></span>
          <h4>Quality & Hygienic Food</h4>
          <p>Prepared with the finest ingredients and utmost care</p>
        </div>
        <div className="feature-card">
          <span className="icon"><Users color="var(--primary)" size={32} /></span>
          <h4>Experienced Team</h4>
          <p>Professional event management and friendly customer service</p>
        </div>
        <div className="feature-card">
          <span className="icon"><Building color="var(--primary)" size={32} /></span>
          <h4>Elegant Banquet Hall</h4>
          <p>Beautiful venue perfect for any special occasion</p>
        </div>
        <div className="feature-card">
          <span className="icon"><Banknote color="var(--primary)" size={32} /></span>
          <h4>Affordable Packages</h4>
          <p>Customized catering options that fit your budget</p>
        </div>
      </div>
    </section>
  );
};

export default About;
