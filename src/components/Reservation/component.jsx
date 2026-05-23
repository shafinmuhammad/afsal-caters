import React from 'react';
import './style.scss';

const Reservation = () => {
  return (
    <section className="reservation-section page-section bg-secondary" id="reservations">
      <div className="section-header dark">
        <span className="badge dark-badge">Book A Table</span>
        <h2>Make a <span>Reservation</span></h2>
        <div className="divider"></div>
        <p className="subtitle">Reserve your table and enjoy an unforgettable dining experience</p>
      </div>
      
      <div className="reservation-form-container">
        <form className="reservation-form">
          <div className="form-row">
            <div className="form-group">
              <label>👤 Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>
            <div className="form-group">
              <label>✉️ Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>📞 Phone Number</label>
              <input type="tel" placeholder="+91 12345 67890" />
            </div>
            <div className="form-group">
              <label>👥 Number of Guests</label>
              <select>
                <option>2 Guests</option>
                <option>3 Guests</option>
                <option>4 Guests</option>
                <option>5+ Guests</option>
              </select>
            </div>
          </div>
          <div className="form-row">
            <div className="form-group">
              <label>📅 Date</label>
              <input type="date" />
            </div>
            <div className="form-group">
              <label>🕒 Time</label>
              <input type="time" />
            </div>
          </div>
          <div className="form-group full-width">
            <label>💬 Special Requests (Optional)</label>
            <textarea placeholder="Any dietary restrictions or special occasions?" rows="4"></textarea>
          </div>
          <button type="button" className="confirm-btn">Confirm Reservation</button>
          <p className="form-footer-text">We'll confirm your reservation via phone or email within 24 hours</p>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
