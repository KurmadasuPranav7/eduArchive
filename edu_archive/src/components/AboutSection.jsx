import React from 'react';
import './AboutSection.css';
import { Element } from 'react-scroll';

function AboutSection() {
  return (
    <Element name="about" id='about'>
      <section className="about-section" id="about">
        <h2 className="about-title">What is EduArchive?</h2>
        <p className="about-description">
        EduArchive is a centralized digital archive created to provide students of VNRVJIET easy access to previous year question papers across all departments and academic years.<br /><br />
        Our mission is to enhance academic preparedness by making exam resources more accessible, organized, and reliable. The platform is continuously updated and maintained by students, with contributions from peers and faculty alike.<br /><br />
        We believe that open access to academic materials can empower every student to perform at their best.
        </p>
      </section>
    </Element>
    
  )
}

export default AboutSection;
