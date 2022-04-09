import { motion } from 'framer-motion';
import React from 'react';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';
import { IoIosArrowDown } from 'react-icons/io';
import styled, { css, keyframes } from 'styled-components';
import CoverImage from '../../images/illustrations/cover-image.svg';
import { Button, fadeInFromRight } from '../styled-components/StyledComponents';

const fadeInFromBottom = {
    hidden: { opacity: 0 },
    show: {
        opacity: 1,
        transition: {
            staggerChildren: 0.3,
            ease: 'easeOut',
        },
    },
};

const fadeUpVariant = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    show: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.75,
            ease: 'easeOut',
        },
    },
};

const fadeInVariant = {
    hidden: {
        opacity: 0,
    },
    show: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 1.5,
        },
    },
};

const expandFromLeft = keyframes`
  0% {
    transform: scaleX(0);
    visibility: visible;
  }
  100% {
    transform: scaleX(1);
    visibility: visible;
  }
`;

const OuterContainer = styled.section`
    position: relative;

    &:after {
        content: '';
        position: absolute;
        right: 0;
        bottom: 0;
        width: 0;
        height: 0;
        border-style: solid;
        border-width: 0 0 500px 75vw;
        border-color: transparent transparent hsl(200 20% 98% / 0.75)
            transparent;
        z-index: -1;
    }
`;

const HeroContainer = styled.div`
    width: 90%;
    max-width: 1400px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 4rem 0;

    @media screen and (min-width: 800px) {
        flex-direction: row;
        justify-content: space-between;
        padding: 6rem 0 8rem 0;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    z-index: 1;

    @media screen and (min-width: 800px) {
        align-items: flex-start;
        text-align: left;
        order: -1;
    }
`;

const Illustration = styled(motion.img)`
    display: block;
    width: 250px;
    margin-bottom: 4rem;
    z-index: 0;

    @media screen and (min-width: 600px) {
        width: 350px;
    }

    @media screen and (min-width: 800px) {
        width: 400px;
        margin: 0;
    }

    @media screen and (min-width: 1000px) {
        width: 550px;
    }

    @media screen and (min-width: 1800px) {
        width: 650px;
    }
`;

const Details = styled.div`
    margin: 4rem 0;
    text-align: left;
`;

const Name = styled.p`
    font-family: 'Work Sans', 'Helvetica', sans-serif;
    font-size: 1.75rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    text-align: center;

    @media (min-width: 800px) {
        text-align: left;
    }
`;

const Position = styled.h2`
    font-family: 'Work Sans', 'Helvetica', sans-serif;
    font-weight: 600;
    text-transform: uppercase;
    font-size: 1rem;
    letter-spacing: 1px;
    color: hsl(0deg 0% 40%);
    line-height: 1.2;
    display: flex;
    align-items: center;

    @media (max-width: 580px) {
        line-height: 1.25;
    }
`;

const HeadingContainer = styled(motion.div)`
    position: relative;
`;

const Heading = styled.h1`
    font-size: 3.3rem;
    line-height: 1.4;
    letter-spacing: -1px;
    color: ${(props) => props.theme.primary};
    margin-bottom: 1rem;
    width: 100%;
    font-weight: 500;
    text-transform: capitalize;
    font-family: 'Work Sans', 'Helvetica', sans-serif;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    z-index: 3;

    @media (min-width: 800px) {
        justify-content: flex-start;
    }
`;

const StyledText = styled(motion.span)`
    font-weight: 700;
    font-style: italic;
    color: #5d5d5d;
    letter-spacing: 1px;
    position: relative;
    display: inline-block;
    transform-origin: right;
    align-self: center;
    margin-bottom: 1rem;

    &:after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 110%;
        height: 3px;
        background: linear-gradient(90deg, rgba(96, 176, 244, 1), 80%, #fff);
        border-radius: 1rem;
        visibility: hidden;
        animation: 1s 0.2s ${expandFromLeft} ease-in;
        animation-fill-mode: both;
        transform-origin: left;
    }

    @media (min-width: 800px) {
        align-self: flex-start;
    }
`;

const CTAButton = styled(Button)`
    display: flex;
    align-items: center;
`;

const DownArrow = styled(IoIosArrowDown)`
    margin-left: 0.5rem;
    margin-top: 0.125rem;
    font-size: 1.75rem;

    @media (max-width: 600px) {
        font-size: 1.5rem;
    }
`;

const quotesStyles = css`
    font-size: 7rem;
    color: #f7f7f7;
    z-index: -1;
    position: absolute;
`;

const OpenQuotes = styled(ImQuotesLeft)`
    ${quotesStyles}
    top: -40px;
    left: -10px;

    @media (min-width: 800px) {
        left: -50px;
    }
`;

const CloseQuotes = styled(ImQuotesRight)`
    ${quotesStyles}
    display: none;
    bottom: -10px;
    right: -50px;

    @media (min-width: 1150px) {
        display: block;
    }
`;

const Hero = () => {
    return (
        <OuterContainer>
            <HeroContainer>
                <Illustration
                    src={CoverImage}
                    alt='Illustration.'
                    variants={fadeInFromRight}
                    initial='hidden'
                    animate='visible'
                />
                <ContentContainer>
                    <HeadingContainer
                        variants={fadeInFromBottom}
                        initial='hidden'
                        animate='show'
                    >
                        <motion.span
                            variants={fadeInVariant}
                            initial='hidden'
                            animate='show'
                        >
                            <OpenQuotes />
                        </motion.span>
                        <Heading>
                            <motion.span variants={fadeUpVariant}>
                                I create
                            </motion.span>
                            <StyledText variants={fadeUpVariant}>
                                enjoyable
                            </StyledText>{' '}
                            <motion.span variants={fadeUpVariant}>
                                web experiences
                            </motion.span>
                        </Heading>
                        <motion.span
                            variants={fadeInVariant}
                            initial='hidden'
                            animate='show'
                        >
                            <CloseQuotes />
                        </motion.span>
                    </HeadingContainer>
                    <Details>
                        <Name>Julian Vazquez</Name>
                        <Position>Frontend Developer</Position>
                    </Details>
                    <CTAButton href='#projects'>
                        View projects <DownArrow />
                    </CTAButton>
                </ContentContainer>
            </HeroContainer>
        </OuterContainer>
    );
};

export default Hero;
