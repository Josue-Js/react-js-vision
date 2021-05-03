import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
    margin: 0 4px;

`;

export const Play = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 176px;
    height: 90px;
    background: linear-gradient(45deg, rgba(0, 0, 0, .9), transparent),
    ${( { hash }) => `url(https://i.ytimg.com/vi_webp/${hash}/mqdefault.webp)`};
    
    background-size: cover;
    pointer-events: ${ ({ mouseMove }) => mouseMove ? 'none' : 'visible'};
    cursor: pointer;

`;


export const Video = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 1000;
    cursor: pointer;
`;

export const Close = styled.span`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 30px;
    height: 30px;
    background: #373C40;
    transform: rotate(45deg);
    transform-origin: 50% 50%;
    top: 30px;
    right: 30px;
`;

export const Iframe = styled(motion.iframe)`
    width: 0;
    height: 0;
`;