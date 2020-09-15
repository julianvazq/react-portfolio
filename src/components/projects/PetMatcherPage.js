import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PetMatcherDemo from '../../gifs/pet-matcher-demo.mp4';
import PetMatcherDemoWebm from '../../gifs/pet-matcher-demo-webm.webm';
import PetMatcherIphone from '../../images/iphone/pet-matcher-iphone.png';
import { motion } from 'framer-motion';
import {
  fadeIn,
  Video,
  ResponsiveImg,
  StyledParagraph,
  TechList,
  ListItem,
  IconContainer,
  Button,
  StyledSpan,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import Header from './shared/Header';
import Section from './shared/Section';

const PetMatcherPage = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header
        title='Dog Finder'
        description='Find dogs up for adoption in your area.'
        url='https://pet-matcher.julianvazquez.me/'
        github='https://github.com/julianvazq/pet-matcher'
      >
        <Video
          id='preview'
          autoPlay
          loop
          muted
          playsInline
          controls
          poster={require('../../images/projects/pet-matcher/pet-matcher-fallback.png')}
        >
          <source src={PetMatcherDemo} type='video/mp4' />
          <source src={PetMatcherDemoWebm} type='video/webm' />
          Your browser does not support HTML video.
        </Video>
      </Header>

      <Section title='Responsive Design' id='responsiveness'>
        <StyledParagraph>
          Mobile accounts for approximately half of web traffic worldwide. In
          the upcoming decade, mobile web traffic is expected to keep growing,
          making it increasingly important to cater to devices of all sizes.
        </StyledParagraph>
        <ResponsiveImg iphone src={PetMatcherIphone} alt='Responsive design.' />
      </Section>

      <Section title='Tech Details' id='tech' bg={true}>
        <TechList>
          <ListItem>
            <IconContainer>
              <BsDisplayFill />
            </IconContainer>
            <div>
              <StyledSpan>Frontend</StyledSpan>
              <br /> React, Styled Components (CSS)
            </div>
          </ListItem>
          <ListItem>
            <IconContainer>
              <FaServer />
            </IconContainer>
            <div>
              <StyledSpan>Backend</StyledSpan>
              <br /> Node, Express
            </div>
          </ListItem>
          <ListItem>
            <IconContainer>
              <BsThreeDots />
            </IconContainer>
            <div>
              <StyledSpan>Others</StyledSpan>
              <br /> Form Validation, Error Handling, React Router, React Hooks,
              Context API
            </div>
          </ListItem>
        </TechList>
        <Button as={Link} to='/#projects'>
          Back to projects
        </Button>
      </Section>
    </motion.div>
  );
};

export default PetMatcherPage;
