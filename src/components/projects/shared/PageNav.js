import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 20%;
  min-width: 210px;

  h3 {
    font-size: 2rem;
    font-weight: 400;
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
          <li>
            <a href={link.hash}>{link.title}</a>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default PageNav;
