import React from 'react';
import styled from 'styled-components';
import { Button } from '../styled-components/StyledComponents';
import { IoIosArrowDown } from 'react-icons/io';

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
    display: flex;
    align-items: center;

    @media (max-width: 800px) {
      margin-bottom: 2em;
    }
    @media (max-width: 600px) {
      font-size: 1.25rem;
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

  return (
    <CTAContainer>
      <CTA href='#projects'>
        My projects <DownArrow />
      </CTA>
    </CTAContainer>
  );
};

export default CTA;
