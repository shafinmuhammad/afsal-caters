import React from 'react';
import './style.scss';

const Guestbook = () => {
  return (
    <section className="guestbook-section page-section bg-white" id="reviews">
      <div className="section-header">
        <span className="badge">People Talk</span>
        <h2>Our <span>Guestbook</span></h2>
        <div className="divider"></div>
      </div>
      
      <div className="reviews-grid">
        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"Good service and healthy food."</p>
        </div>
        <div className="review-card">
          <div className="stars">★★★★★</div>
          <p className="quote">"Very friendly staff and atmosphere. Happy with their customer dealing."</p>
        </div>
      </div>
    </section>
  );
};

export default Guestbook;
