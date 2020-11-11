import React from 'react';
import LifeTrackerDemo from '../../gifs/life-tracker-demo.mp4';
import LifeTrackerDemoEdit from '../../gifs/life-tracker-demo-edit.mp4';
import LifeTrackerResponsive from '../../images/iphone/life-tracker-responsive.png';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  fadeIn,
  VideoHeading,
  Video,
  ResponsiveImg,
  StyledParagraph,
  TechList,
  ListItem,
  IconContainer,
  StyledSpan,
} from '../styled-components/StyledComponents';
import Header from './shared/Header';
import Section from './shared/Section';
import BackButton from './shared/BackButton';

const LifeTrackerPage = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header
        title='Life Tracker'
        description=' CRUD app that allows users to track certain aspects of their
                    lives, such as groceries, appointments, moods, books and
                    more.'
        url='http://life-tracker.julianvazquez.me'
        github='https://github.com/julianvazq/mern-stack'
      >
        <VideoHeading id='preview'>
          Track your goals, among other categories
        </VideoHeading>
        <Video loop muted playsInline controls>
          <source src={LifeTrackerDemo} type='video/mp4' />
          Your browser does not support HTML video.
        </Video>
        <VideoHeading style={{ marginTop: '2em' }}>
          Easily edit your entries
        </VideoHeading>
        <Video loop muted playsInline controls>
          <source src={LifeTrackerDemoEdit} type='video/mp4' />
          Your browser does not support HTML video.
        </Video>
      </Header>

      <Section title='Responsive Design' id='responsiveness'>
        <StyledParagraph>
          Mobile accounts for approximately half of web traffic worldwide. In
          the upcoming decade, mobile web traffic is expected to keep growing,
          making it increasingly important to cater to devices of all sizes.
        </StyledParagraph>
        <ResponsiveImg
          iphone
          src={LifeTrackerResponsive}
          alt='Responsive design.'
        />
      </Section>

      <Section title='Tech Details' id='tech' bg={true}>
        <TechList>
          <ListItem>
            <IconContainer>
              <BsDisplayFill />
            </IconContainer>
            <div>
              <StyledSpan>Frontend</StyledSpan>
              <br /> React, Reactstrap
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
              <FaDatabase />
            </IconContainer>
            <div>
              <StyledSpan>Database</StyledSpan>
              <br /> MongoDB Atlas
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

export default LifeTrackerPage;
