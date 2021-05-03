import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 55px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 8px 50px;
    border-bottom: 1px solid #11CAE3;
    z-index: 100;
`;


export const NavLogo = styled.img`
    width: 100px;
`;


export const NavMenu = styled.ul`
    display: flex;

    li:nth-child(${ ({nth}) => nth}) > a {
        margin-top: 10px;
        color: #11CAE3;
    }

`;
export const NavItem = styled.li`
    padding: 0 20px;
    user-select: none;
`;
export const NavLink = styled(Link)`
    color: #fff;
    font-family: 'Russo One', sans-serif;
    font-size: 16px;
`;


export const NavSearch = styled.div`
`;
export const Icon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 38px;
    height: 38px;
    border-radius: 50%;
    background: #373C40;
    cursor: pointer;
`;