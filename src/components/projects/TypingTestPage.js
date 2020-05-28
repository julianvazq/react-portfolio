import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import TypingTestDemo from '../../gifs/js-typing-test-demo.mp4';
import TypingTestResponsive from '../../images/js-typing-test-responsive.png';
import TypingTestIphone from '../../images/js-typing-test-iphone.png';

import {
  Container,
  InnerContainer,
  Title,
  ProjectDescription,
  Video,
  ResponsiveImg,
  SubHeading,
  StyledParagraph,
  TechList,
  ListItem,
  ButtonContainer,
  Button,
  MarginButton,
  StyledSpan,
  BackgroundWrapper,
  PaddingWrapper,
} from '../styled-components/StyledComponents';
import Navbar from '../top/Navbar';

const TypingTestPage = () => {
  return (
    <Fragment>
      <Navbar />
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
          <Video autoPlay loop muted playsInline>
            <source src={TypingTestDemo} type='video/mp4' />
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
        <ResponsiveImg iphone src={TypingTestIphone} alt='Responsive design.' />
      </PaddingWrapper>
      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <SubHeading>Technologies</SubHeading>
              <TechList>
                <ListItem>
                  <StyledSpan>Frontend</StyledSpan>
                  <br /> JS, HTML, CSS
                </ListItem>
                <ListItem>
                  <StyledSpan>Others</StyledSpan>
                  <br /> CSS Flexbox
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
