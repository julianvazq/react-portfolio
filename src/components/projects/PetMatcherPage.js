import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PetMatcherDemo from '../../gifs/pet-matcher-demo.mp4';
import PetMatcherDemoWebm from '../../gifs/pet-matcher-demo-webm.webm';
import PetMatcherIphone from '../../images/iphone/pet-matcher-iphone.png';
import { motion } from 'framer-motion';
import {
  fadeIn,
  Container,
  LongContainer,
  FlexContainer,
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
import { FaServer } from 'react-icons/fa';
import PageNav from './shared/PageNav';

const PetMatcherPage = () => {
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
            <LongContainer>
              <FlexContainer>
                <div>
                  <Title>Pet Matcher</Title>
                  <ProjectDescription>
                    Find dogs up for adoption in your area.
                  </ProjectDescription>
                  <ButtonContainer>
                    <Button
                      href='https://pet-matcher.julianvazquez.me/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Go to website
                    </Button>
                    <SecondaryButton
                      href='https://github.com/julianvazq/pet-matcher'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Go to GitHub
                    </SecondaryButton>
                  </ButtonContainer>
                </div>
                <PageNav />
              </FlexContainer>
            </LongContainer>
          </Container>

          <Video
            id='preview'
            autoPlay
            loop
            muted
            playsInline
            controls
            poster={require('../../images/pet-matcher-fallback.png')}
          >
            <source src={PetMatcherDemo} type='video/mp4' />
            <source src={PetMatcherDemoWebm} type='video/webm' />
            Your browser does not support HTML video.
          </Video>
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <LongContainer>
            <SubHeading id='responsiveness'>Responsive design</SubHeading>
            <StyledParagraph>
              Mobile accounts for approximately half of web traffic worldwide.
              In the upcoming decade, mobile web traffic is expected to keep
              growing, making it increasingly important to cater to devices of
              all sizes.
            </StyledParagraph>
          </LongContainer>
        </Container>
        <ResponsiveImg iphone src={PetMatcherIphone} alt='Responsive design.' />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <LongContainer>
              <SubHeading id='tech'>Tech Details</SubHeading>
              <TechList>
                <ListItem>
                  <IconContainer>
                    <BsDisplayFill />
                  </IconContainer>
                  <div>
                    <StyledSpan>Frontend</StyledSpan>
                    <br /> React, Styled Components (CSS)
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
            </LongContainer>
          </Container>
        </PaddingWrapper>
      </BackgroundWrapper>
    </motion.div>
  );
};

export default PetMatcherPage;
