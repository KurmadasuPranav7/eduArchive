import React from 'react';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import TeamSection from './TeamSection';
import TogetherSection from './TogetherSection';
import SignUpCounter from './SignUpCounter';
import './Home.css';
import {useUser, SignedOut, SignedIn } from '@clerk/clerk-react';
import Login from './Login';
import Subjects from './Subjects';



function Home() {
  const { user } = useUser();
  const userEmail = user ? user.emailAddresses[0]?.emailAddress : "Not logged in";
  const department = String(userEmail.split("@")[0]).substring(6,8);
  // console.log(userEmail);
  // console.log(department);

  return (
    <div className='home-container'>
      <SignedOut>
        <HeroSection />
        <AboutSection />
        <TeamSection />
        <TogetherSection />
        <SignUpCounter />
      </SignedOut>
      <SignedIn>
        <Subjects department={department}/>
      </SignedIn>
      
    </div>
  )
}

export default Home;
