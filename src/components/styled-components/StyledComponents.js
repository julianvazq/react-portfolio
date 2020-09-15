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
  margin-bottom: ${(props) => props.hero && '8em'};

  @media (max-width: 450px) {
    padding-bottom: 2em;
  }

  @media (max-width: 800px) {
    margin-bottom: ${(props) => props.hero && '0'};
  }
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
  position: relative;
  display: inline-block;

  @media (max-width: 700px) {
    font-size: 1.25rem;
  }
`;

export const VideoHeading = styled.h3`
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 400;

  @media (max-width: 700px) {
    font-size: 1rem;
  }
`;

export const Video = styled.video`
  margin: auto;
  display: block;
  width: 100%;
  max-height: 700px;
`;

export const ResponsiveImg = styled.img`
  margin: auto;
  display: block;
  max-height: 700px;
  width: ${(props) => !props.iphone && '100%'};

  @media (max-width: 1500px) {
    height: ${(props) => props.iphone && '500px'};
  }

  @media (max-width: 600px) {
    height: ${(props) => props.iphone && '400px'};
  }
`;

export const ProjectDescription = styled.h2`
  letter-spacing: -1.5px;
  line-height: 1.7;
  font-size: 2rem;
  font-weight: 400;
  margin-bottom: 1.5em;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

export const SubHeading = styled.h3`
  margin-bottom: 4rem;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 400;
  color: ${(props) => props.theme.gray};
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -2rem;
    left: 0;
    width: 90px;
    height: 3px;
    background: ${(props) => props.theme.primary};
    border-radius: 1rem;
  }

  @media (max-width: 1700px) {
    font-size: 1.75rem;
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

  @media (max-width: 1700px) {
    font-size: 1.25rem;
  }
`;

export const Example = styled.h3`
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.5rem;

  @media (max-width: 1700px) {
    font-size: 1.25rem;
  }
`;

export const ListTitle = styled.h4`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;

  @media (max-width: 1700px) {
    font-size: 1.25rem;
  }
`;

export const List = styled.ul`
  list-style: none;
  margin-bottom: 1em;
  font-size: 1.5rem;
  line-height: 1.7;

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

  @media (max-width: 1700px) {
    font-size: 1.25rem;
  }
`;

export const OrderedList = styled.ol`
  list-style-position: inside;
  font-size: 1.5rem;
  line-height: 1.7;
  list-style: none;
  counter-reset: my-counter;

  li {
    counter-increment: my-counter;
  }

  li::before {
    content: counter(my-counter) '. ';
    color: ${(props) => props.theme.primary};
    font-weight: 600;
    margin-right: 0.5rem;
  }

  @media (max-width: 1700px) {
    font-size: 1.25rem;
  }
`;

export const TechList = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  font-size: 1.5rem;

  @media (max-width: 1700px) {
    font-size: 1.25rem;
  }
`;

export const ListItem = styled.li`
  padding-bottom: 1em;
  border-radius: 1rem;
  border-bottom: 1px solid hsla(208, 40%, 80%, 0.75);
  padding-left: 1em;
  line-height: 1.7;
  display: flex;
  align-items: center;
  position: relative;
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
  background: hsl(210, 7%, 89%);
  color: hsl(210, 7%, 50%);
`;

export const StyledSpan = styled.span`
  color: hsl(208, 40%, 65%);
`;

export const BackgroundWrapper = styled.section`
  background: ${(props) => props.theme.secondary};
`;

export const PaddingWrapper = styled.section`
  padding: 4rem 0;
  position: relative;
`;
