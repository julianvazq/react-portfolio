import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import MovieExplorerBrowse from '../../gifs/movie-explorer-browse.mp4';
import MovieExplorerWatchlist from '../../gifs/movie-explorer-watchlist.mp4';
import MovieExplorerIphone from '../../images/iphone/movie-explorer-iphone.png';
import {
  Container,
  InnerContainer,
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

const MovieExplorerPage = () => {
  return (
    <Fragment>
      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <InnerContainer>
              <Title>Movie Explorer</Title>
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
            </InnerContainer>
          </Container>
          <Container style={{ padding: 0 }}>
            <InnerContainer>
              <VideoHeading>Browse similar movies</VideoHeading>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline>
            <source src={MovieExplorerBrowse} type='video/mp4' />
          </Video>
          <Container style={{ padding: 0 }}>
            <InnerContainer>
              <VideoHeading style={{ marginTop: '2em' }}>
                Add movies to watchlist
              </VideoHeading>
            </InnerContainer>
          </Container>
          <Video autoPlay loop muted playsInline>
            <source src={MovieExplorerWatchlist} type='video/mp4' />
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
          src={MovieExplorerIphone}
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
                  <IconContainer>
                    <BsDisplayFill />
                  </IconContainer>
                  <div>
                    <StyledSpan>Frontend</StyledSpan>
                    <br /> React, Redux, Styled Components
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
            </InnerContainer>
          </Container>
        </PaddingWrapper>
      </BackgroundWrapper>
    </Fragment>
  );
};

export default MovieExplorerPage;
