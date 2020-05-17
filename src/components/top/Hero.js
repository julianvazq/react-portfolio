import React from 'react';
import styled from 'styled-components';
import Container from '../Container';

const Hero = () => {
  const HeroParagraph = styled.p`
    max-width: 840px;
    font-size: 3.3rem;
    line-height: 1.5;
    letter-spacing: -1px;
    margin: 1rem 0 4rem;
    color: #808080;

    @media (max-width: 580px) {
      font-size: 2.1rem;
      line-height: 1.75;
    }
  `;

  const StyledSpan = styled.span`
    color: ${(props) => props.theme.primary};
  `;

  return (
    <Container>
      <HeroParagraph>
        I'm <StyledSpan>Julian Vazquez</StyledSpan>, an Information Science
        senior at the University of Maryland.
      </HeroParagraph>
    </Container>
  );
};

export default Hero;
