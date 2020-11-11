import { motion } from 'framer-motion';
import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styled from 'styled-components';
import CoverImage from '../../images/illustrations/cover-image.svg';
import { Button, fadeInFromRight } from '../styled-components/StyledComponents';

const textVariant = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: {
    width: 'auto',
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
};

const OuterContainer = styled.section`
  position: relative;

  &:after {
    content: '';
    position: absolute;
    right: 0;
    bottom: 0;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 0 500px 75vw;
    border-color: transparent transparent hsl(200 20% 98% / 0.75) transparent;
    z-index: -1;
  }
`;

const HeroContainer = styled.div`
  width: 90%;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 4rem 0;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    padding: 6rem 0 8rem 0;
  }
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  z-index: 1;

  @media screen and (min-width: 800px) {
    align-items: flex-start;
    text-align: left;
    order: -1;
  }
`;

const Illustration = styled(motion.img)`
  display: block;
  width: 250px;
  margin-bottom: 4rem;
  z-index: 0;

  @media screen and (min-width: 600px) {
    width: 350px;
  }

  @media screen and (min-width: 800px) {
    width: 400px;
    margin: 0;
  }

  @media screen and (min-width: 1000px) {
    width: 550px;
  }

  @media screen and (min-width: 1800px) {
    width: 650px;
  }
`;

const Details = styled.div`
  margin: 4rem 0;
  text-align: left;
`;

const Name = styled.p`
  font-family: 'Work Sans', 'Helvetica', sans-serif;
  font-size: 1.75rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
`;

const Position = styled.h2`
  font-weight: 600;
  font-size: 1.25rem;
  color: hsl(0deg 0% 40%);
  line-height: 1.2;

  @media (max-width: 580px) {
    font-size: 1.5rem;
    line-height: 1.25;
  }
`;

const Heading = styled.h1`
  font-size: 3.3rem;
  line-height: 1.4;
  letter-spacing: -1px;
  color: ${(props) => props.theme.primary};
  margin-bottom: 1rem;
  width: 100%;
  font-weight: 500;
  text-transform: capitalize;
  font-family: 'Work Sans', 'Helvetica', sans-serif;

  span {
    font-weight: 700;
    color: #5d5d5d;
    letter-spacing: 2px;
    position: relative;
    display: inline-block;
    transform-origin: right;
  }

  span:after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 110%;
    height: 3px;
    background: linear-gradient(90deg, rgba(96, 176, 244, 1), 80%, #fff);
    border-radius: 1rem;
  }
`;

const CTAButton = styled(Button)`
  display: flex;
  align-items: center;

  @media (min-width: 600px) {
    /* font-size: 1.5rem; */
  }
`;

const DownArrow = styled(IoIosArrowDown)`
  margin-left: 0.5rem;
  margin-top: 0.125rem;
  font-size: 1.75rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const Hero = () => {
  return (
    <OuterContainer>
      <HeroContainer>
        <Illustration
          src={CoverImage}
          alt='Illustration.'
          variants={fadeInFromRight}
          initial='hidden'
          animate='visible'
        />
        <ContentContainer>
          <Heading>
            Let's turn your{' '}
            <motion.span
              variants={textVariant}
              initial='hidden'
              animate='visible'
            >
              ideas
            </motion.span>{' '}
            <br /> into{' '}
            <motion.span variants={textVariant}>reality</motion.span>
          </Heading>

          <Details>
            <Name>Julian Vazquez</Name>
            <Position>Front End Developer</Position>
          </Details>
          <CTAButton href='#projects'>
            View projects <DownArrow />
          </CTAButton>
        </ContentContainer>
      </HeroContainer>
    </OuterContainer>
  );
};

export default Hero;
