import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import ListifyHome from '../../images/lg/listify-lg.png';
import ListifyIphone from '../../images/iphone/listify-iphone.png';
import {
  fadeIn,
  Container,
  FlexContainer,
  Title,
  ProjectDescription,
  ResponsiveImg,
  SubHeading,
  StyledParagraph,
  TechList,
  ListItem,
  IconContainer,
  ButtonContainer,
  Button,
  SecondaryButton,
  MarginButton,
  StyledSpan,
  BackgroundWrapper,
  PaddingWrapper,
  LongContainer,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import PageNav from './shared/PageNav';

const StackedImg = styled(ResponsiveImg)`
  &:first-of-type {
    margin-bottom: 4em;
  }
`;

const List = styled.ul`
  list-style: none;
  margin-bottom: 1em;

  li {
    margin-left: 1.5rem;
    position: relative;

    span {
      font-style: italic;
    }
  }

  li:before {
    content: '';
    position: absolute;
    left: -1.5rem;
    top: 50%;
    background: ${(props) => props.theme.primary};
    height: 5px;
    width: 5px;
    border-radius: 50%;
  }
`;

const ListTitle = styled.h3`
  margin-top: 1em;
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
      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <LongContainer>
              <Title>Listify</Title>
              <FlexContainer>
                <div>
                  <ProjectDescription>
                    Real-time, collaborative lists to share with others.
                  </ProjectDescription>
                  <ButtonContainer>
                    <Button
                      href='http://listify.julianvazquez.me/'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Go to website
                    </Button>
                    <SecondaryButton
                      href='https://github.com/julianvazq/listify'
                      target='_blank'
                      rel='noopener noreferrer'
                    >
                      Go to GitHub
                    </SecondaryButton>
                  </ButtonContainer>
                </div>
                <PageNav navLinks={navLinks} />
              </FlexContainer>
            </LongContainer>
          </Container>

          <ResponsiveImg src={ListifyHome} alt='Responsive design.' />
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <LongContainer>
            <SubHeading id='design'>Design vs. Actual</SubHeading>
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
              . I went for a flat and modern aesthetic, with plenty of white
              space and an eye-catching primary color.
            </StyledParagraph>
            <StyledParagraph style={{ marginTop: '1em' }}>
              To compliment the look, I chose fitting sans-serif fonts that pair
              well together (Oswald &amp; Open Sans), and added a few smooth
              animations.
            </StyledParagraph>
          </LongContainer>
        </Container>
        <StackedImg
          src={require('../../images/figma-vs-actual-1.png')}
          alt='Figma design vs. actual website.'
        />
        <StackedImg
          src={require('../../images/figma-vs-actual-2.png')}
          alt='Figma design vs. actual website.'
        />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <LongContainer>
              <SubHeading id='responsiveness'>Mobile First</SubHeading>
              <StyledParagraph>
                Mobile accounts for approximately half of web traffic worldwide.
                In the upcoming decade, mobile web traffic is expected to keep
                growing, making it increasingly important to cater to devices of
                all sizes.
              </StyledParagraph>
            </LongContainer>
          </Container>
          <ResponsiveImg iphone src={ListifyIphone} alt='Responsive design.' />
        </PaddingWrapper>
      </BackgroundWrapper>

      <PaddingWrapper>
        <Container>
          <LongContainer>
            <SubHeading id='architecture'>Architecture</SubHeading>
            <StyledParagraph>
              The software architecture of Listify leverages web sockets to
              maintain constant communication between clients and the server,
              allowing for nearly instant updates to lists.
            </StyledParagraph>
          </LongContainer>
        </Container>
        <ResponsiveImg
          src={require('../../images/listify/architecture.png')}
          alt='Architecture diagram.'
          style={{ marginBottom: '4em' }}
        />
        <Container>
          <LongContainer>
            <StyledParagraph style={{ marginBottom: '2em' }}>
              The "hub" of the application, as seen in the diagram above, is an
              Express server. It is in charge of the communication among clients
              and the interactions with the database.
            </StyledParagraph>
            <StyledParagraph>
              {' '}
              For storage, the application uses PostgreSQL. When designing the
              database model, the main constraints were:
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
            </StyledParagraph>
          </LongContainer>
        </Container>
        <ResponsiveImg
          src={require('../../images/listify/erd.png')}
          alt='Entity Relationship Diagram.'
          style={{ marginBottom: '4em' }}
        />
      </PaddingWrapper>

      <BackgroundWrapper>
        <PaddingWrapper>
          <Container>
            <LongContainer>
              <SubHeading id='tech'>Tech Details</SubHeading>
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
              <MarginButton as={Link} to='/#projects'>
                Back to projects
              </MarginButton>
            </LongContainer>
          </Container>
        </PaddingWrapper>
      </BackgroundWrapper>
    </motion.div>
  );
};

export default ListifyPage;
