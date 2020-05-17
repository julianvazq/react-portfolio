import styled from 'styled-components';

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
  width: 700px;
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

  @media (max-width: 1100px) {
    width: 90%;
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

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const TechList = styled.ul`
  background: #fff;
  list-style-type: none;
  list-style-position: inside;
  font-size: 1.5rem;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 1em;
  border-radius: 0.3rem;
  padding: 2em;
  box-shadow: 0 5px 15px 0 hsla(0, 0%, 0%, 0.15);

  @media (max-width: 700px) {
    font-size: 1.2rem;
  }
`;

export const ListItem = styled.li`
  padding-bottom: 0.5em;
  border-bottom: 1px solid ${(props) => props.theme.primary};
  line-height: 1.7;
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

export const MarginButton = styled(Button)`
  margin-top: 4em;
`;

export const StyledSpan = styled.span`
  color: hsl(208, 40%, 65%);
`;

export const BackgroundWrapper = styled.main`
  background: ${(props) => props.theme.secondary};
`;

export const PaddingWrapper = styled.section`
  padding: 4em 0;
`;
