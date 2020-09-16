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
  Example,
  OrderedList,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer, FaDatabase, FaNodeJs, FaReact } from 'react-icons/fa';
import { DiPostgresql } from 'react-icons/di';
import { motion } from 'framer-motion';
import Header from './shared/Header';
import Section from './shared/Section';
import styled, { css } from 'styled-components';

const IconStyles = css`
  font-size: 3rem;
  margin-right: 0.5rem;

  @media (max-width: 1700px) {
    font-size: 2rem;
  }
`;

const ReactIcon = styled(FaReact)`
  ${IconStyles};
  color: #61dafb;
`;

const NodeIcon = styled(FaNodeJs)`
  ${IconStyles};
  color: #3c873a;
`;

const PostgreIcon = styled(DiPostgresql)`
  ${IconStyles};
  color: #336791;
`;

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
            maintain constant communication between clients and server, allowing
            all members of a list to experience a "real-time" concurrent
            experience.
          </StyledParagraph>
        </div>
        <ResponsiveImg
          src={require('../../images/projects/listify/architecture.png')}
          alt='Architecture diagram.'
        />
        <div>
          <StyledParagraph>
            The "hub" of the application, as pictured in the diagram above, is a
            NodeJS (Express) server. This is where the logic that drives the
            application lives, and it is the layer through which all
            interactions among users, as well as with the database, take place.
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
        <ResponsiveImg
          src={require('../../images/projects/listify/erd.png')}
          alt='Entity Relationship Diagram.'
        />
        <div>
          <StyledParagraph>
            Given the above constraints, there were three clear tables that make
            themselves apparent: lists, users and items. Lastly, a join table
            named "memberships" helps handle the many-to-many relationship
            between users and lists, while making it easy to keep track of the
            users that are members of each list.
          </StyledParagraph>
        </div>
        <div>
          <Example>
            Example interaction: <span>User adds a new item to a list</span>
          </Example>
          <OrderedList>
            <li>
              <span>
                <ReactIcon />
                React{' '}
              </span>
              <span>Client sends request to the server with item data</span>
            </li>
            <li>
              <span>
                <NodeIcon />
                NodeJS
              </span>
              <span>
                Server handles the request and communicates with the database{' '}
              </span>
            </li>
            <li>
              <span>
                <PostgreIcon />
                PostgreSQL
              </span>
              <span>
                Database executes an INSERT statement, storing the new item
              </span>
            </li>
            <li>
              <span>
                <NodeIcon />
                NodeJS
              </span>
              <span>Server sends the new item to all the other clients</span>
            </li>
            <li>
              <span>
                <ReactIcon />
                React{' '}
              </span>
              <span>Clients receive the new item data and update the list</span>
            </li>
          </OrderedList>
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
