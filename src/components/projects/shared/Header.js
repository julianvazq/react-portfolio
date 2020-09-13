import React from 'react';
import {
  BackgroundWrapper,
  PaddingWrapper,
  Container,
  LongContainer,
  Title,
  FlexContainer,
  ProjectDescription,
  ButtonContainer,
  Button,
  SecondaryButton,
} from '../../styled-components/StyledComponents';
import PageNav from './PageNav';

const Header = ({ title, description, url, github, navLinks, children }) => {
  return (
    <BackgroundWrapper>
      <PaddingWrapper>
        <Container>
          <LongContainer>
            <Title>{title}</Title>
            <FlexContainer>
              <div>
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
          </LongContainer>
        </Container>
        {children}
      </PaddingWrapper>
    </BackgroundWrapper>
  );
};

export default Header;
