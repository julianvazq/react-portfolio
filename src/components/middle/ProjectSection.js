import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import ProjectCard from './ProjectCard';
import { projects } from './projects';

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

const ProjectSection = () => {
  return (
    <StyledSection>
      <Container>
        <SectionTitle id='projects'>Recent Projects</SectionTitle>
      </Container>
      <GridContainer>
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </GridContainer>
    </StyledSection>
  );
};

export default ProjectSection;
