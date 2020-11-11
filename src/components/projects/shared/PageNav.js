import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  width: 20%;
  min-width: 210px;
  margin-left: 3rem;
  font-family: 'Work Sans', 'Helvetica', sans-serif;

  h3 {
    font-size: 1.25rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-bottom: 0.75rem;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
    font-size: 1.25rem;
  }

  a {
    background: hsl(200 25% 92% / 1);
    color: hsl(200 5% 40% / 1);
    padding: 0.125rem 0.75rem;
    border-radius: 0.3rem;
  }

  @media (max-width: 800px) {
    margin-left: 0;
    margin-top: 3rem;
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
