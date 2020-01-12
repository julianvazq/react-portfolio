import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import logo from '../logo.svg';

const AdditionalInfo = () => {
  const InfoContainer = styled.div`
    flex: 1 10;
    margin-bottom: 0;
  `;

  const Label = styled.h3`
      margin-bottom: 1em;
    letter-spacing: 2px;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 400;
}`;

  return (
    <Container>
      <InfoContainer>
        <Label>Built with:</Label>
        <img src={logo} className='react-logo' alt='React logo.' />
      </InfoContainer>
    </Container>
  );
};

export default AdditionalInfo;
