import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Hero = () => {
  const HeroParagraph = styled.p`
    max-width: 840px;
    font-size: 3.5rem;
    line-height: 68px;
    letter-spacing: -1px;
    margin: 1.25em 0 2em 0;

    @media (max-width: 580px) {
      font-size: 2.5rem;
    }
  `;

  const StyledSpan = styled.span`
    color: ${props => props.theme.primary};
  `;

  return (
    <Container>
      <HeroParagraph>
        I'm Julian Vazquez, currently a <StyledSpan>senior</StyledSpan> at the{' '}
        <StyledSpan>University of Maryland</StyledSpan>.
      </HeroParagraph>
    </Container>
  );
};

export default Hero;
