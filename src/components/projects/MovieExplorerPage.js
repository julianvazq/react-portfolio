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
  StyledSpan,
  BackgroundWrapper,
  PaddingWrapper,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import Header from './shared/Header';
import Section from './shared/Section';

const MovieExplorerPage = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header
        title='Movie Explorer'
        description='Discover thousands of movies and create a curated watchlist.'
        url='http://movie-explorer.julianvazquez.me'
        github='https://github.com/julianvazq/movie-explorer'
      >
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
      </Header>

      <Section title='Responsive Design' id='responsiveness'>
        <StyledParagraph>
          Mobile accounts for approximately half of web traffic worldwide. In
          the upcoming decade, mobile web traffic is expected to keep growing,
          making it increasingly important to cater to devices of all sizes.
        </StyledParagraph>
        <ResponsiveImg
          iphone
          src={MovieExplorerIphone}
          alt='Responsive design.'
        />
      </Section>

      <Section title='Tech Details' id='tech' bg={true}>
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
        <Button as={Link} to='/#projects'>
          Back to projects
        </Button>
      </Section>
    </motion.div>
  );
};

export default MovieExplorerPage;
