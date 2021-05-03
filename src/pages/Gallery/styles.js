import styled, { css } from 'styled-components';

export  const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
`;

export const Slide = styled.div`
    position: relative;
    flex: 1;
    height: 100%;
`
const Button = css`
    position: absolute;
    top: 50%;
    z-index: 2;
    background: none;
    cursor: pointer;
`;
export const Prev = styled.button`
    ${Button}
    left: 55px;
`;
export const Next = styled.button`
    ${Button}
    right: 55px;
`;

export const Images = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    overflow-y: scroll;
    scroll-snap-type: y mandatory;

    &::-webkit-scrollbar {
        display: none;
    }
`;
export const Image = styled.div`
    width: 100%;
    height: 100vh;
    scroll-snap-align: start;

    img {
        width: 100%;
        height: 100vh;
        object-fit: cover; 
        filter: brightness(0.7);
    }
`;
export const NotImages = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`;
export const Message = styled.h1`
    text-align: center;
`;



export const PosterInfo = styled.div`
    display: flex;
    flex-direction: column;
    padding: 45px 20px 0;
    width: 275px;
    height: 100%;
    background: #0E2B2F;
`
export const Title = styled.h1`
    font-weight: initial;
    font-family: 'Russo One', sans-serif;
    font-size: 22px;
    width: 100%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    text-align: center;
`;
export const Poster = styled.div`
    width: 100%;
    height: 145px;
    background: ${({ image }) => `url(${image})`};
    background-size: cover;
    background-repeat: no-repeat;
    border-radius: 18px;
    margin: 18px 0 30px;
`;
export const Search = styled.form`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #183539;
    border-radius: 6px;
    padding: 5px 10px;
    margin-bottom: 30px;

`;
export const Input = styled.input`
    flex: 1;
    color: #fff;
    background: none;
    font-size: 16px;
`;
export const SearchButton = styled.button`
    cursor: pointer;
    background: none;
`;
export const Results = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    background: #0A2124;
    width: calc(100% - 275px);
    height: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(125px, 1fr));
    grid-auto-rows: 190px;
    grid-gap: 15px;
    overflow-y: auto;
    padding: 60px 25px 0;
    z-index: 10;

    &::-webkit-scrollbar{
        display: none;
    }

`;
export const Result = styled.div`

    a {
        width: 100%;
        height: 100%;
    }
`;
export const Img = styled.img`
    width: 100%;
    height: 100%;
`;
export const Close = styled.div`
    position: fixed;
    display: flex;
    height: 30px;
    width: 30px;
    align-items: center;
    justify-content: center;
    top: 65px;
    left: 35px;
    transform: rotate(45deg);
    transform-origin: 50% 50%;
    background: #373C40;
    cursor: pointer;
`;

export const ImagesSetting = styled.div`
    width: 100%;
    flex: 1; 
    border-radius: 18px 18px 0 0; 
    background: #0A2124;
    padding: 10px 15px 0 ;
`;
export const Label = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 4px;
`;

export const Name = styled.div`
    width: 100%;
    margin: 20px 0;
`;
export const NameInput = styled.input`
    width: 100%;
    color: #fff;
    font-size: 16px;
    padding: 5px 8px;
    border-radius: 6px;
    background: #183539;
`;

export const Size = styled.div`
    width: 100%;
`;
export const SizeSelect = styled.select`
    width: 100%;
    color: #fff;
    font-size: 16px;
    padding: 5px 8px;
    border-radius: 6px;
    background: #183539;
`;
export const Option = styled.option`

`;

export const Download = styled.a`
    width: 100%;
    background: #05333D;
    border-radius: 6px;
    padding: 6px 0;
    text-align: center;
    margin-top: 58px;

    &:hover {
        background: #074350;
    }
`;




export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
`;