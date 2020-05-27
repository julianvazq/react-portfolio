import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

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

  const Name = styled.p`
    font-size: 3.3rem;
    line-height: 1.1;
    letter-spacing: -1px;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
    width: 100%;
  `;

  const Position = styled(Name)`
    font-size: 2.25rem;
    color: #808080;
    line-height: 1.2;
    margin-bottom: 4rem;

    @media (max-width: 580px) {
      font-size: 2.1rem;
      line-height: 1.25;
    }
  `;

  return (
    // <Container>
    <HeroContainer>
      <Name>Julian Vazquez</Name>
      <Position>Front End Developer</Position>
    </HeroContainer>
    // </Container>
  );
};

export default Hero;
