import React from 'react';
import EcommerceHome from '../../images/lg/e-commerce-lg.png';
import EcommerceResponsive from '../../images/iphone/e-commerce-responsive2.png';
import {
  fadeIn,
  ResponsiveImg,
  StyledParagraph,
  TechList,
  ListItem,
  IconContainer,
  StyledSpan,
} from '../styled-components/StyledComponents';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Header from './shared/Header';
import Section from './shared/Section';
import BackButton from './shared/BackButton';
import styled from 'styled-components';

const NextJS = styled(ResponsiveImg)`
  max-height: 100px;

  @media (min-width: 800px) {
    max-height: 150px;
  }
`;

const navLinks = [
  {
    hash: '#design',
    title: 'Design',
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
    hash: '#architecture',
    title: 'Architecture',
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
        title='E-Commerce Store'
        description='Stylish mock headphones and earbuds e-commerce store. Try making a purchase and see what happens...'
        url='https://e-commerce.julianvaz.com'
        github='https://github.com/julianvazq/headphones-ecommerce'
        navLinks={navLinks}
      >
        <ResponsiveImg src={EcommerceHome} alt='Responsive design.' />
      </Header>

      <Section title='Design' id='design'>
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
            . Throughout the prototyping phase I actually changed the original
            design quite a bit. In the end I went with a mostly flat and
            minimalistic aesthetic, plenty of white space and an eye-catching
            primary color.
          </StyledParagraph>
          <StyledParagraph>
            To compliment the look, I chose two modern sans-serif fonts that go
            well together (Oswald &amp; Open Sans), and implemented a few smooth
            animations with{' '}
            <a
              href='https://www.framer.com/motion/'
              target='_blank'
              rel='noopener noreferrer'
            >
              Framer Motion
            </a>
            .
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

      <Section title='Editing' id='editing' bg>
        <StyledParagraph>
          Images can make or break a site. Nailing the overall look that I
          wanted meant that I would need headphone images with transparent
          backgrounds. Because of the lack of royalty-free images that fit my
          requirements, I reached for{' '}
          <a
            href='https://www.gimp.org/'
            target='_blank'
            rel='noopener noreferrer'
          >
            GIMP
          </a>{' '}
          to do some light editing .
        </StyledParagraph>
        <ResponsiveImg
          src={require('../../images/projects/e-commerce/before-after.png')}
          alt='Before and after edit.'
        />
      </Section>

      <Section title='Mobile First' id='responsiveness'>
        <StyledParagraph>
          Designing and prototyping websites for mobile first helps ensure that
          the user experience is seamless on any device. Because mobile designs
          are typically simpler, taking a mobile first approach allows for
          progressively adding more complexity as the device size increases.
        </StyledParagraph>
        <ResponsiveImg
          iphone
          src={EcommerceResponsive}
          alt='Responsive design.'
        />
      </Section>

      <Section title='Accessibility' id='accessibility' bg>
        <StyledParagraph>
          The web should be accessible to all. Every page of this site can be
          accessed using keyboard-only navigation, and ARIA labels are included
          to make it compatible with screen-readers. Additionally, I used a
          handy{' '}
          <a
            href='https://chrome.google.com/webstore/detail/colorblinding/dgbgleaofjainknadoffbjkclicbbgaa?hl=en'
            target='_blank'
            rel='noopener noreferrer'
          >
            Chrome extension
          </a>{' '}
          to perform color blindness testing, and implemented a readable label
          above the headphone's color-picker to ensure it's fully accessible.
        </StyledParagraph>
        <ResponsiveImg
          src={require('../../images/projects/e-commerce/colorblindness.png')}
          alt='Color blindness testing.'
        />
      </Section>

      <Section title='Architecture' id='architecture'>
        <div>
          <StyledParagraph>
            This website was built with{' '}
            <a
              href='https://nextjs.org/'
              target='_blank'
              rel='noopener noreferrer'
            >
              NextJS
            </a>
            , a modern React framework.
          </StyledParagraph>
          <StyledParagraph>
            Next offers server-side rendering out of the box, which means that
            as opposed to client-side rendering, the browser actually receives
            HTML documents instead of a bunch of JavaScript bundles. Because
            browsers are inherently fast at rendering HTML, server-side
            rendering allows for faster websites and better performance while
            also using less bandwidth (great for mobile users).
          </StyledParagraph>
          <StyledParagraph>
            As a bonus, search engines are better at indexing HTML than
            single-page-applications (SPAs), meaning that server-side rendering
            provides improved search engine optimization (SEO) by default, no
            additional effort required.
          </StyledParagraph>
        </div>
        <NextJS
          src={require('../../images/projects/e-commerce/nextjs-logo.svg')}
          alt='Responsive design.'
        />
      </Section>

      <Section title='Tech Details' id='tech' bg>
        <TechList>
          <ListItem>
            <IconContainer>
              <BsDisplayFill />
            </IconContainer>
            <div>
              <StyledSpan>Frontend</StyledSpan>
              <br /> NextJS (React), Styled Components (CSS)
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
        <BackButton />
      </Section>
    </motion.div>
  );
};

export default ECommercePage;
