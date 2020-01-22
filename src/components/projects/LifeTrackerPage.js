import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import LifeTrackerDemo from '../../gifs/life-tracker-demo.mp4';
import LifeTrackerDemoEdit from '../../gifs/life-tracker-demo-edit.mp4';
import LifeTrackerResponsive from '../../images/life-tracker-responsive.png';

const LifeTrackerPage = () => {
  const Container = styled.div`
    max-width: 1400px;
    width: 90%;
    display: flex;
    align-items: center;
    margin: auto;
    flex-flow: row wrap;
    padding-bottom: 4em;
  `;

  const InnerContainer = styled.div`
    margin: auto;
    width: 700px;
  `;

  const Title = styled.h1`
    margin-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;
  `;

  const VideoHeading = styled.h3`
    margin-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 300;

    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
  `;

  const ProjectDescription = styled.h2`
    letter-spacing: -1.5px;
    line-height: 1.7;
    font-size: 2.1rem;
    font-weight: 400;
    margin-bottom: 1.5em;

    @media (max-width: 580px) {
      font-size: 1.8rem;
    }
  `;

  const SubHeading = styled.h3`
    margin-bottom: 2em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 400;

    @media (max-width: 750px) {
      font-size: 1.5rem;
    }
  `;

  const StyledParagraph = styled.p`
    font-size: 1.5rem;
    line-height: 1.7;
  `;

  const TechList = styled.ul`
    list-style-type: square;
    list-style-position: inside;
    font-size: 1.5rem;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2em;
  `;

  const ListItem = styled.li`
    padding-bottom: 0.5em;
    border-bottom: 1px solid ${props => props.theme.primary};
    line-height: 1.7;
  `;

  const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
  `;

  const Button = styled.a`
    display: inline-block;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    background: ${props => props.theme.primary};
    color: #fff;
    padding: 0.5em 0.8em;
    font-family: inherit;
    border-radius: 0.3rem;
    cursor: pointer;
    margin-right: 1em;

    @media (max-width: 600px) {
      font-size: 1.1rem;
    }

    @media (max-width: 460px) {
      margin-bottom: 1em;
    }
  `;

  const MarginButton = styled(Button)`
    margin-top: 4em;
  `;

  const StyledSpan = styled.span`
    font-weight: 300;
  `;

  const BackgroundWrapper = styled.div`
    background: ${props => props.theme.secondary};
  `;

  const PaddingWrapper = styled.div`
    padding: 4em 0;
  `;

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
                  <StyledSpan>Frontend:</StyledSpan> React, Reactstrap
                </ListItem>
                <ListItem>
                  <StyledSpan>Backend:</StyledSpan> Node, Express
                </ListItem>
                <ListItem>
                  <StyledSpan>Database:</StyledSpan> MongoDB Atlas
                </ListItem>
                <ListItem>
                  <StyledSpan>Others:</StyledSpan> Form Validation, Error
                  Handling, React Router, React Hooks, Context API
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
