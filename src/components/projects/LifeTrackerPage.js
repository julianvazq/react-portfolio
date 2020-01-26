import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import LifeTrackerDemo from '../../gifs/life-tracker-demo.mp4';
import LifeTrackerDemoEdit from '../../gifs/life-tracker-demo-edit.mp4';
import LifeTrackerResponsive from '../../images/life-tracker-responsive.png';
import {
  Container,
  InnerContainer,
  Title,
  VideoHeading,
  ProjectDescription,
  SubHeading,
  StyledParagraph,
  TechList,
  ListItem,
  ButtonContainer,
  Button,
  MarginButton,
  StyledSpan,
  BackgroundWrapper,
  PaddingWrapper
} from '../styled-components/StyledComponents';

const LifeTrackerPage = () => {
  return (
    <Fragment>
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
                <Button
                  href='https://github.com/julianvazq/mern-stack'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </Button>
              </ButtonContainer>
            </InnerContainer>
          </Container>
          <Container style={{ padding: 0 }}>
            <InnerContainer>
              <VideoHeading>Add and delete items</VideoHeading>
            </InnerContainer>
          </Container>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              margin: 'auto',
              marginBottom: '4em',
              display: 'block',
              width: '90%',
              maxWidth: '1370px'
            }}
          >
            <source src={LifeTrackerDemo} type='video/mp4' />
          </video>
          <Container style={{ padding: 0 }}>
            <InnerContainer>
              <VideoHeading>Edit items</VideoHeading>
            </InnerContainer>
          </Container>
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              margin: 'auto',
              display: 'block',
              width: '90%',
              maxWidth: '1370px'
            }}
          >
            <source src={LifeTrackerDemoEdit} type='video/mp4' />
          </video>
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
        <img
          src={LifeTrackerResponsive}
          alt='Responsive design.'
          style={{
            display: 'block',
            width: '90%',
            maxWidth: '1370px',
            margin: 'auto'
          }}
        />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <SubHeading>Technologies</SubHeading>
              <TechList>
                <ListItem>
                  <StyledSpan>Frontend</StyledSpan>
                  <br /> React, Reactstrap
                </ListItem>
                <ListItem>
                  <StyledSpan>Backend</StyledSpan>
                  <br /> Node, Express
                </ListItem>
                <ListItem>
                  <StyledSpan>Database</StyledSpan>
                  <br /> MongoDB Atlas
                </ListItem>
                <ListItem>
                  <StyledSpan>Others</StyledSpan>
                  <br /> Form Validation, Error Handling, React Router, React
                  Hooks, Context API
                </ListItem>
              </TechList>
              <MarginButton as={Link} to='/#projects'>
                Back to projects
              </MarginButton>
            </InnerContainer>
          </Container>
        </PaddingWrapper>
      </BackgroundWrapper>
    </Fragment>
  );
};

export default LifeTrackerPage;
