import styled from 'styled-components';

const image = 'https://images.unsplash.com/uploads/14128324071271c853818/3765c625?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1280&q=80'

export const Container = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0, 0, 0, .7), rgba(0, 0, 0, .6)), url(${image});
    background-size: cover;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;


    p {
        text-align: center;
        max-width: 330px;
        margin: 15px 0;
        font-size: 17px;
    }
    a {
        width: fit-content;
        border-radius: 6px;
        background: #fff;
        color: #000;
        padding: 5px 10px;
    }

`