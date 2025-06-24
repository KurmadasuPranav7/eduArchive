import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import heroImage from '../assets/math_doodle.png';
import heroImage2 from '../assets/math_doodle.png';  

function HeroSection() {
  const [titleOpacity, setTitleOpacity] = useState(1);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('.hero-section');
      
      if (heroSection) {
        const heroTop = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        
        // Calculate when title should start fading
        const fadeStart = heroTop + heroHeight * 0.1;
        const fadeEnd = heroTop + heroHeight * 0.6;
        
        if (scrollPosition >= fadeStart) {
          const progress = Math.min(1, (scrollPosition - fadeStart) / (fadeEnd - fadeStart));
          setTitleOpacity(1 - progress);
        } else {
          setTitleOpacity(1);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="hero-section">
      <h1 className="hero-title" id="hero-title" style={{ opacity: titleOpacity }}>eduArchive</h1>
      <p className="hero-tagline">
        Maximize your exam prep with quick access to <br />
        a full archive of past papers
      </p>
      <div className="hero-image-container">
        <img
          src= {heroImage2} 
          alt="Math and science doodles"
          className="hero-image"
        />
      </div>
    </section>
  )
}

export default HeroSection;
