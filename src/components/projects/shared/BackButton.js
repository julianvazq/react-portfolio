import React from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { HashLink as Link } from 'react-router-hash-link';
import styled from 'styled-components';
import { Button } from '../../styled-components/StyledComponents';

const BackArrow = styled(IoIosArrowBack)`
  margin-right: 0.5rem;
  font-size: 1.75rem;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const BkButton = styled(Button)`
  width: 100%;
  max-width: 290px;
  margin-top: 6rem;
`;

const BackButton = () => {
  return (
    <BkButton as={Link} to='/#projects'>
      <BackArrow /> Back to projects
    </BkButton>
  );
};

export default BackButton;
