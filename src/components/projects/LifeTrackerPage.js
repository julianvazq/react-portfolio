import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LifeTrackerDemo from '../../gifs/life-tracker-demo.mp4';
import LifeTrackerDemoEdit from '../../gifs/life-tracker-demo-edit.mp4';
import LifeTrackerIphone from '../../images/iphone/life-tracker-iphone.png';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import {
  fadeIn,
  Container,
  Title,
  VideoHeading,
  Video,
  ResponsiveImg,
  ProjectDescription,
  SubHeading,
  StyledParagraph,
  TechList,
  ListItem,
  IconContainer,
  ButtonContainer,
  Button,
  SecondaryButton,
  StyledSpan,
  BackgroundWrapper,
  PaddingWrapper,
  LongContainer,
  FlexContainer,
} from '../styled-components/StyledComponents';
import PageNav from './shared/PageNav';
import Header from './shared/Header';
import Section from './shared/Section';

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
        <Container style={{ padding: 0 }} id='preview'>
          <LongContainer>
            <VideoHeading>
              Track your goals, among other categories
            </VideoHeading>
          </LongContainer>
        </Container>
        <Video autoPlay loop muted playsInline controls>
          <source src={LifeTrackerDemo} type='video/mp4' />
          Your browser does not support HTML video.
        </Video>
        <Container style={{ padding: 0 }}>
          <LongContainer>
            <VideoHeading style={{ marginTop: '2em' }}>
              Easily edit your entries
            </VideoHeading>
          </LongContainer>
        </Container>
        <Video autoPlay loop muted playsInline controls>
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
          src={LifeTrackerIphone}
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
        <Button as={Link} to='/#projects'>
          Back to projects
        </Button>
      </Section>
    </motion.div>
  );
};

export default LifeTrackerPage;
