import React, { Dispatch, FC, SetStateAction, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { Waypoint } from 'react-waypoint';

export interface EnterView {
    children: JSX.Element | Element;
    animationToggle: Dispatch<SetStateAction<boolean>>;
    onlyEnter?: boolean;
    bottomOffset?: number | string;
}

export const EnterView = ({ children, animationToggle, onlyEnter = false, bottomOffset = 0  }: EnterView) => {
    const [isInView, setIsInView] = useState<boolean>(false);
    useEffect(() => {
        animationToggle(isInView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);
    return (
        <Waypoint onEnter={() => setIsInView(true)} onLeave={() => !onlyEnter && setIsInView(false)}  bottomOffset={bottomOffset}>
            {children}
        </Waypoint>
    );
};