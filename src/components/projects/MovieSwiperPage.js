import { motion } from 'framer-motion';
import React from 'react';
import { BsDisplayFill, BsThreeDots } from 'react-icons/bs';
import { FaServer } from 'react-icons/fa';
import {
    fadeIn,
    IconContainer,
    ImageGrid,
    ListItem,
    ResponsiveImg,
    StyledIframe,
    StyledParagraph,
    StyledSpan,
    TechList,
} from '../styled-components/StyledComponents';
import BackButton from './shared/BackButton';
import Header from './shared/Header';
import Section from './shared/Section';

const navLinks = [
    {
        hash: '#preview',
        title: 'Preview',
    },
    {
        hash: '#idea',
        title: 'Idea',
    },
    {
        hash: '#design',
        title: 'UI/UX Design',
    },
    {
        hash: '#responsiveness',
        title: 'Mobile First',
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

const MovieSwiperPage = () => {
    return (
        <motion.div
            variants={fadeIn}
            initial='hidden'
            animate='visible'
            exit='hidden'
        >
            <Header
                title='Movie Swiper'
                description='Add movies to a shared list and vote to find the perfect movie to watch. '
                url='https://www.movieswiper.co'
                github='https://github.com/julianvazq/movie-swiper'
                navLinks={navLinks}
            >
                <StyledIframe
                    allowFullScreen
                    src='https://www.youtube-nocookie.com/embed/KIlIOwEb88Q'
                    title='Movie Swiper YouTube Demo'
                    frameborder='0'
                    allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                ></StyledIframe>
            </Header>

            <Section title='Idea' id='idea'>
                <div>
                    <StyledParagraph>
                        Having a movie night? We all know finding the perfect
                        movie that satisfies everyone's interests is close to
                        impossible. In my experience, what ends up happening is
                        that a vocal minority <i>really</i> wants to watch a
                        movie, and the rest unenthusiastically agree for lack of
                        a better option. After countless nights of watching
                        over-the-top action movies with questionable casting, I
                        decided to try to do something about it.
                    </StyledParagraph>
                    <StyledParagraph>
                        <span>Movie Swiper</span> brings democracy to the
                        metaphorical movie night table. Everyone gets to
                        anonymously add their preferred movies to a shared list,
                        after which a vote takes place. If you've ever used
                        Tinder you'll feel right at home with the user
                        interface, where you can swipe right to like a movie, or
                        swipe left to dislike it. Once the votes are in, you can
                        see how many likes each movie got, and who they came
                        from.
                    </StyledParagraph>
                </div>
            </Section>

            <Section title='Design' id='design' bg>
                <div>
                    <StyledParagraph>
                        Low-fidelity{' '}
                        <a
                            href='https://www.figma.com/file/yibhjI5emU2BzD2r8fYHby/Movie-Swiper?node-id=0%3A1'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            wireframes
                        </a>{' '}
                        were created to get a sense of the initial design.
                    </StyledParagraph>
                </div>
                <iframe
                    title='Figma: Low-fidelity wireframes.'
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        width: '100%',
                    }}
                    height='450'
                    src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyibhjI5emU2BzD2r8fYHby%2FMovie-Swiper%3Fnode-id%3D0%253A1'
                    allowFullScreen
                ></iframe>
                <div>
                    <StyledParagraph>
                        <a
                            href='https://www.figma.com/file/yibhjI5emU2BzD2r8fYHby/Movie-Swiper?node-id=304%3A2506'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            User flows
                        </a>{' '}
                        helped guide the direction of the user interactions, and
                        saved significant time during development.
                    </StyledParagraph>
                </div>
                <iframe
                    title='Figma: User Flows.'
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        width: '100%',
                    }}
                    height='450'
                    src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyibhjI5emU2BzD2r8fYHby%2FMovie-Swiper%3Fnode-id%3D304%253A2506'
                    allowFullScreen
                ></iframe>
                <div>
                    <StyledParagraph>
                        A{' '}
                        <a
                            href='https://www.figma.com/file/yibhjI5emU2BzD2r8fYHby/Movie-Swiper?node-id=301%3A120'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            design system
                        </a>{' '}
                        allowed the theme of the application to have a
                        standarized look-and-feel, leading to an all-around
                        consistent user experience.
                    </StyledParagraph>
                </div>
                <iframe
                    title='Figma: Design System.'
                    style={{
                        border: '1px solid rgba(0, 0, 0, 0.1)',
                        width: '100%',
                    }}
                    height='450'
                    src='https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FyibhjI5emU2BzD2r8fYHby%2FMovie-Swiper%3Fnode-id%3D301%253A120'
                    allowFullScreen
                ></iframe>
            </Section>

            <Section title='Mobile First' id='responsiveness'>
                <StyledParagraph>
                    The web application is primarily designed for a mobile
                    experience, as it is highly unlikely that a group of people
                    would bring their personal computers to a movie night. The
                    design imitates as best it can the feel of a native
                    application you'd download on your phone, leading to a more
                    familiar and intuitive experience for most users. The fluid
                    user interface design makes it extremely easy to also
                    support larger devices, such as tablets and desktops, as
                    seen below.
                </StyledParagraph>
                <ResponsiveImg
                    iphone
                    src={require('../../images/projects/movie-swiper/responsive.png')}
                    alt='Responsive design.'
                />
            </Section>

            <Section title='Architecture' id='architecture' bg>
                <div>
                    <StyledParagraph>
                        <span>Movie Swiper</span> utilizes web sockets to
                        provide users with a "real-time" concurrent experience.
                        Most actions, such as joining a room or adding a new
                        movie to the list, trigger a notification for other
                        users in the same room.
                    </StyledParagraph>
                </div>
                <ImageGrid>
                    <ResponsiveImg
                        src={require('../../images/projects/movie-swiper/join-room.png')}
                        alt='Architecture diagram.'
                    />
                    <ResponsiveImg
                        src={require('../../images/projects/movie-swiper/add-movie.png')}
                        alt='Architecture diagram.'
                    />
                </ImageGrid>
                <div>
                    <StyledParagraph>
                        The application is driven by a NodeJS server, and it is
                        the layer through which all interactions among users
                        take place. The frontend is a single-page React
                        application.
                    </StyledParagraph>
                </div>
                <ResponsiveImg
                    src={require('../../images/projects/movie-swiper/arc.svg')}
                    alt='Entity Relationship Diagram.'
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
                            <br /> React, TypeScript, Styled Components,
                            SocketIO Client
                        </div>
                    </ListItem>
                    <ListItem>
                        <IconContainer>
                            <FaServer />
                        </IconContainer>
                        <div>
                            <span>Backend</span>
                            <br /> Node, Express, SocketIO
                        </div>
                    </ListItem>
                    <ListItem>
                        <IconContainer>
                            <BsThreeDots />
                        </IconContainer>
                        <div>
                            <StyledSpan>Others</StyledSpan>
                            <br /> React Hooks, React Router, React Context
                        </div>
                    </ListItem>
                </TechList>
                <BackButton />
            </Section>
        </motion.div>
    );
};

export default MovieSwiperPage;
