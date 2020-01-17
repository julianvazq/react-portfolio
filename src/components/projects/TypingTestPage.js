import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Container from '../Container';
import TypingTestDemo from '../../gifs/js-typing-test-demo.mp4';
import TypingTestResponsive from '../../images/js-typing-test-responsive.png';

const TypingTestPage = () => {
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
    margin: 4em auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 2em;

    @media (max-width: 750px) {
      margin: 2em auto;
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
  `;

  const StyledSpan = styled.span`
    font-weight: 300;
  `;

   const MarginWrapper = styled.div`
  padding-bottom: 6em;
  
    @media (max-width: 750px) {
      padding-bottom: 3em;
    }`

  return (
    <Fragment>
      <Container>
        <InnerContainer>
          <Title>JS Typing Test</Title>
          <ProjectDescription>
            Allows users to test their typing speed and accuracy by copying word
            for word excerpts from either Harry Potter or The Lord of the Rings.
          </ProjectDescription>
          <Button
            href='https://julianvazq.github.io/typing-speed-tester/'
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
        <source src={TypingTestDemo} type='video/mp4' />
      </video>
      <Container>
        <InnerContainer>
          <SubHeading>Responsive design</SubHeading>
        </InnerContainer>
      </Container>
      <img
        src={TypingTestResponsive}
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
        <InnerContainer style={{ paddingBottom: '6em' }}>
          <SubHeading>Technologies</SubHeading>
          <TechList>
            <ListItem>
              <StyledSpan>Frontend:</StyledSpan> JS, HTML, CSS
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

export default TypingTestPage;
