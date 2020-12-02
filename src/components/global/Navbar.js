import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import JVLogo from '../../logos/jv_logo.png';
import styled from 'styled-components';
import Container from '../Container';
import ResumePDF from '../../docs/julian_vazquez_resume.pdf';

const Navbar = () => {
  const Nav = styled.nav`
    padding: 1rem 0;
    /* box-shadow: 0 0px 8px rgba(0, 0, 0, 0.08); */
  `;

  const ListItem = styled.li`
    font-size: 1.25rem;
    display: inline-block;
    letter-spacing: 0.5px;
    margin: 0 1.25rem;
    position: relative;
    z-index: 1;

    @media (min-width: 750px) {
      &:hover:after {
        transform: scaleX(1);
      }
    }

    &:after {
      content: '';
      height: 2px;
      width: 110%;
      position: absolute;
      bottom: -10px;
      left: 0;
      background: linear-gradient(90deg, rgba(96, 176, 244, 1), 80%, #fff);
      transform-origin: left;
      transition: transform 200ms ease-in-out;
      transform: scaleX(0);
      border-radius: 1rem;
    }
  `;

  const LinkList = styled.ul`
    align-self: right;
    display: flex;
    justify-content: flex-end;
    flex: 1 1 0;
    text-align: right;

    @media (max-width: 735px) {
      flex-direction: column;
    }
  `;

  return (
    <Nav>
      <Container style={{ justifyItems: 'space-around' }}>
        <Link to='/'>
          <img src={JVLogo} className='jv-logo' alt='JV logo.' />
        </Link>
        <LinkList>
          <ListItem>
            <Link to='/#projects'>Projects</Link>
          </ListItem>
          <ListItem>
            <Link to='/#contact'>Contact</Link>
          </ListItem>
          <ListItem>
            <a href={ResumePDF} target='_blank' rel='noopener noreferrer'>
              Resume
            </a>
          </ListItem>
        </LinkList>
      </Container>
    </Nav>
  );
};

export default Navbar;
