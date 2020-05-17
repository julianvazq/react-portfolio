import React from 'react';
import Hero from './top/Hero';
import AdditionalInfo from './top/AdditionalInfo';
import ProjectSection from './middle/ProjectSection.js';
import Navbar from './top/Navbar';

const Home = () => {
  return (
    <>
      <Navbar home />
      <Hero />
      <AdditionalInfo />
      <ProjectSection />
    </>
  );
};

export default Home;
