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
    width: 125%;
    height: 2px;
    background: linear-gradient(
      90deg,
      hsl(210, 7%, 89%),
      80%,
      rgba(255, 255, 255, 0)
    );
  }

  @media (min-width: 800px) {
    margin: 6rem 0 0;

    &:before {
      width: 85%;
      background: linear-gradient(
        90deg,
        hsl(210, 7%, 89%),
        40%,
        rgba(255, 255, 255, 0)
      );
    }
  }
`;

const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-flow: column;
  grid-column-gap: 0.5rem;
  list-style: none;
  font-size: 1rem;
  text-align: center;
  max-width: max-content;
  margin: auto;
  position: relative;

  a {
    max-width: max-content;
  }

  @media (min-width: 650px) {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }

  @media (min-width: 800px) {
    max-width: none;
    justify-content: flex-start;
  }
`;

const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 45px;
  height: 45px;
  font-size: 1.25rem;
  color: #fff;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  border: 1px solid ${(props) => props.theme.primary};
  margin-right: 0.5rem;
  transition: all 200ms ease-out;

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
  margin-bottom: 1rem;
  grid-column: ${(props) => props.column};

  &:hover ${IconContainer}, &:focus ${IconContainer} {
    background: #f5f5f5;
    color: ${(props) => props.theme.primary};
    border: 1px solid rgba(0, 0, 0, 0.2);
  }

  @media (min-width: 650px) {
    margin-right: 1rem;
  }

  @media (min-width: 800px) {
    margin-right: 1.25rem;
  }
`;

const ContactList = () => {
  return (
    <ListContainer>
      <List>
        <Anchor
          href='https://github.com/julianvazq'
          target='_blank'
          rel='noopener noreferrer'
          column={1}
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
          column={1}
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
          column={1}
        >
          <ContactItem>
            <IconContainer>
              <MdEmail />
            </IconContainer>
            Email
          </ContactItem>
        </Anchor>
        <Anchor
          href={ResumePDF}
          target='_blank'
          rel='noopener noreferrer'
          column={2}
        >
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
          column={2}
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
