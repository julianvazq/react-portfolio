import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import TypingTestDemo from '../../gifs/js-typing-test-demo.mp4';
import TypingTestResponsive from '../../images/js-typing-test-responsive.png';

const TypingTestPage = () => {
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
    color: ${props => props.theme.gray};

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
    background: #f0f4f6;
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
              <Title>JS Typing Test</Title>
              <ProjectDescription>
                Allows users to test their typing speed and accuracy by copying
                word for word excerpts from either Harry Potter or The Lord of
                the Rings.
              </ProjectDescription>
              <ButtonContainer>
                <Button
                  href='https://julianvazq.github.io/typing-speed-tester/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to website
                </Button>
                <Button
                  href='https://github.com/julianvazq/typing-speed-tester'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </Button>
              </ButtonContainer>
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
            <source src={TypingTestDemo} type='video/mp4' />
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
          src={TypingTestResponsive}
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
                  <StyledSpan>Frontend:</StyledSpan> JS, HTML, CSS
                </ListItem>
                <ListItem>
                  <StyledSpan>Others:</StyledSpan> CSS Flexbox
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

export default TypingTestPage;
