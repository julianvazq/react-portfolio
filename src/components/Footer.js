import React from 'react';
import styled from 'styled-components';
import Container from './Container';

const Footer = () => {
  const Footer = styled.div`
    display: flex;
    flex-flow: row wrap;
    margin: 6em 0;
    width: 100%;

    @media (max-width: 580px) {
      flex-direction: column;
    }
  `;

  const FooterText = styled.h2`
    max-width: 840px;
    font-size: 3.3rem;
    line-height: 68px;
    letter-spacing: -1px;
    font-weight: 400;
    flex: 0 0 auto;
    padding-right: 0.3em;

    @media (max-width: 850px) {
      font-size: 2.3rem;
    }

    @media (max-width: 580px) {
      margin-bottom: 1em;
    }
  `;

  const FooterCTA = styled(FooterText)`
    color: ${props => props.theme.primary};
    font-weight: 300;

    &:hover {
      opacity: 0.8;
    }
  `;

  const ContactList = styled.ul`
    margin-top: 3em;
    list-style: none;
    display: flex;
    font-size: 1.5rem;
    width: 100%;
    text-align: left;

    @media (max-width: 580px) {
      margin-top: 1em;
      flex-direction: column;
    }
  `;

  const ContactItem = styled.li`
    margin-right: 1em;

    &:hover {
      opacity: 0.8;
    }

    @media (max-width: 580px) {
      margin-bottom: 1em;
    }
  `;

  return (
    <Container>
      <Footer id='contact'>
        <FooterText>Liked my portfolio?</FooterText>
        <a
          href='mailto:julianvazquez101@gmail.com'
          target='_blank'
          rel='noopener noreferrer'
        >
          <FooterCTA>Let's talk.</FooterCTA>
        </a>
        <ContactList>
          <a
            href='https://github.com/julianvazq'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ContactItem>GitHub</ContactItem>
          </a>
          <a
            href='https://www.linkedin.com/in/julian-vazquez/'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ContactItem>LinkedIn</ContactItem>
          </a>
          <a
            href='mailto:julianvazquez101@gmail.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            <ContactItem>Email</ContactItem>
          </a>
        </ContactList>
      </Footer>
    </Container>
  );
};

export default Footer;
