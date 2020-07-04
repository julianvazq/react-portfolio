import React from 'react';
import styled from 'styled-components';
import Container from './Container';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdEmail, MdPictureAsPdf } from 'react-icons/md';
import { RiExternalLinkLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import ResumePDF from '../docs/julian_vazquez_resume.pdf';
import ContactImage from '../images/illustrations/contact.svg';
import { useLocation } from 'react-router-dom';

const Footer = () => {
  const { pathname } = useLocation();

  const BackgroundContainer = styled.section`
    background: ${(props) => props.background && '#f0f4f6'};
  `;

  const Footer = styled.footer`
    display: flex;
    flex-flow: row wrap;
    margin: 6em 0;
    width: 100%;
    text-align: center;
    justify-content: center;

    a:focus {
      opacity: 0.8;
    }

    @media (max-width: 750px) {
      margin: 3em 0;
    }

    @media (max-width: 580px) {
      flex-direction: column;
    }

    @media (min-width: 1015px) {
      justify-content: flex-start;

      a {
        align-self: flex-start;
      }
    }
  `;

  const FooterText = styled.p`
    max-width: 840px;
    font-size: 2.1rem;
    line-height: 68px;
    letter-spacing: -1px;
    font-weight: 400;
    flex: 0 0 auto;
    padding-right: 0.3em;

    @media (min-width: 850px) {
      font-size: 3rem;
    }
  `;

  const FooterCTA = styled(FooterText)`
    color: ${(props) => props.theme.primary};
    font-weight: 300;
    margin-bottom: 3.5rem;

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    @media (min-width: 1015px) {
      margin-bottom: 0;
    }
  `;

  const Img = styled.img`
    display: block;
    margin: auto;
    width: 250px;

    @media (min-width: 1500px) {
      width: 350px;
    }
  `;

  const ContactList = styled.ul`
    padding-top: 3em;
    list-style: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 1.25rem;
    width: 100%;
    text-align: center;
    max-width: max-content;
    margin: auto;

    a {
      max-width: max-content;
    }

    @media (min-width: 650px) {
      flex-direction: row;
    }

    @media (min-width: 1015px) {
      margin: 0;
    }
  `;

  const ContactItem = styled.li`
    margin-bottom: 1em;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover,
    &:focus {
      opacity: 0.8;
    }

    @media (min-width: 650px) {
      margin-right: 1em;
    }

    @media (min-width: 800px) {
      margin-right: 1.25em;
    }
  `;

  const IconContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: ${(props) => props.theme.primary};
    margin-right: 0.5rem;
    color: #fff;

    @media (min-width: 650px) {
      margin-bottom: 0;
      margin-right: 0.5rem;
    }
  `;

  return (
    <BackgroundContainer background={pathname === '/e-commerce'}>
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
          <Img src={ContactImage} alt='Illustration.' />
          <ContactList>
            <a
              href='https://github.com/julianvazq'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ContactItem>
                <IconContainer>
                  <FiGithub />
                </IconContainer>
                GitHub
              </ContactItem>
            </a>
            <a
              href='https://www.linkedin.com/in/julian-vazquez/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ContactItem>
                <IconContainer>
                  <GrLinkedinOption />
                </IconContainer>
                Linkedin
              </ContactItem>
            </a>
            <a
              href='mailto:julianvazquez101@gmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ContactItem>
                <IconContainer>
                  <MdEmail />
                </IconContainer>
                Email
              </ContactItem>
            </a>
            <a href={ResumePDF} target='_blank' rel='noopener noreferrer'>
              <ContactItem>
                <IconContainer>
                  <MdPictureAsPdf />
                </IconContainer>
                Resume
              </ContactItem>
            </a>
            <a
              href='https://julianvazq.github.io/accessibility-web-explainer/'
              target='_blank'
              rel='noopener noreferrer'
            >
              <ContactItem>
                <IconContainer>
                  <RiExternalLinkLine />
                </IconContainer>
                Accessibility
              </ContactItem>
            </a>
          </ContactList>
        </Footer>
      </Container>
    </BackgroundContainer>
  );
};

export default Footer;
