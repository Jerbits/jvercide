import React, { FC, useState } from 'react';
import tw from 'tailwind-styled-components';
import { EnterView } from '../EnterView/EnterView';
import styled from 'styled-components';
import { useSpring, animated, easings } from 'react-spring';

export interface SpringBorderProps {
    duration?: number;
    onlyEnter?: boolean;
    delay?: number;
}

const Border = styled(animated.span)``;
const AnimatedBorder = tw(Border)`block bg-green-900 h-1 mt-3`;

export const SpringBorder = ({ duration = 500, onlyEnter = false, delay = 0 }) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const borderAnimation = useSpring({
        width: toggle ? '100%' : '0%',
        config: {
            easing: easings.easeInOutQuart,
            duration: 700
        },
        delay
    });
    return (
        <EnterView animationToggle={setToggle} onlyEnter>
            <AnimatedBorder style={borderAnimation}></AnimatedBorder>
        </EnterView>
    );
};
