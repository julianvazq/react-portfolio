import React from 'react';
import styled from 'styled-components';
import Container from '../Container';
import ContactImage from '../../images/illustrations/contact.svg';
import { useLocation } from 'react-router-dom';
import ContactForm from './ContactForm';
import ContactList from './ContactList';

const Footer = () => {
  const { pathname } = useLocation();

  const alternateBackgroundColor = ['/e-commerce'];

  const backgroundColor = alternateBackgroundColor.includes(pathname)
    ? '#f0f4f6'
    : '#FFF';

  const BackgroundContainer = styled.section`
    background: ${(props) => props.backgroundColor};
  `;

  const Footer = styled.footer`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 3rem 0 2rem;
    width: 100%;
    text-align: center;
    justify-content: center;

    a:focus {
      opacity: 0.8;
    }

    @media (min-width: 750px) {
      margin: 4rem 0 2rem;
    }
  `;

  const FooterText = styled.p`
    grid-column: -1/1;
    max-width: 840px;
    font-size: 1.5rem;
    line-height: 1.5;
    letter-spacing: -1px;
    font-weight: 300;
    padding-right: 0.3em;
    margin-bottom: 2rem;

    span {
      color: ${(props) => props.theme.primary};
      white-space: nowrap;
    }

    @media (min-width: 800px) {
      text-align: left;
    }

    @media (min-width: 1500px) {
      font-size: 1.75rem;
    }
  `;

  const Img = styled.img`
    display: block;
    margin: auto;
    width: 250px;
    grid-column: -1/1;

    @media (min-width: 800px) {
      grid-column: 2/3;
      width: 300px;
      /* Push to the right */
      margin: auto 0 auto auto;
    }

    @media (min-width: 1000px) {
      margin: ${(props) => props.center && 'auto'};
    }
  `;

  return (
    <BackgroundContainer backgroundColor={backgroundColor}>
      <Container maxWidth={pathname === '/' ? 1400 : 1000}>
        <Footer id='contact'>
          <FooterText>
            Liked my portfolio? <span>Let's talk.</span>
          </FooterText>
          <ContactForm />
          <Img
            src={ContactImage}
            alt='Illustration.'
            center={pathname === '/'}
          />
          <ContactList backgroundColor={backgroundColor} />
        </Footer>
      </Container>
    </BackgroundContainer>
  );
};

export default Footer;
