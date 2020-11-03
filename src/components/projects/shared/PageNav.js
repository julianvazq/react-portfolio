import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 20%;
  min-width: 210px;
  margin-left: 3rem;

  h3 {
    font-family: 'Work Sans', 'Helvetica', sans-serif;
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
  }

  ul {
    list-style: none;
  }

  li {
    margin: 0.25rem 0;
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
    margin-left: 0;
    margin-top: 2em;
    width: 100%;
  }
`;

const defaultLinks = [
  {
    hash: '#preview',
    title: 'Preview',
  },
  {
    hash: '#responsiveness',
    title: 'Responsive Design',
  },
  {
    hash: '#tech',
    title: 'Tech Details',
  },
];

const PageNav = ({ navLinks = defaultLinks }) => {
  return (
    <Container>
      <h3>Content</h3>
      <ul>
        {navLinks.map((link) => (
          <li key={link.hash}>
            <a href={link.hash}>{link.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PageNav;
