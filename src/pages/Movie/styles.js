import styled from 'styled-components';

import { motion } from 'framer-motion'

const baseurl = 'https://image.tmdb.org/t/p/w1280'
const imgAlterative = 'https://images.unsplash.com/photo-1541362762083-cbf93d30defa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80'



export const Container = styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;
export const MovieContainer = styled.div`
    display: grid;
    width: 100%;
    height: 100%;
    background: linear-gradient(to bottom, #111, rgba(17, 17, 17, .65)), 
        ${({ background }) => background 
        ? `url(${baseurl}${background})` 
        : `url(${imgAlterative})`};
    background-repeat: no-repeat;
    background-size: cover;
    grid-template-columns: 50px 1fr 1fr;
    grid-template-rows: 1fr 200px;
    grid-template-areas: "social info ranting"
                         "social trailer gallery";
`;



export const MovieInfo = styled.div`
    grid-area: info;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
`;
export const Genres = styled.ul`
    display: flex;
`;
export const Genre = styled.li`
    font-size: 15px;
    border: 1px solid #fff;
    margin-right: 10px;
    padding: 2px 4px;
`;
export const Title = styled.h1`
    font-size: 40px;
    font-weight: 500;
    margin: 10px 0 16px;
`;
export const Details = styled.span`
    font-size: 18px;
    margin-bottom: 18px;
`;
export const Overview = styled.p`
    font-family: 'Poppins', sans-serif;
    max-width: 500px;
    font-size: 18px;
    overflow: hidden; 
    text-overflow: ellipsis; 
    display: -webkit-box;
    -webkit-line-clamp: 5; 
    -webkit-box-orient: vertical; 
`;



export const MovieRanting = styled.div`
    grid-area: ranting;

    align-self: flex-end;
    justify-self: center;
    padding-bottom: 80px;
`;
export const MovieTrailer = styled.div`
    grid-area: trailer;
    width: 493px;
    align-self: flex-end;
    margin-bottom: 60px;

`;



export const MovieSocial = styled.div`
    grid-area: social;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    padding-bottom: 60px;

`;
export const SocialIcon = styled.div`
    margin-top: 12px;
`;
export const Anchor = styled.a`
    transition: 300ms ease;
    cursor: pointer;
    
    &:hover {
        transform: scale(1.15);
    }
`;

export const  GoGallery = styled.div`
    grid-area: gallery;
    align-self: center;
    justify-self: center;
    margin-left: 15px;

`
export const GalleryWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 30px; 
    border: 1px solid #13cae3;
`;

export const Text = styled.span`
    font-size: 20px;
    margin-right: 8px;
`;


export const MovieList = styled(motion.div)`
    position: absolute;
    bottom: -190px;
    left: 0;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-end;
    background: linear-gradient(to top, #1a0629 18%, transparent);
    
`;
export const ListIcon = styled(motion.span)`
    cursor: pointer;
    margin-bottom: 15px; 
`;