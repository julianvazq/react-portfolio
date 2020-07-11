import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import MovieExplorerBrowse from '../../gifs/movie-explorer-browse.mp4';
import MovieExplorerWatchlist from '../../gifs/movie-explorer-watchlist.mp4';
import MovieExplorerIphone from '../../images/iphone/movie-explorer-iphone.png';
import { motion } from 'framer-motion';
import {
  fadeIn,
  Container,
  FlexContainer,
  LongContainer,
  Title,
  VideoHeading,
  Video,
  ResponsiveImg,
  ProjectDescription,
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

const MovieExplorerPage = () => {
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
              <Title>Movie Explorer</Title>
              <FlexContainer>
                <div>
                  <ProjectDescription>
                    Discover thousands of movies and add them to your watchlist.
                  </ProjectDescription>
                  <ButtonContainer>
                    <Button
                      href='http://movie-explorer.julianvazquez.me'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Go to website
                    </Button>
                    <SecondaryButton
                      href='https://github.com/julianvazq/movie-explorer'
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

          <Container style={{ padding: 0 }} id='preview'>
            <LongContainer>
              <VideoHeading>Browse similar movies</VideoHeading>
            </LongContainer>
          </Container>
          <Video autoPlay loop muted playsInline controls>
            <source src={MovieExplorerBrowse} type='video/mp4' />
            Your browser does not support HTML video.
          </Video>
          <Container style={{ padding: 0 }}>
            <LongContainer>
              <VideoHeading style={{ marginTop: '2em' }}>
                Add movies to watchlist
              </VideoHeading>
            </LongContainer>
          </Container>
          <Video autoPlay loop muted playsInline controls>
            <source src={MovieExplorerWatchlist} type='video/mp4' />
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
          src={MovieExplorerIphone}
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
                    <br /> React, Redux, Styled Components (CSS)
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
                    <br /> React Hooks, React Router, Responsive Images
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

export default MovieExplorerPage;
