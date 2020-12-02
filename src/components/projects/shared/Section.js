import React from 'react';
import styled from 'styled-components';
import { BackgroundWrapper } from '../../styled-components/StyledComponents';

const SectionContainer = styled.section`
  margin: auto;
  width: 90%;
  max-width: 1000px;
  padding: 4rem 0;

  & > * {
    margin-bottom: 4rem;
  }

  & > *:last-child {
    margin-bottom: 0;
  }

  & > div > p {
    margin-bottom: 1rem;
  }

  & > div > p:last-child {
    margin-bottom: 0;
  }
`;

const SectionTitle = styled.h3`
  font-family: 'Work Sans', 'Helvetica', sans-serif;
  font-size: 2rem;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  margin-bottom: 4rem;
  color: hsl(210 5% 47% / 1);
  display: inline-block;
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 100%;
    height: 3px;
    background: linear-gradient(
      90deg,
      rgba(96, 176, 244, 1),
      rgba(255, 255, 255, 0)
    );
    border-radius: 1rem;
  }

  @media (max-width: 1700px) {
    font-size: 1.75rem;
  }

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`;

const Section = ({ title, id, bg = false, children }) => {
  if (bg) {
    return (
      <BackgroundWrapper>
        <SectionContainer>
          <SectionTitle id={id}>{title}</SectionTitle>
          {children}
        </SectionContainer>
      </BackgroundWrapper>
    );
  }

  return (
    <SectionContainer>
      <SectionTitle id={id}>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};

export default Section;
