import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Navbar = () => {
  const Nav = styled.nav`
    padding: 2em 0 0.5em;
  `;

  const Logo = styled.div`
    font-size: 3rem;
    align-self: flex-start;
    flex: 1 1 0;
  `;

  const LinkList = styled.ul`
    align-self: right;
    flex: 1 1 0;
    flex-wrap: wrap;
    text-align: right;
    padding: 0;
  `;

  const ListItem = styled.li`
    font-size: 1.3rem;
    display: inline-block;
    padding: 0 40px 10px 0;
    letter-spacing: 0.5px;
  `;

  return (
    <Nav>
      <Container>
        <Logo>JV</Logo>
        <LinkList>
          <ListItem>Projects</ListItem>
          <ListItem>Contact</ListItem>
          <ListItem>Github</ListItem>
        </LinkList>
      </Container>
    </Nav>
  );
};

export default Navbar;
