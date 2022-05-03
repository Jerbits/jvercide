import React, { FC, useState } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { animated } from 'react-spring';
import { SpringBorder } from '../SpringBorder';
import { SpringWords } from '../SpringWords';

const HeaderH1 = tw.h1`font-Gelasio text-2xl mb-2 sm:text-4xl lg:text-5xl`;
const Page = tw.div`w-full text-left max-w-sm sm:max-w-lg p-5 lg:max-w-4xl xl:max-w-6xl `;
const AnimatedParagraph = styled(animated.p)``;
const TagLine = tw(
    AnimatedParagraph
)`text-white font-Sora pb-3 mb-5 inline-block text-1xl sm:text-2xl lg:text-3xl`;
const Paragraph = tw.h1`font-Sora text-sm md:text-base mb-2 flex items-center `;

/** Comment */
export const Landing = () => {
    return (
        <Page>
            <HeaderH1>
                <SpringWords text="Hi there, I’m Jerome Vercide." />
            </HeaderH1>
            <TagLine>
                Frontend engineer{' '}
                <SpringBorder onlyEnter delay={2000} />
            </TagLine>
            <Icon className="h-6 w-6 text-purple-800 inline ml-3" icon="FaRocket" />
            <Paragraph>
                <Icon className="h-4 w-4 text-white inline-block mr-3" icon="FaEnvelope" />{' '}
                <a href="mailto:jerome8vercide@gmail.com" aria-label="Email address">
                    {' '}
                    Jerome8vercide@gmail.com
                </a>
            </Paragraph>
            <Paragraph>
                <Icon className="h-4 w-4 text-white inline-block mr-3" icon="FaGit" />{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/Jerbits"
                    aria-label="Github"
                >
                    {' '}
                    Jerbits
                </a>
            </Paragraph>
            <Paragraph>
                <Icon className="h-4 w-4 text-white inline-block mr-3" icon="FaNpm" />{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.npmjs.com/~jerbits-v"
                    aria-label="NPM"
                >
                    {' '}
                    Jerbits-v
                </a>
            </Paragraph>
            <Paragraph>
                <Icon className="h-4 w-4 text-white inline-block mr-3" icon="FaLinkedin" />{' '}
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.linkedin.com/in/jerome-vercide-61b7b1153/"
                    aria-label="LinkedIn"
                >
                    {' '}
                    Jerome Vercide
                </a>
            </Paragraph>
        </Page>
    );
};
