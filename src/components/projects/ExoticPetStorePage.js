import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ExoticPetStoreDemo from '../../gifs/exotic-pet-store-demo.mp4';
import ExoticPetStoreResponsive from '../../images/exotic-pet-store-responsive.png';
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

const ExoticPetStorePage = () => {
  return (
    <Fragment>
      <Navbar />
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
                <Button
                  href='https://github.com/julianvazq/exotic-pet-store'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </Button>
              </ButtonContainer>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline>
            <source src={ExoticPetStoreDemo} type='video/mp4' />
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
          src={ExoticPetStoreResponsive}
          alt='Responsive design.'
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
                  <br /> JS, HTML, CSS
                </ListItem>
                <ListItem>
                  <StyledSpan>Others</StyledSpan>
                  <br /> CSS Grid, CSS Flexbox
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

export default ExoticPetStorePage;
