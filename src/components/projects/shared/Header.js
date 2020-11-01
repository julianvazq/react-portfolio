import React from 'react';
import { RiExternalLinkLine } from 'react-icons/ri';
import { FiGithub } from 'react-icons/fi';
import {
  BackgroundWrapper,
  ButtonContainer,
  Button,
  SecondaryButton,
} from '../../styled-components/StyledComponents';
import PageNav from './PageNav';
import styled from 'styled-components';

const HeaderContainer = styled.div`
  margin: auto;
  width: 90%;
  max-width: 1000px;
  padding: 4rem 0;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 4rem;

  div:first-child {
    width: 70%;
  }

  @media (max-width: 800px) {
    flex-direction: column;

    div:first-child {
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    padding-bottom: 2rem;
  }
`;

const ProjectDescription = styled.h2`
  letter-spacing: -1.5px;
  line-height: 1.7;
  font-size: 1.75rem;
  font-weight: 400;
  margin-bottom: 1.5rem;

  @media (max-width: 700px) {
    font-size: 1.5rem;
  }
`;

const Title = styled.h1`
  margin-bottom: 1em;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-size: 1.25rem;
  font-weight: 300;
  position: relative;
  display: inline-block;

  @media (max-width: 700px) {
    font-size: 1.25rem;
  }
`;

const WebsiteButton = styled(Button)`
  margin-top: 0.5rem;
`;

const GithubButton = styled(SecondaryButton)`
  margin-top: 0.5rem;
`;

const LinkIcon = styled(RiExternalLinkLine)`
  margin-left: 0.5rem;
`;

const GithubIcon = styled(FiGithub)`
  margin-left: 0.5rem;
  color: hsl(210, 7%, 55%);
`;

const Header = ({ title, description, url, github, navLinks, children }) => {
  return (
    <BackgroundWrapper>
      <HeaderContainer>
        <FlexContainer>
          <div>
            <Title>{title}</Title>
            <ProjectDescription>{description}</ProjectDescription>
            <ButtonContainer>
              <WebsiteButton
                href={url}
                target='_blank'
                rel='noopener noreferrer'
              >
                Go to website <LinkIcon />
              </WebsiteButton>
              <GithubButton
                href={github}
                target='_blank'
                rel='noopener noreferrer'
              >
                Go to GitHub <GithubIcon />
              </GithubButton>
            </ButtonContainer>
          </div>
          <PageNav navLinks={navLinks} />
        </FlexContainer>
        {children}
      </HeaderContainer>
    </BackgroundWrapper>
  );
};

export default Header;
