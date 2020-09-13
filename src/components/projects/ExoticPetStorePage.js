import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ExoticPetStoreDemo from '../../gifs/exotic-pet-store-demo.mp4';
import ExoticPetStoreIphone from '../../images/iphone/exotic-pet-store-iphone.png';
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
import PageNav from './shared/PageNav';

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
            <LongContainer>
              <Title>Exotic Pet Store</Title>
              <FlexContainer>
                <div>
                  <ProjectDescription>
                    Landing page for a fictional store that offers services
                    related to exotic animals.
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
                </div>
                <PageNav />
              </FlexContainer>
            </LongContainer>
          </Container>
          <Video id='preview' autoPlay loop muted playsInline controls>
            <source src={ExoticPetStoreDemo} type='video/mp4' />
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
        <ResponsiveImg
          iphone
          src={ExoticPetStoreIphone}
          alt='Responsive design.'
        />
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
              <Button as={Link} to='/#projects'>
                Back to projects
              </Button>
            </LongContainer>
          </Container>
        </PaddingWrapper>
      </BackgroundWrapper>
    </motion.div>
  );
};

export default ExoticPetStorePage;
