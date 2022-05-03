import React, { FC, Fragment, useState } from 'react';
import { animated, config, easings, useTransition } from 'react-spring';
import styled from 'styled-components';
import tw from 'tailwind-styled-components';

export interface SpringWordsProps {
    text: string;
}

const AnimatedLetter = styled(animated.div)``;
const LetterContainer = tw(AnimatedLetter)`inline-block overflow-hidden`;

/** Comment */
export const SpringWords: FC<SpringWordsProps> = ({ text }: SpringWordsProps) => {
    const [textItems, setTextItems] = useState<Array<any>>(() =>
        Array.from(text, (item, index) => ({ id: index, text: item }))
    );
    const transitions = useTransition(textItems, {
        from: { opacity: 0, maxHeigth: 0, innerHeight: 0 },
        enter: { opacity: 1, maxHeigth: 50, innerHeight: 50 },
        leave: { opacity: 0, maxHeigth: 0, innerHeight: 0 },
        trail: 50,
        config: {
            easings: easings.easeInQuad,
            duration: 50,
        }
    });

    console.log(transitions);
    return transitions(({ opacity, innerHeight }, letter: any, t, i) => {
        return (
            <LetterContainer
                style={{
                    opacity: opacity,
                    maxHeight: innerHeight
                }}
            >
                {letter.text.replace(/ /g, '\u00a0')}
            </LetterContainer>
        );
    });
};
