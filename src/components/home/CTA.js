import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/StyledComponents';

const CTA = () => {
  const CTAContainer = styled.div`
    flex: 1 10;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 800px) {
      align-items: flex-start;
      margin-bottom: 0;
    }

    @media (min-width: 1005px) {
      margin-bottom: 2em;
    }
  `;

  const CTA = styled(Button)`
    @media (max-width: 800px) {
      margin-bottom: 2em;
    }
    @media (max-width: 600px) {
      font-size: 1.25rem;
    }
  `;

  return (
    <CTAContainer>
      <CTA href='#projects'>My projects</CTA>
    </CTAContainer>
  );
};

export default CTA;
