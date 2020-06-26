import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import EcommerceHome from '../../images/lg/e-commerce-lg.png';
import EcommerceIphone from '../../images/iphone/e-commerce-iphone.png';
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
import { motion } from 'framer-motion';
import styled from 'styled-components';
import Navigation from './shared/Navigation';

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;

  div:first-child {
    width: 70%;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    div:first-child {
      width: 100%;
    }
  }
`;

const StackedImg = styled(ResponsiveImg)`
  &:first-of-type {
    margin-bottom: 4em;
  }
`;

const ECommercePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <Title>Exercise&trade;</Title>
              <FlexContainer>
                <div>
                  <ProjectDescription>
                    Mock e-commerce store that exclusively sells high-quality
                    headphones and earbuds.
                  </ProjectDescription>
                  <ButtonContainer>
                    <Button
                      href='https://e-commerce.julianvazquez.me'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Go to website
                    </Button>
                    <SecondaryButton
                      href='https://github.com/julianvazq/headphones-ecommerce'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Go to GitHub
                    </SecondaryButton>
                  </ButtonContainer>
                </div>
                <Navigation>
                  <ul>
                    <li>
                      <a href='#design'>Design vs. Actual</a>
                    </li>
                    <li>
                      <a href='#editing'>Editing</a>
                    </li>
                    <li>
                      <a href='#responsiveness'>Responsiveness</a>
                    </li>
                    <li>
                      <a href='#tech'>Tech Stack</a>
                    </li>
                  </ul>
                </Navigation>
              </FlexContainer>
            </InnerContainer>
          </Container>
          <ResponsiveImg src={EcommerceHome} alt='Responsive design.' />
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <InnerContainer>
            <SubHeading id='design'>Design vs. Actual</SubHeading>
            <StyledParagraph>
              I already had a design in mind, so I started off by creating a
              high-fidelity wireframe in{' '}
              <a
                href='https://www.figma.com'
                target='_blank'
                rel='noopener noreferrer'
              >
                Figma
              </a>
              . I went for a minimalistic and modern aesthetic, with plenty of
              white space and an eye-catching primary color.
            </StyledParagraph>
            <StyledParagraph style={{ marginTop: '1em' }}>
              To compliment the look, I chose appropriate sans-serif fonts
              (Oswald &amp; Open Sans), and added a few smooth animations.
            </StyledParagraph>
          </InnerContainer>
        </Container>
        <StackedImg
          src={require('../../images/figma-vs-actual-1.png')}
          alt='Figma design vs. actual website.'
        />
        <StackedImg
          src={require('../../images/figma-vs-actual-2.png')}
          alt='Figma design vs. actual website.'
        />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <SubHeading id='editing'>Editing</SubHeading>
              <StyledParagraph>
                Images can make or break a site. Because I only used
                non-copyrighted images for this project, I had to do a little
                editing in{' '}
                <a
                  href='https://www.gimp.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GIMP
                </a>
                . Turns out there's not many high-quality headphone images
                labeled for reuse...
              </StyledParagraph>
            </InnerContainer>
          </Container>
          <ResponsiveImg
            src={require('../../images/before-after.png')}
            alt='Before and after edit.'
          />
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <InnerContainer>
            <SubHeading id='responsiveness'>Responsive design</SubHeading>
            <StyledParagraph>
              Mobile accounts for approximately half of web traffic worldwide.
              In the upcoming decade, mobile web traffic is expected to keep
              growing, making it increasingly important to cater to devices of
              all sizes.
            </StyledParagraph>
          </InnerContainer>
        </Container>
        <ResponsiveImg iphone src={EcommerceIphone} alt='Responsive design.' />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <SubHeading id='tech'>Technologies</SubHeading>
              <TechList>
                <ListItem>
                  <IconContainer>
                    <BsDisplayFill />
                  </IconContainer>
                  <div>
                    <StyledSpan>Frontend</StyledSpan>
                    <br /> React (NextJS), Styled Components
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
                    <br /> React Hooks, Dynamic Routes
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

export default ECommercePage;
