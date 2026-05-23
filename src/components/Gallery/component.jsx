import React from 'react';
import img1 from '../../assets/mandi-dish.png';
import img2 from '../../assets/round.jpg';
import img3 from '../../assets/image.png';
import img4 from '../../assets/banner.png';
import img5 from '../../assets/banner-2.png';
import img6 from '../../assets/image.png';
import img7 from '../../assets/round-plate.avif';
import img8 from '../../assets/food.avif';

import './style.scss';

const Gallery = () => {
  return (
    <section className="gallery-section page-section bg-black" id="gallery">
      <div className="section-header">
        <span className="badge">Visual Feast</span>
        <h2>Our <span>Gallery</span></h2>
        <div className="divider"></div>
      </div>
      
      <div className="gallery-grid">
        <img src={img1} alt="Catering Gallery 1" className="gallery-img" />
        <img src={img2} alt="Catering Gallery 2" className="gallery-img" />
        <img src={img3} alt="Catering Gallery 3" className="gallery-img" />
        <img src={img4} alt="Catering Gallery 4" className="gallery-img" />
        <img src={img5} alt="Catering Gallery 5" className="gallery-img" />
        <img src={img6} alt="Catering Gallery 6" className="gallery-img" />
        <img src={img7} alt="Catering Gallery 7" className="gallery-img" />
        <img src={img8} alt="Catering Gallery 8" className="gallery-img" />
      </div>
    </section>
  );
};

export default Gallery;
