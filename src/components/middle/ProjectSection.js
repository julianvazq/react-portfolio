import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import Container from '../Container';

const ProjectSection = () => {
  const StyledSection = styled.section`
    background: ${props => props.theme.secondary};
    padding: 8em 0;

    @media (max-width: 1000px) {
      padding: 4em 0;
    }

    @media (max-width: 750px) {
      padding: 2em 0 1em 0;
    }
  `;

  const SectionTitle = styled.h2`
    font-size: 3.3rem;
    font-weight: 400;
    letter-spacing: -1px;

    @media (max-width: 580px) {
      font-size: 2.2rem;
    }
  `;

  const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 3rem;
    margin: 4em 3em;

    @media (max-width: 750px) {
      grid-template-columns: 1fr;
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

    &:hover {
      transform: translateY(-3px);
      box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
        0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
        0 32px 16px rgba(0, 0, 0, 0.09);
    }

    h3 {
      font-size: 1.8rem;
      padding: 1em 0;
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

    @media (max-width: 580px) {
      h3 {
        padding: 0.7em 0;
      }
    }

    img {
      width: 100%;
      display: block;
    }
  `;

  const TechInfo = styled.div`
    font-size: 1.3rem;
    padding: 1em;
    background: #fff;

    @media (max-width: 950px) {
      font-size: 1.1rem;
    }

    @media (max-width: 580px) {
      font-size: 1rem;
    }
  `;

  return (
    <StyledSection>
      <Container>
        <SectionTitle id='projects'>Recent Projects</SectionTitle>
      </Container>
      <GridContainer>
        <Link to='/life-tracker'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>React | Node | Express | MongoDB</p>
              </TechInfo>
              <img
                src={require('../../images/md/life-tracker-md.png')}
                srcSet={`${require('../../images/lg/life-tracker-lg.png')} 1300w,
                        ${require('../../images/md/life-tracker-md.png')} 853w,
                        ${require('../../images/sm/life-tracker-sm.png')} 650w`}
                sizes='(max-width: 1000px) 650px,
                       (max-width: 1500px) 853px,
                       1300px'
                alt='Life Tracker App.'
              />
              <h3>Life Tracker App</h3>
            </div>
          </ProjectItem>
        </Link>
        <Link to='/pg-finder'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>JS | Node | Express | HTML | CSS </p>
              </TechInfo>
              <img
                src={require('../../images/md/pg-finder-md.png')}
                srcSet={`${require('../../images/lg/pg-finder-lg.png')} 1300w,
                        ${require('../../images/md/pg-finder-md.png')} 853w,
                        ${require('../../images/sm/pg-finder-sm.png')} 650w`}
                sizes='(max-width: 1000px) 650px,
                        (max-width: 1500px) 853px,
                        1300px'
                alt='PG Finder.'
              />
              <h3>PG Finder</h3>
            </div>
          </ProjectItem>
        </Link>
        <Link to='/exotic-pet-store'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>JS | HTML | CSS</p>
              </TechInfo>
              <img
                src={require('../../images/md/exotic-pet-store-md.png')}
                srcSet={`${require('../../images/lg/exotic-pet-store-lg.png')} 1300w,
                        ${require('../../images/md/exotic-pet-store-md.png')} 853w,
                        ${require('../../images/sm/exotic-pet-store-sm.png')} 650w`}
                sizes='(max-width: 1000px) 650px,
                        (max-width: 1500px) 853px,
                        1300px'
                alt='Store Landing Page.'
              />
              <h3>Store Landing Page</h3>
            </div>
          </ProjectItem>
        </Link>
        <Link to='/js-typing-test'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>JS | HTML | CSS</p>
              </TechInfo>
              <img
                src={require('../../images/md/js-typing-test-md.png')}
                srcSet={`${require('../../images/lg/js-typing-test-lg.png')} 1300w,
                        ${require('../../images/md/js-typing-test-md.png')} 853w,
                        ${require('../../images/sm/js-typing-test-sm.png')} 650w`}
                sizes='(max-width: 1000px) 650px,
                        (max-width: 1500px) 853px,
                        1300px'
                alt='JavaScript Typing Test.'
              />
              <h3>JS Typing Test</h3>
            </div>
          </ProjectItem>
        </Link>
        <Link to='/exercise-site'>
          <ProjectItem>
            <div>
              <TechInfo>
                <p>HTML | CSS</p>
              </TechInfo>
              <img
                src={require('../../images/md/exercise-site-md.png')}
                srcSet={`${require('../../images/lg/exercise-site-lg.png')} 1300w,
                        ${require('../../images/md/exercise-site-md.png')} 853w,
                        ${require('../../images/sm/exercise-site-sm.png')} 650w`}
                sizes='(max-width: 1000px) 650px,
                        (max-width: 1500px) 853px,
                        1300px'
                alt='Product Landing Page.'
              />
              <h3>Product Landing Page</h3>
            </div>
          </ProjectItem>
        </Link>
      </GridContainer>
    </StyledSection>
  );
};

export default ProjectSection;
