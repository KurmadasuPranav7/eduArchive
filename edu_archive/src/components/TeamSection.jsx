import React from 'react';
import './TeamSection.css';
import { Element } from 'react-scroll';

const teamMembers = [
  {
    name: 'Pranav Kurmadasu',
    role: 'Full Stack Developer',
    img: 'https://randomuser.me/api/portraits/women/44.jpg',
  },
  {
    name: 'Pranav Kurmadasu',
    role: 'Backend Developer',
    img: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
];

function TeamSection() {
  return (
    <Element name="meetdevs">
       <section className="team-section">
        <h2 className="team-title">The Team Behind EduArchive</h2>
        <div className="team-members">
          {teamMembers.map((member, idx) => (
            <div className="team-member" key={idx}>
              <img className="team-member-img" src={member.img} alt={member.name} />
              <div className="team-member-name">{member.name}</div>
              <div className="team-member-role">{member.role}</div>
            </div>
          ))}
        </div>
      </section>
    </Element>
    
  );
}

export default TeamSection;
