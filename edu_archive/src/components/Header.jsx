import React, { useState, useEffect } from 'react'
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import Login from './Login';
import { useNavigate } from 'react-router-dom';
import { ClerkProvider, SignedIn, SignedOut, UserButton } from '@clerk/clerk-react';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const location = useLocation();
  const navigate = useNavigate();
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const heroSection = document.querySelector('.hero-section');
      const heroTitle = document.getElementById('hero-title');
      
      if (heroSection && heroTitle) {
        const heroTop = heroSection.offsetTop;
        const heroHeight = heroSection.offsetHeight;
        const headerHeight = 64; // Header height
        
        // Calculate when animation should start and end
        const animationStart = heroTop + heroHeight * 0.1; // Start when 10% through hero
        const animationEnd = heroTop + heroHeight * 0.6; // End when 60% through hero
        
        if (scrollPosition >= animationStart) {
          const progress = Math.min(1, (scrollPosition - animationStart) / (animationEnd - animationStart));
          setScrollProgress(progress);
          setIsScrolled(progress > 0.5);
        } else {
          setScrollProgress(0);
          setIsScrolled(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleHomeClick = (e) => {
    if (location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    // else, let Link do the navigation
  };

  return (
    <header className='header'>
        <div className='hello'>
          <span className='header-title' style={{ opacity: 1 - scrollProgress }}></span>
          <span className={`animated-title ${isScrolled ? 'visible' : ''}`} style={{ opacity: scrollProgress }}>eduArchive</span>
        </div>
        <nav className='nav'>
            <div className='nav-links'>
                <Link to="/" onClick={handleHomeClick}>Home</Link>
                <a href="#about">About</a>
                <Link to='/joinus'>Join Us</Link>
            </div>
            {/* <button className='login-btn' onClick={() => navigate('/login')}>Login</button> */}
            <SignedOut>
              <button className='login-btn' onClick={() => navigate('/Login')}>Login</button>
            </SignedOut>
            <SignedIn>
              <UserButton afterSignOutUrl="/" />
            </SignedIn>            
        </nav>
        
    </header>
  )
}

export default Header;