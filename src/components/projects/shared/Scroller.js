import React, { useEffect, useState, useRef, useCallback } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import { IoIosArrowUp } from 'react-icons/io';
import throttle from 'lodash.throttle';
import { useLocation } from 'react-router-dom';

const ScrollContainer = styled(motion.div)`
  max-width: 1400px;
  width: 90%;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  margin-left: auto;
  margin-right: auto;
  z-index: 999;
`;

const Circle = styled.div`
  margin-left: auto;
  margin-bottom: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background: ${(props) => props.theme.primary};
  color: #fff;
  cursor: pointer;
  font-weight: 600;
  padding: 0.5rem;

  @media (min-width: 800px) {
    width: 50px;
    height: 50px;
  }
`;

const UpArrow = styled(IoIosArrowUp)`
  font-size: 2.5rem;
  transform: translateY(-2px);

  @media (min-width: 800px) {
    font-size: 2.5rem;
  }
`;

const Scroller = () => {
  const { pathname } = useLocation();
  const [showScroller, setShowScroller] = useState(false);
  const lastScrollY = useRef(0);

  const onScroll = useCallback(
    throttle(() => {
      if (window.scrollY < 200) {
        setShowScroller(false);
        lastScrollY.current = window.scrollY;
        return;
      }

      if (lastScrollY.current > window.scrollY) {
        setShowScroller(true);
      } else {
        setShowScroller(false);
      }

      //   console.log('last', lastScrollY.current, 'current', window.scrollY);
      lastScrollY.current = window.scrollY;
    }, 150),
    [window.scrollY]
  );

  useEffect(() => {
    if (pathname !== '/') {
      window.addEventListener('scroll', onScroll);
    }

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [onScroll, pathname]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (pathname === '/' || !showScroller) {
    return null;
  }

  if (showScroller) {
    return (
      <AnimatePresence>
        <ScrollContainer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          {' '}
          <Circle onClick={scrollToTop}>
            <UpArrow />
          </Circle>{' '}
        </ScrollContainer>
      </AnimatePresence>
    );
  }
};

export default Scroller;
