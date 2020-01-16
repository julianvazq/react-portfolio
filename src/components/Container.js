import React from 'react';
import styled from 'styled-components';

const Container = props => {
  const StyledContainer = styled.div`
    max-width: 1400px;
    width: 90%;
    display: flex;
    align-items: center;
    margin: auto;
    flex-flow: row wrap;
  `;

  return <StyledContainer>{props.children}</StyledContainer>;
};

export default Container;
