import React from 'react';
import Hero from './top/Hero';
import AdditionalInfo from './top/AdditionalInfo';
import ProjectSection from './middle/ProjectSection.js';
import CoverImage from '../images/illustrations/cover-image.svg';
import styled from 'styled-components';
import {
  Container,
  fadeIn,
  fadeInFromRight,
} from './styled-components/StyledComponents';
import { motion } from 'framer-motion';

const HomeContainer = styled.div``;

const Img = styled(motion.img)`
  display: block;
  width: 250px;
  margin: 1rem auto 4rem auto;
  z-index: -1;

  @media screen and (min-width: 800px) {
    position: absolute;
    top: 250px;
    right: 10%;
    width: 400px;
    margin: 0;
  }

  @media screen and (min-width: 1000px) {
    top: 200px;
    width: 550px;
  }

  @media screen and (min-width: 1800px) {
    top: 150px;
    right: 15%;
    width: 650px;
  }
`;

const Home = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <HomeContainer>
        <Container>
          <Img
            src={CoverImage}
            alt='Illustration.'
            variants={fadeInFromRight}
          />
          <Hero />
          <AdditionalInfo />
        </Container>
        <ProjectSection />
      </HomeContainer>
    </motion.div>
  );
};

export default Home;
