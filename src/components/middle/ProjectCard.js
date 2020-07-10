import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';

const ImgContainer = styled.div`
  position: relative;
`;

const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  color: #fff;
  font-weight: 500;
  font-size: 1.5rem;
  line-height: 1.5;
  opacity: 0;
  transition: opacity 350ms ease-in-out;
  -moz-transition: opacity 350ms ease-in-out;
  padding: 4rem;
`;

// For accessibility
const StyledLink = styled(Link)`
  @media (min-width: 800px) {
    &:hover ${Overlay}, &:focus ${Overlay} {
      opacity: 1;
    }
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
    /* background: linear-gradient(
      34deg,
      rgba(134, 200, 255, 1) 0%,
      rgba(110, 186, 252, 1) 25%,
      rgba(96, 176, 244, 1) 50%,
      rgba(110, 186, 252, 1) 75%,
      rgba(134, 200, 255, 1) 100%
    ); */
    background: #e2e4e6;
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
  border-top: 4px solid ${(props) => props.theme.primary};

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }

  @media (max-width: 580px) {
    font-size: 1rem;
  }
`;

const ProjectCard = ({ title, tech, description, images, link }) => {
  return (
    <StyledLink to={link}>
      <ProjectItem>
        <div>
          <TechInfo>
            <p>{tech.join(' | ')}</p>
          </TechInfo>
          <ImgContainer>
            <Overlay>{description}</Overlay>
            <picture>
              <source src={images.sm} media='(max-width: 799px)' />
              <source src={images.md} media='(max-width: 1500px)' />
              <source src={images.lg} media='(min-width: 1500px)' />
              <img src={images.md} alt={title} />
            </picture>
          </ImgContainer>
          <h3>{title}</h3>
        </div>
      </ProjectItem>
    </StyledLink>
  );
};

export default ProjectCard;
