import React, { Fragment } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import PGFinderDemo from '../../gifs/pg-finder-demo.mp4';
import PGFinderResponsive from '../../images/pg-finder-responsive.png';
import PGFinderDocumentation from '../../images/pg-finder-documentation1.png';
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

const PGFinderPage = () => {
  return (
    <Fragment>
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
                <Button
                  href='https://github.com/julianvazq/pg-finder'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Go to GitHub
                </Button>
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
        <ResponsiveImg src={PGFinderResponsive} alt='Responsive design.' />
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
            <TechList style={{ background: '#f0f4f6' }}>
              <ListItem>
                <StyledSpan>Frontend</StyledSpan>
                <br /> Vanilla JavaScript, CSS, HTML
              </ListItem>
              <ListItem>
                <StyledSpan>Backend</StyledSpan>
                <br /> Node, Express
              </ListItem>
              <ListItem>
                <StyledSpan>Others</StyledSpan>
                <br /> Leaflet Map API
              </ListItem>
            </TechList>
            <MarginButton as={Link} to='/#projects'>
              Back to projects
            </MarginButton>
          </InnerContainer>
        </Container>
      </PaddingWrapper>
    </Fragment>
  );
};

export default PGFinderPage;
