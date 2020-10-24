import React from 'react';
import styled from 'styled-components';

const Container = ({ maxWidth = 1400, children }) => {
  const StyledContainer = styled.div`
    max-width: ${(props) => `${props.maxWidth}px`};
    width: 90%;
    display: flex;
    align-items: center;
    margin: auto;
    flex-flow: row wrap;
    position: relative;
  `;

  return <StyledContainer maxWidth={maxWidth}>{children}</StyledContainer>;
};

export default Container;
