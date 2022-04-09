import React from 'react';
import { FiGithub } from 'react-icons/fi';
import { RiExternalLinkLine } from 'react-icons/ri';
import styled, { css } from 'styled-components';
import {
    BackgroundWrapper,
    Button,
    SecondaryButton,
} from '../../styled-components/StyledComponents';
import PageNav from './PageNav';

const HeaderContainer = styled.section`
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
    font-family: 'Work Sans', 'Helvetica', sans-serif;
    font-style: italic;
    letter-spacing: -1.5px;
    line-height: 1.7;
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 2rem;

    @media (max-width: 700px) {
        font-size: 1.5rem;
    }
`;

const Title = styled.h1`
    font-family: 'Work Sans', 'Helvetica', sans-serif;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 1.75rem;
    margin-bottom: 3rem;
    position: relative;
    display: inline-block;

    &:after {
        content: '';
        position: absolute;
        bottom: -1.5rem;
        left: 0;
        width: 100%;
        height: 3px;
        background: linear-gradient(
            90deg,
            rgba(96, 176, 244, 1),
            rgba(255, 255, 255, 0)
        );
        border-radius: 1rem;
    }
`;

export const ButtonContainer = styled.div`
    display: flex;
    flex-wrap: wrap;

    & > a:first-child {
        margin-right: 1.5rem;
    }
`;

const buttonStyling = css`
    margin-top: 1rem;
    width: 227px;
    display: inline-flex;
    align-items: center;

    @media (min-width: 700px) {
        width: 245px;
    }
`;

const WebsiteButton = styled(Button)`
    ${buttonStyling}
`;

const GithubButton = styled(SecondaryButton)`
    ${buttonStyling}
`;

const LinkIcon = styled(RiExternalLinkLine)`
    margin-left: auto;
`;

const GithubIcon = styled(FiGithub)`
    margin-left: auto;
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
