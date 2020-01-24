import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const Hero = () => {
  const HeroParagraph = styled.p`
    max-width: 840px;
    font-size: 3.3rem;
    line-height: 68px;
    letter-spacing: -1px;
    margin-bottom: 2em;
    color: #808080;

    @media (max-width: 580px) {
      font-size: 2.1rem;
    }
  `;

  const StyledSpan = styled.span`
    color: ${props => props.theme.primary};
  `;

  return (
    <Container>
      <HeroParagraph>
        I'm <StyledSpan>Julian Vazquez</StyledSpan>, currently a{' '}
        <StyledSpan>senior </StyledSpan>
        at the <StyledSpan>University of Maryland</StyledSpan>.
      </HeroParagraph>
    </Container>
  );
};

export default Hero;
