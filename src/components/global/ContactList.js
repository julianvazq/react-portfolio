import React from 'react';
import styled from 'styled-components';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdEmail, MdPictureAsPdf } from 'react-icons/md';
import { RiExternalLinkLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import ResumePDF from '../../docs/julian_vazquez_resume.pdf';

const List = styled.div`
  grid-column: -1/1;
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

  @media (min-width: 800px) {
    margin: 0;
  }
`;

const ContactItem = styled.div`
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

const ContactList = () => {
  return (
    <List>
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
    </List>
  );
};

export default ContactList;
