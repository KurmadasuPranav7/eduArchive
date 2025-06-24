import React from 'react';
import './Footer.css';
import instagram from '../assets/icons8-instagram-24.png';
import youtube from '../assets/icons8-youtube-25.png';
import linkedin from '../assets/icons8-linkedin-24.png';
import x from '../assets/icons8-x-24.png';
import { Link } from 'react-scroll';

function Footer() {
  return (
    <footer className="footer">
        <div className="footer-main">
        <div className="footer-brand">eduArchive</div>
            <div className="footer-socials">
                <a href="#" aria-label="Instagram"><img src={instagram}></img></a>
                <a href="#" aria-label="YouTube"><img src={youtube}></img></a>
                <a href="#" aria-label="LinkedIn"><img src={linkedin}></img></a>
                <a href="#" aria-label="X"><img src={x}></img></a>
            </div>
        </div>
        <div className="footer-links">
        <p className='footer-links-title'>Explore</p>
            <Link to="about" smooth={true} duration={500}>What is EduArchive?</Link>
            <Link to="meetdevs" smooth={true} duration={500}>Meet the Developers</Link>
            <Link to="together" smooth={true} duration={500}>Together we Learn</Link>
            <a href="#join">Join Us</a>
            <a href="#login">Log In</a>
        </div>
    </footer>
  )
}

export default Footer;
