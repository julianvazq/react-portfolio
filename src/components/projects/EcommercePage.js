import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import EcommerceHome from '../../images/lg/e-commerce-lg.png';
import EcommerceIphone from '../../images/iphone/e-commerce-iphone.png';
import {
  fadeIn,
  ResponsiveImg,
  StyledParagraph,
  TechList,
  ListItem,
  IconContainer,
  Button,
  StyledSpan,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from './shared/Header';
import Section from './shared/Section';

const navLinks = [
  {
    hash: '#design',
    title: 'Design vs. Actual',
  },
  {
    hash: '#editing',
    title: 'Editing',
  },
  {
    hash: '#responsiveness',
    title: 'Mobile First',
  },
  {
    hash: '#accessibility',
    title: 'Accessibility',
  },
  {
    hash: '#tech',
    title: 'Tech Details',
  },
];

const ECommercePage = () => {
  return (
    <motion.div
      variants={fadeIn}
      initial='hidden'
      animate='visible'
      exit='hidden'
    >
      <Header
        title='Mock E-Commerce'
        description=' Mock e-commerce store that exclusively sells headphones and
                    earbuds.'
        url='https://e-commerce.julianvazquez.me'
        github='https://github.com/julianvazq/headphones-ecommerce'
        navLinks={navLinks}
      >
        <ResponsiveImg src={EcommerceHome} alt='Responsive design.' />
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

      <Section title='Editing' id='editing' bg={true}>
        <StyledParagraph>
          Images can make or break a site. Nailing the flat look that I wanted
          meant that I would need headphones images with transparent
          backgrounds. Because of the lack of non-copyrighted images that fit
          what I was looking for, I ended up doing a little editing in{' '}
          <a
            href='https://www.gimp.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GIMP
          </a>
          .
        </StyledParagraph>
        <ResponsiveImg
          src={require('../../images/projects/e-commerce/before-after.png')}
          alt='Before and after edit.'
        />
      </Section>

      <Section title='Mobile First' id='responsiveness'>
        <StyledParagraph>
          Mobile accounts for approximately half of web traffic worldwide. In
          the upcoming decade, mobile web traffic is expected to keep growing,
          making it increasingly important to cater to devices of all sizes.
        </StyledParagraph>
        <ResponsiveImg iphone src={EcommerceIphone} alt='Responsive design.' />
      </Section>

      <Section title='Accessibility' id='accessibility' bg={true}>
        <StyledParagraph>
          The web should be accessible to all. Every page can be accessed using
          keyboard-only navigation, and ARIA labels are included to make it
          compatible with screen-readers. Lastly, I used a handy{' '}
          <a
            href='https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            Chrome extension
          </a>{' '}
          to perform color blindness testing, and added a visible label above
          the color-picker to ensure it's accessible.
        </StyledParagraph>
        <ResponsiveImg
          src={require('../../images/projects/e-commerce/colorblindness.png')}
          alt='Color blindness testing.'
        />
      </Section>

      <Section title='Tech Details' id='tech'>
        <TechList>
          <ListItem>
            <IconContainer>
              <BsDisplayFill />
            </IconContainer>
            <div>
              <StyledSpan>Frontend</StyledSpan>
              <br /> React (NextJS), Styled Components (CSS)
            </div>
          </ListItem>
          <ListItem>
            <IconContainer>
              <FaServer />
            </IconContainer>
            <div>
              <StyledSpan>Backend</StyledSpan>
              <br /> Node, Express
            </div>
          </ListItem>
          <ListItem>
            <IconContainer>
              <BsThreeDots />
            </IconContainer>
            <div>
              <StyledSpan>Others</StyledSpan>
              <br /> React Hooks, React Context, Dynamic Routes
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

export default ECommercePage;
