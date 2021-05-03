import styled from "styled-components";

import {  motion } from 'framer-motion';

export const Svg = styled.svg``;

export const CircleBg = styled.circle`
    fill: #27272d;
    stroke: #c3c3c3;

`;
export const Circle = styled(motion.circle)`
    transform-origin: 50% 50%;
    transform: rotate(273deg);
`;
export const Text = styled.text`
    fill: #fff;
    font-family: 'Concert One', sans-serif;
    font-size: 60px;
    transform: translate(-50%, -50%);
    transform: translateY(16px);
`;
