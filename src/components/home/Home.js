import React from 'react';
import Hero from './Hero';
import ProjectSection from './ProjectSection.js';
import { Container, fadeIn } from '../styled-components/StyledComponents';
import { motion } from 'framer-motion';

const Home = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Hero />
      <ProjectSection />
    </motion.div>
  );
};

export default Home;
