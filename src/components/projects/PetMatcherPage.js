import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PetMatcherDemo from '../../gifs/pet-matcher-demo.mp4';
import PetMatcherResponsive from '../../images/pet-matcher-responsive-3.png';
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
  PaddingWrapper
} from '../styled-components/StyledComponents';
const PetMatcherPage = () => {
  return (
    <Fragment>
      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <Title>Pet Matcher</Title>
              <ProjectDescription>
                Answer multiple choice questions and help a pet in your area
                find a home!
              </ProjectDescription>
              <ButtonContainer>
                <Button
                  href='https://pet-matcher.julianvazquez.me/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to website
                </Button>
                <Button
                  href='https://github.com/julianvazq/pet-matcher'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </Button>
              </ButtonContainer>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline>
            <source src={PetMatcherDemo} type='video/mp4' />
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
        <ResponsiveImg src={PetMatcherResponsive} alt='Responsive design.' />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <SubHeading>Technologies</SubHeading>
              <TechList>
                <ListItem>
                  <StyledSpan>Frontend</StyledSpan>
                  <br /> React, Styled Components (CSS)
                </ListItem>
                <ListItem>
                  <StyledSpan>Backend</StyledSpan>
                  <br /> Node, Express
                </ListItem>
                <ListItem>
                  <StyledSpan>Others</StyledSpan>
                  <br /> Form Validation, Error Handling, React Router, React
                  Hooks, Context API
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

export default PetMatcherPage;
