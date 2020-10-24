import React from 'react';
import {
  BackgroundWrapper,
  Title,
  ProjectDescription,
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

const Header = ({ title, description, url, github, navLinks, children }) => {
  return (
    <BackgroundWrapper>
      <HeaderContainer>
        <FlexContainer>
          <div>
            <Title>{title}</Title>
            <ProjectDescription>{description}</ProjectDescription>
            <ButtonContainer>
              <Button href={url} target='_blank' rel='noopener noreferrer'>
                Go to website
              </Button>
              <SecondaryButton
                href={github}
                target='_blank'
                rel='noopener noreferrer'
              >
                Go to GitHub
              </SecondaryButton>
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
