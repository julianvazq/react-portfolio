import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ExerciseSiteHomePage from '../../images/lg/exercise-site-lg.jpg';
import ExerciseSiteResponsive from '../../images/exercise-site-responsive.jpg';
import {
  Container,
  InnerContainer,
  Title,
  ProjectDescription,
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

const ExoticPetStorePage = () => {
  return (
    <Fragment>
      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <Title>Exercise&trade;</Title>
              <ProjectDescription>
                Landing page for a fictional product. Decided to have a little
                fun and made it as if 'Exercise' was the product.
              </ProjectDescription>
              <ButtonContainer>
                <Button
                  href='https://julianvazq.github.io/exercise-site/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to website
                </Button>
                <Button
                  href='https://github.com/julianvazq/exercise-site'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </Button>
              </ButtonContainer>
            </InnerContainer>
          </Container>
          <ResponsiveImg src={ExerciseSiteHomePage} alt='Responsive design.' />
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
          src={ExerciseSiteResponsive}
          alt='Responsive design.'
          style={{
            display: 'block',
            width: '90%',
            maxWidth: '1370px',
            margin: 'auto',
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
                  <StyledSpan>Frontend</StyledSpan>
                  <br /> HTML, CSS
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
