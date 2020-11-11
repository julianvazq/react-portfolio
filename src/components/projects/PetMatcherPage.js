import React from 'react';
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
  StyledSpan,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import Header from './shared/Header';
import Section from './shared/Section';
import BackButton from './shared/BackButton';

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
        description='Get personalized results of dogs up for adoption in your area.'
        url='https://pet-matcher.julianvazquez.me/'
        github='https://github.com/julianvazq/pet-matcher'
      >
        <Video
          id='preview'
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
          Designing and prototyping websites for mobile devices first helps
          ensure that the users' experience is seamless on any device. As mobile
          designs are typically simpler, taking a mobile first approach allows
          for progressively adding more complexity as the device size increases.
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
        <BackButton />
      </Section>
    </motion.div>
  );
};

export default PetMatcherPage;
