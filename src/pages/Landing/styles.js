import styled from 'styled-components';
import { motion } from 'framer-motion';


const UrlBase = 'https://image.tmdb.org/t/p/w1280' 

export const Container = styled.div`
    width: 100%;
    height: 466px;
`;
export const Carousel = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    background: ${ ({ background }) => `url(${UrlBase + background})`};
    background-position: 100% 0%;
    background-repeat: no-repeat;
    overflow: hidden;
    transition: background 400ms ease-in-out;
`;
export const GradientTop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to bottom, #111 10%, transparent 90%);
`;
export const GradientLeft = styled(motion.div)`
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(to right, #111 25%, transparent);
`;
export const Wrapper = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 50px;
`;
export const Title = styled(motion.h1)`
    font-weight: 500;
    font-size: 60px;
    font-family: 'Roboto', sans-serif;
    opacity: 0;
    max-width: 640px;
`;
export const Dots = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    li:nth-child( ${ ({ nth }) => nth + 1} ) {
        width: 12px;
        height: 12px;
        background: rgba(255, 255, 255);
    }
`;
export const Dot = styled.li`
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
    cursor: pointer;
    margin: 4px 0;
`;


export const Release = styled.div`
    display: flex;
    width: 100%;


    div:nth-child(2) {
        clip-path: polygon(14% 0, 100% 0, 86% 100%, 0% 100%);
        transform: scaleX(1.4);
    }
`;
export const ReleaseItem = styled.div`
    flex: 1;
`;
export const Img = styled.img`
    display: block;
    width: 100%;
    max-height: 300px;
    object-fit: cover;
`;


export const SliderContainer = styled.div`
    width: 100%;
    padding: 40px 0 25px;
`;
export const SliderGenres = styled.ul`
    display: flex;
    align-items: center;
    padding: 0 50px 20px;

    .selected {
        font-size: 20px;
        color: #11CAE3;
    }
`;
export const Genre = styled.li`
    padding: 0 8px;
    font-size: 16px;
    color: rgba(255, 255, 255, .7);
    text-transform: uppercase;
    cursor: pointer;
    transition: 400ms ease;
`;