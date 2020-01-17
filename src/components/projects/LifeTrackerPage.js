import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Container from '../Container';
import LifeTrackerDemo from '../../gifs/life-tracker-demo.mp4';
import LifeTrackerResponsive from '../../images/life-tracker-responsive.png';

const LifeTrackerPage = () => {
  const InnerContainer = styled.div`
    margin: auto;
    width: 700px;
  `;

  const Title = styled.h1`
    margin-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
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
    margin-top: 4em;
    padding-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: 400;

    @media (max-width: 750px) {
      margin-top: 0;
      font-size: 1.5rem;
    }
  `;

  const TechList = styled.ul`
    list-style-type: square;
    list-style-position: inside;
    font-size: 1.5rem;
    margin: 4em auto 6em auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2em;

    @media (max-width: 750px) {
      margin: 2em auto 4em auto;
    }
  `;

  const ListItem = styled.li`
    padding-bottom: 0.5em;
    border-bottom: 1px solid ${props => props.theme.primary};
  `;

  const Button = styled.a`
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
    background: ${props => props.theme.primary};
    color: #fdfdfd;
    padding: 0.5em 0.8em;
    font-family: inherit;
    border-radius: 0.3rem;
    cursor: pointer;

    @media (max-width: 580px) {
      font-size: 1.1rem;
    }
  `;

  const StyledSpan = styled.span`
    font-weight: 300;
  `;

  const MarginWrapper = styled.div`
    padding-bottom: 6em;

    @media (max-width: 750px) {
      padding-bottom: 3em;
    }
  `;

  return (
    <Fragment>
      <Container>
        <InnerContainer>
          <Title>Life Tracker</Title>
          <ProjectDescription>
            CRUD app that allows users to track certain aspects of their lives,
            such as groceries, appointments, moods, books and more.{' '}
          </ProjectDescription>
          <Button
            href='http://lifetracker.julianvazquez.me'
            target='_blank'
            rel='noopener noreferrer'
          >
            Go to website
          </Button>
        </InnerContainer>
      </Container>
      <video
        autoPlay
        loop
        muted
        playsInline
        style={{
          margin: '4em auto',
          display: 'block',
          width: '100%',
          maxWidth: '1370px'
        }}
      >
        <source src={LifeTrackerDemo} type='video/mp4' />
      </video>
      <Container>
        <InnerContainer>
          <SubHeading>Responsive design</SubHeading>
        </InnerContainer>
      </Container>
      <img
        src={LifeTrackerResponsive}
        alt='Responsive design.'
        style={{
          display: 'block',
          width: '100%',
          maxWidth: '1370px',
          margin: '4em auto'
        }}
      />
      <MarginWrapper>
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
                <StyledSpan>Others:</StyledSpan> React Hook Form, React Router,
                Context API
              </ListItem>
            </TechList>
            <Button as={Link} to='/#projects'>
              Back to projects
            </Button>
          </InnerContainer>
        </Container>
      </MarginWrapper>
    </Fragment>
  );
};

export default LifeTrackerPage;
