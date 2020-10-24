import React from 'react';
import styled from 'styled-components';
import { GrLinkedinOption } from 'react-icons/gr';
import { MdEmail, MdPictureAsPdf } from 'react-icons/md';
import { RiExternalLinkLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import ResumePDF from '../../docs/julian_vazquez_resume.pdf';

const ListContainer = styled.div`
  grid-column: -1/1;
  width: 100%;
  margin: 6rem auto 0 auto;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: -3rem;
    left: 0;
    width: 100%;
    height: 1px;
    background: ${(props) =>
      `linear-gradient(to right, #e0e0e0, ${props.backgroundColor})`};
    border-radius: 0.3rem;
  }

  @media (min-width: 800px) {
    margin: 6rem 0 0;

    &:before {
      width: 80%;
    }
  }

  @media (min-width: 1500px) {
    &:before {
      width: 65%;
    }
  }
`;

const List = styled.div`
  /* grid-column: -1/1; */
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
  font-size: 1.25rem;
  /* width: 100%; */
  text-align: center;
  max-width: max-content;
  /* margin: 6rem auto 0 auto; */
  margin: auto;
  position: relative;

  a {
    max-width: max-content;
  }

  /* &::before {
    content: '';
    position: absolute;
    top: -2rem;
    width: 100%;
    height: 1px;
    background: ${(props) =>
    `linear-gradient(to right, #e7e7e9, ${props.backgroundColor})`};
  } */

  @media (min-width: 650px) {
    flex-direction: row;
  }

  @media (min-width: 800px) {
    /* margin: 6rem 0 0; */
    max-width: none;
    justify-content: flex-start;
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
  border: 1px solid ${(props) => props.theme.primary};
  margin-right: 0.5rem;
  transition: all 200ms ease-out;
  color: #fff;

  @media (min-width: 650px) {
    margin-bottom: 0;
    margin-right: 0.5rem;
  }
`;

const ContactItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Anchor = styled.a`
  margin-bottom: 1em;

  &:hover ${IconContainer}, &:focus ${IconContainer} {
    background: #f5f5f5;
    color: ${(props) => props.theme.primary};
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 650px) {
    margin-right: 1em;
  }

  @media (min-width: 800px) {
    margin-right: 1.25em;
  }
`;

const ContactList = ({ backgroundColor }) => {
  return (
    <ListContainer backgroundColor={backgroundColor}>
      <List>
        <Anchor
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
        </Anchor>
        <Anchor
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
        </Anchor>
        <Anchor
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
        </Anchor>
        <Anchor href={ResumePDF} target='_blank' rel='noopener noreferrer'>
          <ContactItem>
            <IconContainer>
              <MdPictureAsPdf />
            </IconContainer>
            Resume
          </ContactItem>
        </Anchor>
        <Anchor
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
        </Anchor>
      </List>
    </ListContainer>
  );
};

export default ContactList;
