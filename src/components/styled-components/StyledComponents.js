import styled from 'styled-components';

export const fadeIn = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.75,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const fadeInFromRight = {
  hidden: {
    opacity: 0,
    x: 100,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.75,
      type: 'spring',
      damping: 20,
    },
  },
  exit: {
    opacity: 0,
  },
};

export const Container = styled.div`
  max-width: 1400px;
  width: 90%;
  display: flex;
  align-items: center;
  margin: auto;
  flex-flow: row wrap;
  padding-bottom: 4em;

  @media (max-width: 450px) {
    padding-bottom: 2em;
  }
`;

export const InnerContainer = styled.div`
  margin: auto;
  max-width: 700px;
`;

export const LongContainer = styled.div`
  margin: auto;
  width: 100%;
  max-width: 1000px;
`;

export const Title = styled.h1`
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 300;
`;

export const VideoHeading = styled.h3`
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 300;

  @media (max-width: 850px) {
    /* text-align: center; */
  }

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const Video = styled.video`
  margin: auto;
  display: block;
  width: 80%;
  max-height: 700px;

  @media (max-width: 1100px) {
    width: 90%;
  }
`;

export const ResponsiveImg = styled.img`
  margin: auto;
  display: block;
  max-height: 700px;

  @media (max-width: 600px) {
    height: ${(props) => props.iphone && '400px'};
  }

  @media (max-width: 1100px) {
    width: ${(props) => !props.iphone && '90%'};
    max-width: 100%;
  }

  @media (max-width: 1500px) {
    height: ${(props) => props.iphone && '500px'};
  }
`;

export const ProjectDescription = styled.h2`
  letter-spacing: -1.5px;
  line-height: 1.7;
  font-size: 2.1rem;
  font-weight: 400;
  margin-bottom: 1.5em;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const SubHeading = styled.h3`
  margin-bottom: 2em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  color: ${(props) => props.theme.gray};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -80%;
    left: 0;
    width: 20%;
    height: 3px;
    background: ${(props) => props.theme.primary};
  }

  @media (max-width: 750px) {
    font-size: 1.5rem;
  }
`;

export const StyledParagraph = styled.p`
  font-size: 1.5rem;
  line-height: 1.7;

  a {
    color: ${(props) => props.theme.primary};
  }

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const TechList = styled.ul`
  list-style-type: none;
  list-style-position: inside;
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  border-radius: 0.3rem;
  padding-top: 2em;

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const ListItem = styled.li`
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  line-height: 1.7;
  display: flex;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 40px;
  min-height: 40px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  margin-right: 2rem;
  color: #fff;

  svg {
    font-size: 1.25rem;
  }

  @media (min-width: 600px) {
    min-width: 50px;
    min-height: 50px;
  }

  @media (min-width: 800px) {
    svg {
      font-size: 1.75rem;
    }
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.a`
  display: inline-block;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.5rem;
  font-weight: 400;
  background: ${(props) => props.theme.primary};
  color: #fff;
  padding: 0.5em 0.8em;
  font-family: inherit;
  border-radius: 0.3rem;
  cursor: pointer;
  margin-right: 1em;
  box-shadow: 0 1px 3px hsla(0, 0%, 0%, 0.2);

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }

  @media (max-width: 460px) {
    margin-bottom: 1em;
  }
`;

export const SecondaryButton = styled(Button)`
  background: #949393;
`;

export const MarginButton = styled(Button)`
  margin-top: 4em;
`;

export const StyledSpan = styled.span`
  color: hsl(208, 40%, 65%);
`;

export const BackgroundWrapper = styled.section`
  background: ${(props) => props.theme.secondary};
`;

export const PaddingWrapper = styled.section`
  padding: 4em 0;
  position: relative;
`;
