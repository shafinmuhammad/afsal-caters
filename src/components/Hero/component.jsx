import img1 from '../../assets/round.jpg';
import img2 from '../../assets/round-plate.avif';
import img3 from '../../assets/food.avif';
import './style.scss';

const Hero = () => {
  return (
    <div className="app-container" id="home">
      <div className="bg-decoration circle-1"></div>
      <div className="bg-decoration circle-2"></div>
      <main className="hero-section">
        <div className="hero-content">
          <h1>Delicious food<br/>always tells a<br/>story</h1>
          <p>
            Welcome to the world where food is not just a sustenance; it's a
            celebration of life. Join us on a culinary journey, and savor the joy with
            every delicious bite.
          </p>
          <a href="tel:+919946395402" style={{textDecoration: 'none'}}>
            <button className="btn-primary">ENQUIRY NOW</button>
          </a>
        </div>
        <div className="hero-image-container stacked-container">
          <div className="hero-stacked-img img-3">
            <img src={img3} alt="Catering Food 3" />
          </div>
          <div className="hero-stacked-img img-2">
            <img src={img2} alt="Catering Food 2" />
          </div>
          <div className="hero-stacked-img img-1">
            <img src={img1} alt="Catering Food 1" />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Hero;
