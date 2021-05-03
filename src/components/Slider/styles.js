import styled from 'styled-components';



export const Container = styled.div`
    width: 100%;
    overflow: hidden;
`;

export const Drag = styled.div`
    display: flex;
    align-items: flex-end;
    width: 100%;
    overflow-x: scroll;
    cursor: grab;

    a {
        pointer-events: ${ ({ mouseMove }) => mouseMove ?  'none' :  'visible'};
    }

    &::-webkit-scrollbar {
        display: none;
    }
`;
