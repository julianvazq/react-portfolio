import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import JVLogo from '../../logos/jv_logo.png';
import styled from 'styled-components';
import Container from '../Container';
import ResumePDF from '../../docs/julian_vazquez_resume.pdf';

const Navbar = () => {
  const Nav = styled.nav`
    padding: 2em 0 0.5em;
    margin-bottom: 2em;
  `;

  const LinkList = styled.ul`
    align-self: right;
    display: flex;
    justify-content: flex-end;
    flex: 1 1 0;
    text-align: right;
    padding: 0;

    @media (max-width: 735px) {
      flex-direction: column;
    }
  `;

  const ListItem = styled.li`
    font-size: 1.3rem;
    display: inline-block;
    padding: 0 40px 10px 0;
    letter-spacing: 0.5px;

    &:hover {
      color: ${(props) => props.theme.gray};
    }
  `;

  return (
    <Nav>
      <Container style={{ justifyItems: 'space-around' }}>
        <Link to='/'>
          <img src={JVLogo} className='jv-logo' alt='JV logo.' />
        </Link>
        <LinkList>
          <Link to='/#projects'>
            <ListItem>Projects</ListItem>
          </Link>
          <Link to='/#contact'>
            <ListItem>Contact</ListItem>
          </Link>
          <a href={ResumePDF} target='_blank' rel='noopener noreferrer'>
            <ListItem>Resume</ListItem>
          </a>
          <a
            href='https://github.com/julianvazq'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ListItem>GitHub</ListItem>
          </a>
        </LinkList>
      </Container>
    </Nav>
  );
};

export default Navbar;
