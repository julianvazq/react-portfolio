import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import JVLogo from '../../logos/jv_logo.png';
import styled from 'styled-components';
import Container from '../Container';
import ResumePDF from '../../docs/julian_vazquez_resume.pdf';

const Navbar = () => {
  const Nav = styled.nav`
    padding: 2em 0;
  `;

  const ListItem = styled.li`
    font-size: 1.3rem;
    display: inline-block;
    letter-spacing: 0.5px;
    margin: 0 20px;
    padding-bottom: 10px;
    position: relative;

    &:hover:after {
      transform: scaleX(1);
    }

    a:focus &:after {
      transform: scaleX(1);
    }

    &:after {
      content: '';
      height: 1.5px;
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
      background: ${(props) => props.theme.primary};
      transition: transform 250ms ease-in-out;
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
    padding-bottom: 10px;

    /* a:focus ${ListItem}:after {
      transform: scaleX(1);
    } */

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
