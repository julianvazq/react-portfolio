import React from 'react';
import styled from 'styled-components';

const Hero = () => {
  const HeroContainer = styled.div`
    width: 100%;
    text-align: center;

    @media screen and (min-width: 800px) {
      text-align: left;
    }

    @media screen and (min-width: 1000px) {
      margin-top: 2rem;
    }
  `;

  const Name = styled.h1`
    font-size: 3.3rem;
    line-height: 1.1;
    letter-spacing: -1px;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
  `;

  const Position = styled.h2`
    font-family: 'Work Sans', 'Helvetica', 'sans-serif';
    font-weight: 500;
    font-size: 1.75em;
    color: #808080;
    line-height: 1.2;
    margin-bottom: 4rem;

    @media (max-width: 580px) {
      font-size: 1.5rem;
      line-height: 1.25;
    }
  `;

  return (
    <HeroContainer>
      <Name>Julian Vazquez</Name>
      <Position>Front End Developer</Position>
    </HeroContainer>
  );
};

export default Hero;
