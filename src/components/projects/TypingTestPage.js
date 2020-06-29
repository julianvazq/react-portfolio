import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import TypingTestDemo from '../../gifs/js-typing-test-demo.mp4';
import TypingTestIphone from '../../images/iphone/js-typing-test-iphone.png';
import { motion } from 'framer-motion';

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
  IconContainer,
  ButtonContainer,
  Button,
  SecondaryButton,
  MarginButton,
  StyledSpan,
  BackgroundWrapper,
  PaddingWrapper,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';

const TypingTestPage = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
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
                <SecondaryButton
                  href='https://github.com/julianvazq/typing-speed-tester'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </SecondaryButton>
              </ButtonContainer>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline controls>
            <source src={TypingTestDemo} type='video/mp4' />
            Your browser does not support HTML video.
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
              <SubHeading>Tech Details</SubHeading>
              <TechList>
                <ListItem>
                  <IconContainer>
                    <BsDisplayFill />
                  </IconContainer>
                  <div>
                    <StyledSpan>Frontend</StyledSpan>
                    <br /> JS, HTML, CSS
                  </div>
                </ListItem>
                <ListItem>
                  <IconContainer>
                    <BsThreeDots />
                  </IconContainer>
                  <div>
                    <StyledSpan>Others</StyledSpan>
                    <br /> CSS Flexbox
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

export default TypingTestPage;
