import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PGFinderDemo from '../../gifs/pg-finder-demo.mp4';
import PGFinderIphone from '../../images/iphone/pg-finder-iphone.png';
import PGFinderDocumentation from '../../images/pg-finder-documentation1.png';
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
import { FaServer } from 'react-icons/fa';

const PGFinderPage = () => {
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
              <Title>PG Finder</Title>
              <ProjectDescription>
                Allows residents of PG County to easily find the location of
                public services and resources, such as traffic cameras, police
                and fire stations.
              </ProjectDescription>
              <ButtonContainer>
                <Button
                  href='http://pg-finder.julianvazquez.me/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to website
                </Button>
                <SecondaryButton
                  href='https://github.com/julianvazq/pg-finder'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </SecondaryButton>
              </ButtonContainer>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline>
            <source src={PGFinderDemo} type='video/mp4' />
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
        <ResponsiveImg iphone src={PGFinderIphone} alt='Responsive design.' />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <SubHeading>Documentation</SubHeading>
              <StyledParagraph>
                Writing solid documentation helps keep track of all aspects of
                an application, improves the quality of the product, and makes
                it easier to bring other developers up to speed.
              </StyledParagraph>
            </InnerContainer>
          </Container>
          <ResponsiveImg
            src={PGFinderDocumentation}
            alt='Documentation page.'
            style={{ mixBlendMode: 'darken' }}
          />

          <Container style={{ paddingBottom: 0 }}>
            <InnerContainer>
              <MarginButton
                href='http://pg-finder.julianvazquez.me/doc.html'
                target='_blank'
                rel='noopener noreferrer'
                style={{ background: '#949393' }}
              >
                Read documentation
              </MarginButton>
            </InnerContainer>
          </Container>
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <InnerContainer>
            <SubHeading>Technologies</SubHeading>
            <TechList>
              <ListItem>
                <IconContainer>
                  <BsDisplayFill />
                </IconContainer>
                <div>
                  <StyledSpan>Frontend</StyledSpan>
                  <br /> Vanilla JavaScript, CSS, HTML
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
                  <br /> Leaflet Map API
                </div>
              </ListItem>
            </TechList>
            <MarginButton as={Link} to='/#projects'>
              Back to projects
            </MarginButton>
          </InnerContainer>
        </Container>
      </PaddingWrapper>
    </motion.div>
  );
};

export default PGFinderPage;
