import React, { Suspense } from 'react';
import HeaderBar from './components/HeaderBar';
import Hero from './components/Hero';
import './App.css';

const About = React.lazy(() => import('./components/About'));
const Menu = React.lazy(() => import('./components/Menu'));
const Gallery = React.lazy(() => import('./components/Gallery'));
const Guestbook = React.lazy(() => import('./components/Guestbook'));
const Reservation = React.lazy(() => import('./components/Reservation'));
const Contact = React.lazy(() => import('./components/Contact'));
const Footer = React.lazy(() => import('./components/Footer'));

function App() {
  return (
    <div className="main-wrapper">
      <HeaderBar />
      <Hero />
      
      <Suspense fallback={<div className="loading-fallback">Loading content...</div>}>
        <About />
        <Menu />
        <Gallery />
        <Guestbook />
        <Reservation />
        <Contact />
        <Footer />
      </Suspense>
    </div>
  );
}

export default App;
