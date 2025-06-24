import React from 'react';
import './TogetherSection.css';
import { Element } from 'react-scroll';

function TogetherSection() {
  return (
    <Element name="together">
      <section className="together-section">
        <h2 className="together-title">Together, We Learn</h2>
        <p className="together-description">
        "We've all been there—exams around the corner, scrambling through WhatsApp groups, Drive links, or old folders trying to find that one previous year paper.<br /><br />
        That's exactly why we built this platform. To make your academic journey a little smoother and a lot more organized."<br /><br />
        This is more than just a tool—it's our way of giving back to the college community that shaped us. We hope it saves you time, reduces your stress, and helps you focus on what really matters: learning.<br /><br />
        Thank you for using this platform. Keep sharing, keep contributing, and let's make this better together.
        </p>
      </section>
    </Element>
    
  )
}

export default TogetherSection;
