import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ExoticPetStoreDemo from '../../gifs/exotic-pet-store-demo.mp4';
import ExoticPetStoreIphone from '../../images/iphone/exotic-pet-store-iphone.png';
import { motion } from 'framer-motion';

import {
  fadeIn,
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

const ExoticPetStorePage = () => {
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
              <Title>Exotic Pet Store</Title>
              <ProjectDescription>
                Landing page for a fictional store that offers services related
                to exotic animals.
              </ProjectDescription>
              <ButtonContainer>
                <Button
                  href='https://julianvazq.github.io/exotic-pet-store/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to website
                </Button>
                <SecondaryButton
                  href='https://github.com/julianvazq/exotic-pet-store'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </SecondaryButton>
              </ButtonContainer>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline controls>
            <source src={ExoticPetStoreDemo} type='video/mp4' />
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
        <ResponsiveImg
          iphone
          src={ExoticPetStoreIphone}
          alt='Responsive design.'
        />
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
                    <br /> CSS Grid, CSS Flexbox
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

export default ExoticPetStorePage;
