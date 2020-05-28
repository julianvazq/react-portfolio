import React from 'react';
import styled from 'styled-components';
import ReactLogo from '../../logos/react_logo.svg';

const AdditionalInfo = () => {
  const InfoContainer = styled.div`
    flex: 1 10;
    margin-bottom: 2em;
    display: flex;
    flex-direction: column;
    align-items: center;

    @media screen and (min-width: 800px) {
      align-items: flex-start;
    }
  `;

  const Label = styled.h3`
    margin-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.1rem;
    transform: translateX(17px);
    font-weight: 300;

    @media (max-width: 800px) {
      transform: translate(2px);
    }
  `;

  const Img = styled.img`
    display: block;
  `;

  const Caption = styled(Label)`
    font-size: 1.1rem;
    margin-top: 1em;
    transform: translateX(40px);
  `;

  return (
    <InfoContainer>
      <Label>Built with:</Label>
      <Img src={ReactLogo} className='react-logo' alt='React logo.' />
      <Caption>React</Caption>
    </InfoContainer>
  );
};

export default AdditionalInfo;
