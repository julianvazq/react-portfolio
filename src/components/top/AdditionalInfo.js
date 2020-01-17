import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import ReactLogo from '../../logos/react_logo.svg';

const AdditionalInfo = () => {
  const InfoContainer = styled.div`
    flex: 1 10;
    margin-bottom: 4em;
  `;

  const Label = styled.h3`
    margin-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
  `;

  const Caption = styled(Label)`
    font-size: 1rem;
    transform: translateX(38px);
    margin-top: 1em;
  `;

  return (
    <Container>
      <InfoContainer>
        <Label>Built with:</Label>
        <img src={ReactLogo} className='react-logo' alt='React logo.' />
        <Caption>React</Caption>
      </InfoContainer>
    </Container>
  );
};

export default AdditionalInfo;
