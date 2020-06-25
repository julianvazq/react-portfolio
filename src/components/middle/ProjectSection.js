import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Container from '../Container';

const StyledSection = styled.section`
  background: ${(props) => props.theme.secondary};
  padding: 6em 0 4em;

  @media (max-width: 1000px) {
    padding: 4em 0;
  }

  @media (max-width: 750px) {
    padding: 4em 0 1em 0;
  }
`;

const SectionTitle = styled.h2`
  font-size: 3.3rem;
  font-weight: 400;
  letter-spacing: -1px;
  margin: auto;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -30%;
    left: 0;
    width: 40%;
    height: 3px;
    background: ${(props) => props.theme.primary};
  }

  @media (max-width: 580px) {
    font-size: 2.2rem;
    margin: 0 auto 0 auto;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-gap: 3rem;
  margin: 4em 3em;

  a {
    grid-column: span 4;
  }

  /* a:first-of-type {
    grid-column: 3/7;
  } */

  a:focus {
    transform: translateY(-3px);
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
      0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
      0 32px 16px rgba(0, 0, 0, 0.09);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;

    /* a,
    a:first-of-type {
      grid-column: span 8;
    } */
  }

  @media (max-width: 580px) {
    margin: 4em 0.5em;
  }
`;

const ProjectItem = styled.div`
  border-radius: 0.3rem;
  background-size: cover;
  object-fit: cover;
  text-align: center;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.11), 0 2px 2px rgba(0, 0, 0, 0.11),
    0 4px 4px rgba(0, 0, 0, 0.11), 0 6px 8px rgba(0, 0, 0, 0.11),
    0 8px 16px rgba(0, 0, 0, 0.11);

  transform: translateY(0);
  transition: all 0.2s ease;

  &:hover,
  &:focus {
    transform: translateY(-3px);
    box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
      0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
      0 32px 16px rgba(0, 0, 0, 0.09);
  }

  h3 {
    font-size: 1.8rem;
    padding: 0.5em 0;
    letter-spacing: 2px;
    background: linear-gradient(
      34deg,
      rgba(134, 200, 255, 1) 0%,
      rgba(110, 186, 252, 1) 25%,
      rgba(96, 176, 244, 1) 50%,
      rgba(110, 186, 252, 1) 75%,
      rgba(134, 200, 255, 1) 100%
    );
    color: #333;
  }

  @media (max-width: 950px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  img {
    width: 100%;
    display: block;
  }
`;

const TechInfo = styled.div`
  font-size: 1.3rem;
  padding: 0.75em;
  background: #fff;
  color: ${(props) => props.theme.gray};
  border-bottom: 0.5px solid rgba(0, 0, 0, 0.2);

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }

  @media (max-width: 580px) {
    font-size: 1rem;
  }
`;

const ProjectSection = () => {
  return (
    <StyledSection>
      <Container>
        <SectionTitle id='projects'>Recent Projects</SectionTitle>
      </Container>
      <GridContainer>
        <Link to='/e-commerce'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>NextJS | Node | Express </p>
              </TechInfo>
              <picture>
                <source
                  srcSet={require('../../images/lg/e-commerce-lg.png')}
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet={require('../../images/sm/e-commerce-sm.png')}
                  media='(max-width: 1200px)'
                />
                <img
                  src={require('../../images/lg/e-commerce-lg.png')}
                  alt='Movie Explorer App.'
                />
              </picture>
              <h3>Mock E-Commerce</h3>
            </div>
          </ProjectItem>
        </Link>
        <Link to='/movie-explorer'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>React | Redux | Node | Express </p>
              </TechInfo>
              <picture>
                <source
                  srcSet={require('../../images/lg/movie-explorer-lg.jpg')}
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet={require('../../images/sm/movie-explorer-sm.jpg')}
                  media='(max-width: 1200px)'
                />
                <img
                  src={require('../../images/lg/movie-explorer-lg.jpg')}
                  alt='Movie Explorer App.'
                />
              </picture>
              <h3>Movie Explorer</h3>
            </div>
          </ProjectItem>
        </Link>
        <Link to='/life-tracker'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>React | Node | Express | MongoDB</p>
              </TechInfo>
              <picture>
                <source
                  srcSet={require('../../images/lg/life-tracker-lg.jpg')}
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet={require('../../images/sm/life-tracker-sm.jpg')}
                  media='(max-width: 1200px)'
                />
                <img
                  src={require('../../images/lg/life-tracker-lg.jpg')}
                  alt='Life Tracker App.'
                />
              </picture>
              <h3>Life Tracker App</h3>
            </div>
          </ProjectItem>
        </Link>
        <Link to='/pet-matcher'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>React | Node | Express | Styled Components </p>
              </TechInfo>
              <picture>
                <source
                  srcSet={require('../../images/lg/pet-matcher-lg.jpg')}
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet={require('../../images/sm/pet-matcher-sm.png')}
                  media='(max-width: 1200px)'
                />
                <img
                  src={require('../../images/lg/pet-matcher-lg.jpg')}
                  alt='Pet Matcher App.'
                />
              </picture>
              <h3>Pet Matcher</h3>
            </div>
          </ProjectItem>
        </Link>
        {/* <Link to='/js-typing-test'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>JS | HTML | CSS</p>
              </TechInfo>
              <picture>
                <source
                  srcSet={require('../../images/lg/js-typing-test-lg.jpg')}
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet={require('../../images/sm/js-typing-test-sm.jpg')}
                  media='(max-width: 1200px)'
                />
                <img
                  src={require('../../images/lg/js-typing-test-lg.jpg')}
                  alt='JavaScript Typing Test.'
                />
              </picture>
              <h3>JS Typing Test</h3>
            </div>
          </ProjectItem>
        </Link> */}
        {/* <Link to='/pg-finder'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>JS | Node | Express | HTML | CSS </p>
              </TechInfo>
              <picture>
                <source
                  srcSet={require('../../images/lg/pg-finder-lg.jpg')}
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet={require('../../images/sm/pg-finder-sm.jpg')}
                  media='(max-width: 1200px)'
                />
                <img
                  src={require('../../images/lg/pg-finder-lg.jpg')}
                  alt='PG Finder App.'
                />
              </picture>
              <h3>PG Finder</h3>
            </div>
          </ProjectItem>
        </Link> */}
        <Link to='/exotic-pet-store'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>JS | HTML | CSS</p>
              </TechInfo>
              <picture>
                <source
                  srcSet={require('../../images/lg/exotic-pet-store-lg.jpg')}
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet={require('../../images/sm/exotic-pet-store-sm.png')}
                  media='(max-width: 1200px)'
                />
                <img
                  src={require('../../images/lg/exotic-pet-store-lg.jpg')}
                  alt='Exotic Pet Store Landing Page.'
                />
              </picture>
              <h3>Store Landing Page</h3>
            </div>
          </ProjectItem>
        </Link>
        <Link to='/exercise-site'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>HTML | CSS</p>
              </TechInfo>
              <picture>
                <source
                  srcSet={require('../../images/lg/exercise-site-lg.jpg')}
                  media='(min-width: 1200px)'
                />
                <source
                  srcSet={require('../../images/sm/exercise-site-sm.jpg')}
                  media='(max-width: 1200px)'
                />
                <img
                  src={require('../../images/lg/exercise-site-lg.jpg')}
                  alt='Exercise Site Product Landing Page.'
                />
              </picture>
              <h3>Product Landing Page</h3>
            </div>
          </ProjectItem>
        </Link>
      </GridContainer>
    </StyledSection>
  );
};

export default ProjectSection;
