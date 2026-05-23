import React from 'react';
import './style.scss';

const Menu = () => {
  return (
    <section className="menu-section page-section bg-primary" id="menu">
      <div className="section-header dark">
        <span className="badge dark-badge">What We Offer</span>
        <h2>Our <span>Services</span></h2>
        <div className="divider"></div>
      </div>
      
      <div className="menu-tabs">
        <button className="tab active">Catering</button>
        <button className="tab">Banquet Hall</button>
        <button className="tab">Event Management</button>
      </div>

      <div className="menu-grid">
        <div className="menu-card">
          <div className="card-header">
            <h3>Wedding Catering</h3>
            <span className="popular-tag">★ Popular</span>
          </div>
          <p>Traditional Kerala Food & Premium Biryani for your special day</p>
          <div className="card-footer" style={{justifyContent: 'flex-end'}}>
            <button className="order-btn">Enquire Now</button>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-header">
            <h3>Banquet Hall Booking</h3>
            <span className="popular-tag">★ Popular</span>
          </div>
          <p>Elegant venue for weddings, receptions, and family functions</p>
          <div className="card-footer" style={{justifyContent: 'flex-end'}}>
            <button className="order-btn">Enquire Now</button>
          </div>
        </div>
        <div className="menu-card">
          <div className="card-header">
            <h3>Complete Event Management</h3>
            <span className="popular-tag">★ Popular</span>
          </div>
          <p>Wedding planning, stage decoration, and event coordination</p>
          <div className="card-footer" style={{justifyContent: 'flex-end'}}>
            <button className="order-btn">Enquire Now</button>
          </div>
        </div>
      </div>

      <div className="menu-cta">
        <p>Can't decide? Let us help you!</p>
        <button className="whatsapp-btn">Chat on WhatsApp</button>
      </div>
    </section>
  );
};

export default Menu;
