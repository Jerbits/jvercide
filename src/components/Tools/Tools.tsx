import React, { FC, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { animated } from 'react-spring';

const Page = tw.div`w-full max-w-5xl text-left px-10 `;
const HeaderH1 = tw.h1`font-Gelasio text-2xl mb-10 sm:text-4xl lg:text-5xl text-center`;
const AnimatedParagraph = styled(animated.p)``;
const TagLine = tw(
    AnimatedParagraph
)`text-white font-Sora pb-3 mb-5 inline-block text-lg sm:text-2xl lg:text-3xl`;
const IconStyles = 'w-4 h-4 text-green-500 inline-block mr-2';

export const Tools = () => {
    return (
        <Page>
            <HeaderH1>Technologies / Methodologies</HeaderH1>
            <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 font-Sora">
                <ul className="">
                    <li> <Icon className={IconStyles} icon="FaCheckCircle" />JavaScript</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Typescript</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />PHP</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Ruby</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />React</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />NextJS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Gatsby</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Angular</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Concrete5</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Ruby On Rails</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />DoneJS/CanJS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />HTML5</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />CSS3</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />SASS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />LESS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />ThreeJS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />JSON</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />UseSWR</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />RollupJS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Webpack</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />TailwindCSS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />AJAX</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />JQuery</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />MooTools</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />WINDOWS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Linux</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />MacOS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Debian</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />CentOS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Figma</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Adobe Photoshop</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Vagrant</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />GitHub</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Bitbucket</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />LAMP</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Asana</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Confluence</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Lucidchart</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />AWS</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Jenkins</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Storybook</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />SentryIO</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Google Analytics</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />New Relic</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Agile</li>
                    <li><Icon className={IconStyles} icon="FaCheckCircle" />Waterfall</li>
                </ul>
            </div>
        </Page>
    );
};
