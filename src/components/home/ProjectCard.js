import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const overlayVariant = {
  rest: {
    // filter: 'blur(300px)',
    // scale: 0,
  },
  hover: {
    // filter: 'blur(0px)',
    // scale: 1,
    transition: {
      // duration: 0.2,
      // type: 'tween',
      // ease: 'easeInOut',
    },
  },
};

const textVariant = {
  rest: {
    opacity: 0,
    y: 5,
    filter: 'blur(7px)',
  },
  hover: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: {
      duration: 0.125,
      delay: 0.2,
    },
  },
};

const borderWidth = {
  md: '1000px 1000px 0 0',
  lg: '1500px 1500px 0 0',
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
  color: #fff;
  font-weight: 400;
  line-height: 1.5;
  padding: 4rem;

  p {
    font-size: 1.25rem;
    z-index: 99;
    visibility: hidden;

    @media (min-width: 700px) {
      font-size: 1.5rem;
      visibility: visible;
    }
  }

  &::before {
    /* content: ''; */
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 0px;
    height: 0px;
    border-style: solid;
    border-width: 0px 0px 0 0;
    border-color: rgb(22 22 22 / 70%) transparent transparent transparent;
    transition: 0.65s ease border-width;
    backdrop-filter: blur(2px);
  }

  @media (min-width: 700px) {
    &::before {
      content: '';
    }
  }
`;

// For accessibility (tab)
const StyledLink = styled(Link)`
  @media (min-width: 700px) {
    &:focus ${Overlay}::before {
      border-width: ${borderWidth.md};
    }

    &:focus ${Overlay} p {
      transition: all 250ms ease-in-out 150ms;
      opacity: 1 !important;
      filter: blur(0px) !important;
      transform: scale(1) !important;
      transform: translateY(5px) !important;
    }
  }

  @media (min-width: 700px) {
    &:focus ${Overlay}::before {
      border-width: ${borderWidth.lg};
    }
  }

  @media (min-width: 1000px) {
    &:focus ${Overlay}::before {
      border-width: ${borderWidth.md};
    }
  }

  @media (min-width: 1450px) {
    &:focus ${Overlay}::before {
      border-width: ${borderWidth.lg};
    }
  }
`;

const ProjectItem = styled(motion.article)`
  font-family: 'Work Sans', 'Helvetica', sans-serif;
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

    ${Overlay}::before {
      border-width: ${borderWidth.md};
    }
  }

  h3 {
    font-weight: 600;
    font-size: 1.75rem;
    padding: 0.5em 0;
    letter-spacing: 2px;
    background: #e2e4e6;
    color: hsl(210 10% 25% / 1);
    border-bottom-left-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
  }

  img {
    width: 100%;
    display: block;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  @media (max-width: 950px) {
    h3 {
      font-size: 1.5rem;
    }
  }

  @media (min-width: 700px) {
    &:hover,
    &:focus {
      ${Overlay}::before {
        border-width: ${borderWidth.lg};
      }
    }
  }

  @media (min-width: 1000px) {
    &:hover,
    &:focus {
      ${Overlay}::before {
        border-width: ${borderWidth.md};
      }
    }
  }

  @media (min-width: 1450px) {
    &:hover,
    &:focus {
      ${Overlay}::before {
        border-width: ${borderWidth.lg};
      }
    }
  }
`;

const TechInfo = styled.div`
  text-transform: uppercase;
  letter-spacing: 1px;
  line-height: 1.5;
  font-size: 1rem;
  padding: 0.75em;
  background: #fff;
  color: hsl(0, 0%, 45%);
  border-top: 4px solid
    ${(props) => (props.borderColor ? props.borderColor : props.theme.primary)};
  border-top-left-radius: 0.3rem;
  border-top-right-radius: 0.3rem;
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
            <p>{tech.join(' • ')}</p>
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
