import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 20%;
  min-width: 183px;

  h3 {
    font-size: 2rem;
    font-weight: 500;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 0.5rem 0;
    font-size: 1.25rem;
    position: relative;

    &:before {
      content: '•';
      display: inline-block;
      margin-right: 1rem;
      font-size: 1.5rem;
      color: ${(props) => props.theme.primary};
    }
  }

  @media (max-width: 800px) {
    margin-top: 2em;
    width: 100%;
  }
`;

const Navigation = ({ children }) => {
  return (
    <Container>
      <h3>Content</h3>
      {children}
    </Container>
  );
};

export default Navigation;
