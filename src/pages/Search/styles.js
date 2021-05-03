import styled from 'styled-components';


export const Container = styled.div`
    display: flex;
    flex-direction: column;
    background: linear-gradient(45deg, #000 10%, #0B1417);
    height: 100%;
    padding: 110px 50px 0;
    overflow-y: scroll;

`;

export const SearchField = styled.form`
    width: 100%;
    text-align: center;
    margin-bottom: 30px;
`;
export const Input = styled.input`
    width: 50%;
    border-bottom: 1px solid #fff;
    background: transparent;
    font-size: 16px;
    padding: 5px 10px;
    color: #fff;
`;
export const SearchResults = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`;

