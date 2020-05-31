import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LifeTrackerDemo from '../../gifs/life-tracker-demo.mp4';
import LifeTrackerDemoEdit from '../../gifs/life-tracker-demo-edit.mp4';
import LifeTrackerIphone from '../../images/iphone/life-tracker-iphone.png';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';

import {
  Container,
  InnerContainer,
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
  MarginButton,
  StyledSpan,
  BackgroundWrapper,
  PaddingWrapper,
} from '../styled-components/StyledComponents';

const LifeTrackerPage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <Title>Life Tracker</Title>
              <ProjectDescription>
                CRUD app that allows users to track certain aspects of their
                lives, such as groceries, appointments, moods, books and more.{' '}
              </ProjectDescription>
              <ButtonContainer>
                <Button
                  href='http://life-tracker.julianvazquez.me'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to website
                </Button>
                <SecondaryButton
                  href='https://github.com/julianvazq/mern-stack'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </SecondaryButton>
              </ButtonContainer>
            </InnerContainer>
          </Container>
          <Container style={{ padding: 0 }}>
            <InnerContainer>
              <VideoHeading>Add and delete items</VideoHeading>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline>
            <source src={LifeTrackerDemo} type='video/mp4' />
          </Video>
          <Container style={{ padding: 0 }}>
            <InnerContainer>
              <VideoHeading style={{ marginTop: '2em' }}>
                Edit items
              </VideoHeading>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline>
            <source src={LifeTrackerDemoEdit} type='video/mp4' />
          </Video>
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <InnerContainer>
            <SubHeading>Responsive design</SubHeading>
            <StyledParagraph>
              Mobile accounts for approximately half of web traffic worldwide.
              In the upcoming decade, mobile web traffic is expected to keep
              growing, making it increasingly important to cater to devices of
              all sizes.
            </StyledParagraph>
          </InnerContainer>
        </Container>
        <ResponsiveImg
          iphone
          src={LifeTrackerIphone}
          alt='Responsive design.'
        />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <SubHeading>Technologies</SubHeading>
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
                    <br /> Form Validation, Error Handling, React Router, React
                    Hooks, Context API
                  </div>
                </ListItem>
              </TechList>
              <MarginButton as={Link} to='/#projects'>
                Back to projects
              </MarginButton>
            </InnerContainer>
          </Container>
        </PaddingWrapper>
      </BackgroundWrapper>
    </motion.div>
  );
};

export default LifeTrackerPage;
