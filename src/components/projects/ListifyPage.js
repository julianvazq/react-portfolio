import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ListifyHome from '../../images/lg/listify-lg.png';
import ListifyIphone from '../../images/iphone/listify-iphone.png';
import {
  fadeIn,
  ResponsiveImg,
  StyledParagraph,
  ListTitle,
  List,
  TechList,
  ListItem,
  IconContainer,
  StyledSpan,
  Button,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from './shared/Header';
import Section from './shared/Section';

const navLinks = [
  {
    hash: '#design',
    title: 'Design vs. Actual',
  },
  {
    hash: '#responsiveness',
    title: 'Mobile First',
  },
  {
    hash: '#architecture',
    title: 'Architecture',
  },
  {
    hash: '#tech',
    title: 'Tech Details',
  },
];

const ListifyPage = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header
        title='Listify'
        description='Real-time, collaborative lists to share with others.'
        url='http://listify.julianvazquez.me/'
        github='https://github.com/julianvazq/listify'
        navLinks={navLinks}
      >
        <ResponsiveImg src={ListifyHome} alt='Responsive design.' />
      </Header>

      <Section title='Design vs. Actual' id='design'>
        <div>
          <StyledParagraph>
            I already had a design in mind, so I started off by creating a
            high-fidelity wireframe in{' '}
            <a
              href='https://www.figma.com/file/OR9WLOXwJJ6IHV3IbO5W2w/Headphones-E-Commerce?node-id=0%3A1'
              target='_blank'
              rel='noopener noreferrer'
            >
              Figma
            </a>
            . I went for a flat and modern aesthetic, with plenty of white space
            and an eye-catching primary color.
          </StyledParagraph>
          <StyledParagraph>
            To compliment the look, I chose fitting sans-serif fonts that pair
            well together (Oswald &amp; Open Sans), and added a few smooth
            animations.
          </StyledParagraph>
        </div>
        <ResponsiveImg
          src={require('../../images/projects/e-commerce/figma-vs-actual-1.png')}
          alt='Figma design vs. actual website.'
        />
        <ResponsiveImg
          src={require('../../images/projects/e-commerce/figma-vs-actual-2.png')}
          alt='Figma design vs. actual website.'
        />
      </Section>

      <Section title='Mobile First' id='responsiveness' bg={true}>
        <StyledParagraph>
          Mobile accounts for approximately half of web traffic worldwide. In
          the upcoming decade, mobile web traffic is expected to keep growing,
          making it increasingly important to cater to devices of all sizes.
        </StyledParagraph>
        <ResponsiveImg iphone src={ListifyIphone} alt='Responsive design.' />
      </Section>

      <Section title='Architecture' id='architecture'>
        <div>
          <StyledParagraph>
            The software architecture of Listify leverages web sockets to
            maintain constant communication between clients and the server,
            allowing for nearly instant updates to lists.
          </StyledParagraph>
        </div>
        <ResponsiveImg
          src={require('../../images/projects/listify/architecture.png')}
          alt='Architecture diagram.'
          style={{ marginBottom: '4em' }}
        />
        <div>
          <StyledParagraph>
            The "hub" of the application, as seen in the diagram above, is an
            Express server. It is in charge of the communication among clients
            and the interactions with the database.
          </StyledParagraph>
          <StyledParagraph>
            Example interaction: a user adds an item to a list.
          </StyledParagraph>
          <StyledParagraph>
            For storage, the application uses PostgreSQL. When designing the
            database model, the main constraints were:
          </StyledParagraph>
          <ListTitle>User</ListTitle>
          <List>
            <li>
              A user can be a member of <span>many</span> lists
            </li>
            <li>
              A user can create <span>many</span> list items
            </li>
          </List>
          <ListTitle>List</ListTitle>
          <List>
            <li>
              A list can have <span>many</span> users
            </li>
            <li>
              A list can have <span>many</span> items
            </li>
          </List>
        </div>
      </Section>

      <Section title='Tech Details' id='tech' bg={true}>
        <TechList>
          <ListItem>
            <IconContainer>
              <BsDisplayFill />
            </IconContainer>
            <div>
              <StyledSpan>Frontend</StyledSpan>
              <br /> React, TypeScript, Styled Components (CSS)
            </div>
          </ListItem>
          <ListItem>
            <IconContainer>
              <FaServer />
            </IconContainer>
            <div>
              <StyledSpan>Backend</StyledSpan>
              <br /> Web Sockets, Node, Express
            </div>
          </ListItem>
          <ListItem>
            <IconContainer>
              <FaDatabase />
            </IconContainer>
            <div>
              <StyledSpan>Database</StyledSpan>
              <br /> PostgreSQL
            </div>
          </ListItem>
          <ListItem>
            <IconContainer>
              <BsThreeDots />
            </IconContainer>
            <div>
              <StyledSpan>Others</StyledSpan>
              <br /> React Hooks, React Context
            </div>
          </ListItem>
        </TechList>
        <Button as={Link} to='/#projects'>
          Back to projects
        </Button>
      </Section>
    </motion.div>
  );
};

export default ListifyPage;
