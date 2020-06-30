import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import EcommerceHome from '../../images/lg/e-commerce-lg.png';
import EcommerceIphone from '../../images/iphone/e-commerce-iphone.png';
import {
  fadeIn,
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
  LongContainer,
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
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <LongContainer>
              <Title>Mock E-Commerce</Title>
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
                      <a href='#responsiveness'>Mobile First</a>
                    </li>
                    <li>
                      <a href='#accessibility'>Accessibility</a>
                    </li>
                    <li>
                      <a href='#tech'>Tech Details</a>
                    </li>
                  </ul>
                </Navigation>
              </FlexContainer>
            </LongContainer>
          </Container>

          <ResponsiveImg src={EcommerceHome} alt='Responsive design.' />
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <LongContainer>
            <SubHeading id='design'>Design vs. Actual</SubHeading>
            <StyledParagraph>
              I already had a design in mind, so I started off by creating a
              high-fidelity wireframe in{' '}
              <a
                href='https://www.figma.com/file/OR9WLOXwJJ6IHV3IbO5W2w/Headphones-E-Commerce?node-id=0%3A1'
                target='_blank'
                rel='noopener noreferrer'
              >
                Figma
              </a>
              . I went for a flat and modern aesthetic, with plenty of white
              space and an eye-catching primary color.
            </StyledParagraph>
            <StyledParagraph style={{ marginTop: '1em' }}>
              To compliment the look, I chose fitting sans-serif fonts that pair
              well together (Oswald &amp; Open Sans), and added a few smooth
              animations.
            </StyledParagraph>
          </LongContainer>
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
            <LongContainer>
              <SubHeading id='editing'>Editing</SubHeading>
              <StyledParagraph>
                Images can make or break a site. Nailing the flat look that I
                wanted meant that I would need headphones images with
                transparent backgrounds. Because of the lack of non-copyrighted
                images that fit what I was looking for, I ended up doing a
                little editing in{' '}
                <a
                  href='https://www.gimp.org/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GIMP
                </a>
                .
              </StyledParagraph>
            </LongContainer>
          </Container>
          <ResponsiveImg
            src={require('../../images/before-after.png')}
            alt='Before and after edit.'
          />
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <LongContainer>
            <SubHeading id='responsiveness'>Mobile First</SubHeading>
            <StyledParagraph>
              Mobile accounts for approximately half of web traffic worldwide.
              In the upcoming decade, mobile web traffic is expected to keep
              growing, making it increasingly important to cater to devices of
              all sizes.
            </StyledParagraph>
          </LongContainer>
        </Container>
        <ResponsiveImg iphone src={EcommerceIphone} alt='Responsive design.' />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <LongContainer>
              <SubHeading id='accessibility'>Accessibility</SubHeading>
              <StyledParagraph>
                The web should be accessible to all. Every page can be accessed
                using keyboard-only navigation, and ARIA labels are included to
                make it compatible with screen-readers. Lastly, I used a handy{' '}
                <a
                  href='https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Chrome extension
                </a>{' '}
                to perform color blindness testing, and added a visible label
                above the color-picker to ensure it's accessible.
              </StyledParagraph>
            </LongContainer>
          </Container>
          <ResponsiveImg
            src={require('../../images/colorblindness.png')}
            alt='Color blindness testing.'
          />
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <LongContainer>
            <SubHeading id='tech'>Tech Details</SubHeading>
            <InnerContainer>
              <TechList>
                <ListItem>
                  <IconContainer>
                    <BsDisplayFill />
                  </IconContainer>
                  <div>
                    <StyledSpan>Frontend</StyledSpan>
                    <br /> React (NextJS), Styled Components (CSS)
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
                    <br /> React Hooks, React Context, Dynamic Routes
                  </div>
                </ListItem>
              </TechList>
              <MarginButton as={Link} to='/#projects'>
                Back to projects
              </MarginButton>
            </InnerContainer>
          </LongContainer>
        </Container>
      </PaddingWrapper>
    </motion.div>
  );
};

export default ECommercePage;
