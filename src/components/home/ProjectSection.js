import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import ProjectCard from './ProjectCard';
import { projects } from './projects';

const StyledSection = styled.main`
    background: ${(props) => props.theme.secondary};
    padding: 6rem 0 4rem;
    position: relative;
    z-index: 1;

    @media (max-width: 1000px) {
        padding: 4rem 0;
    }

    @media (max-width: 750px) {
        padding: 4rem 0 1rem 0;
    }
`;

const SectionTitle = styled.h2`
    font-family: 'Work Sans', 'Helvetica', sans-serif;
    font-size: 2.5rem;
    font-weight: 400;
    letter-spacing: -1px;
    width: 100%;
    text-align: left;
    text-transform: uppercase;
    letter-spacing: 1px;
    margin-bottom: 0.5rem;
    font-weight: 600;
    position: relative;

    span {
        color: #3e9cec;
        font-weight: 400;
    }

    &:before {
        content: '';
        position: absolute;
        top: -1rem;
        left: 0;
        width: 180px;
        height: 3px;
        background: linear-gradient(
            90deg,
            rgba(96, 176, 244, 1),
            rgba(255, 255, 255, 0)
        );
        border-radius: 1rem;
    }

    @media (max-width: 580px) {
        font-size: 2.2rem;
    }

    @media (max-width: 800px) {
        text-align: center;
        &:before {
            display: none;
        }
    }
`;

const SectionSubtitle = styled.h3`
    font-family: 'Work Sans', 'Helvetica', sans-serif;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 400;
    margin-bottom: 1rem;
    position: relative;

    @media (max-width: 800px) {
        margin: 0 auto;
    }
`;

const GridContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-gap: 3rem;
    align-items: center;
    margin: 4rem auto;
    max-width: 1800px;
    width: 90%;

    a:focus {
        transform: translateY(-3px);
        box-shadow: 0 2px 1px rgba(0, 0, 0, 0.09), 0 4px 2px rgba(0, 0, 0, 0.09),
            0 8px 4px rgba(0, 0, 0, 0.09), 0 16px 8px rgba(0, 0, 0, 0.09),
            0 32px 16px rgba(0, 0, 0, 0.09);
    }

    @media (min-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (min-width: 1900px) {
        width: auto;
    }
`;

const ProjectSection = () => {
    return (
        <StyledSection>
            <Container>
                <SectionTitle id='projects'>
                    <span>Notable</span> Projects
                </SectionTitle>
                <SectionSubtitle>Design &amp; Development</SectionSubtitle>
            </Container>
            <GridContainer>
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        index={index}
                        {...project}
                    />
                ))}
            </GridContainer>
        </StyledSection>
    );
};

export default ProjectSection;
