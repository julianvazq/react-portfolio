import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const overlayVariant = {
  rest: {
    opacity: 0,
  },
  hover: {
    opacity: 1,
    transition: {
      duration: 0.15,
      type: 'tween',
      ease: 'easeIn',
    },
  },
};

const textVariant = {
  rest: {
    opacity: 0,
    y: 5,
  },
  hover: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.25,
      delay: 0.3,
    },
  },
};

const ImgContainer = styled.div`
  position: relative;
  overflow: hidden;
`;

const Overlay = styled(motion.div)`
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
  font-weight: 400;
  line-height: 1.5;
  opacity: 0;
  transition: opacity 350ms ease-in-out;
  -moz-transition: opacity 350ms ease-in-out;
  padding: 4rem;

  p {
    font-size: 1.5rem;

    @media (max-width: 650px) {
      font-size: 1.25rem;
    }
  }
`;

// For accessibility
const StyledLink = styled(Link)`
  @media (min-width: 800px) {
    &:focus ${Overlay} {
      opacity: 1 !important;
    }

    &:focus ${Overlay} p {
      opacity: 1 !important;
      transform: translateY(5px) !important;
    }
  }
`;

const ProjectItem = styled(motion.article)`
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
    background: #e2e4e6;
    color: #333;
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  @media (max-width: 950px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  img {
    width: 100%;
    display: block;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

const TechInfo = styled.div`
  font-size: 1.3rem;
  padding: 0.75em;
  background: #fff;
  color: ${(props) => props.theme.gray};
  border-top: 4px solid
    ${(props) => (props.borderColor ? props.borderColor : props.theme.primary)};
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;

  @media (max-width: 950px) {
    font-size: 1.1rem;
  }

  @media (max-width: 580px) {
    font-size: 1rem;
  }
`;

const ProjectCard = ({
  title,
  tech,
  description,
  images,
  link,
  borderColor,
  index,
}) => {
  return (
    <StyledLink to={link} aria-label={title}>
      <ProjectItem initial='rest' whileHover='hover' animate='rest'>
        <div>
          <TechInfo borderColor={borderColor}>
            <p>{tech.join(' 🞄 ')}</p>
          </TechInfo>
          <ImgContainer>
            <Overlay variants={overlayVariant}>
              <motion.p variants={textVariant}>{description}</motion.p>
            </Overlay>
            <picture>
              <source srcSet={images.sm} media='(max-width: 799px)' />
              <source srcSet={images.md} media='(max-width: 1500px)' />
              <img
                src={images.lg}
                alt={title}
                loading={index > 1 ? 'lazy' : 'eager'}
              />
            </picture>
          </ImgContainer>
          <h3>{title}</h3>
        </div>
      </ProjectItem>
    </StyledLink>
  );
};

export default ProjectCard;
