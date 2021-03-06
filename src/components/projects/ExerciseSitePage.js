import React from 'react';
import ExerciseSiteHomePage from '../../images/lg/exercise-site-lg.png';
import ExerciseSiteResponsive from '../../images/iphone/exercise-site-responsive.png';
import {
  fadeIn,
  ResponsiveImg,
  StyledParagraph,
  TechList,
  ListItem,
  IconContainer,
  StyledSpan,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { motion } from 'framer-motion';
import Header from './shared/Header';
import Section from './shared/Section';
import BackButton from './shared/BackButton';

const ExoticPetStorePage = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header
        title='Exercise'
        description={
          'Brochure style landing page: displays features, benefits and prompts user to take action. Did not want to showcase a specific product, so "Exercise" is the product.'
        }
        url='https://julianvazq.github.io/exercise-site/'
        github='https://github.com/julianvazq/exercise-site'
      >
        <ResponsiveImg
          id='preview'
          src={ExerciseSiteHomePage}
          alt='Responsive design.'
        />
      </Header>

      <Section title='Responsive Design' id='responsiveness'>
        <StyledParagraph>
          Mobile accounts for approximately half of web traffic worldwide. In
          the upcoming decade, mobile web traffic is expected to keep growing,
          making it increasingly important to cater to devices of all sizes.
        </StyledParagraph>
        <ResponsiveImg
          iphone
          src={ExerciseSiteResponsive}
          alt='Responsive design.'
        />
      </Section>

      <Section title='Tech Details' id='tech' bg>
        <TechList>
          <ListItem>
            <IconContainer>
              <BsDisplayFill />
            </IconContainer>
            <div>
              <StyledSpan>Frontend</StyledSpan>
              <br /> HTML, CSS
            </div>
          </ListItem>
          <ListItem>
            <IconContainer>
              <BsThreeDots />
            </IconContainer>
            <div>
              <StyledSpan>Others</StyledSpan>
              <br /> CSS Grid, CSS Flexbox
            </div>
          </ListItem>
        </TechList>
        <BackButton />
      </Section>
    </motion.div>
  );
};

export default ExoticPetStorePage;
