import { useState, useRef} from 'react';

import SliderContext from './context';

import {
    Container,
    Drag,
} from './styles';


const Slider = ({ children }) => {

    const DragRef = useRef(null);
    const [isdown, setIsdown] = useState(false);
    const [startX, setStartX] = useState();
    const [scrollLeft, setScrollLeft] = useState();
    const [mouseMove, setMouseMove] = useState(false);



    const HandleMouseDown = (event) => {
        setIsdown(true)
        setScrollLeft(DragRef.current.scrollLeft)
        setStartX(event.clientX)
    }

    const HandleMouseMove = (event) => {
        if (!isdown) return

        setMouseMove(true)
        const x = startX - event.clientX;
        const walk = scrollLeft + x
        DragRef.current.scrollLeft = walk
        
    }

    const HandleMouseOut = () => {
        setIsdown(false)
        setMouseMove(false)
    }


    return (
        <Container>
            <Drag
                ref={DragRef}
                onMouseDown={HandleMouseDown}
                onMouseMove={HandleMouseMove}
                onMouseUp={HandleMouseOut}
                onMouseLeave={HandleMouseOut}
                mouseMove={mouseMove}
            >
                <SliderContext.Provider value={{mouseMove: mouseMove}}>
                    {children}
                </SliderContext.Provider>
            </Drag>
        </Container>
    );
}

export default Slider