import React, { FC, useCallback, useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { Icon } from '../Icon';
import { animated, useSpring, easings, useTransition } from 'react-spring';
import { SpringBorder } from '../SpringBorder';
import { SpringWords } from '../SpringWords';
import { EnterView } from '../EnterView/EnterView';
import { FaYCombinator } from 'react-icons/fa';

// IMAGES
import img1 from '../../assets/images/agility.jpg';
import img2 from '../../assets/images/tingmobile.jpg';
import img3 from '../../assets/images/tinginternet.jpg';
import img4 from '../../assets/images/kodenta.jpeg';
import img5 from '../../assets/images/datasouth.jpeg';
import img6 from '../../assets/images/framework.jpeg';
import img7 from '../../assets/images/genesis.jpeg';
import img8 from '../../assets/images/sidebar.jpeg';
import img9 from '../../assets/images/brimstone.jpeg';
import img10 from '../../assets/images/practicology.jpeg';

const PROJECT_LIST = [
    { title: 'agility', image: img1, link: 'https://agilitycms.com/' },
    { title: 'tingmobile', image: img2, link: 'https://tingmobile.com/' },
    { title: 'tinginternet', image: img3, link: 'https://ting.com/internet' },
    { title: 'kodenta', image: img4, link: 'https://kodenta.com/' },
    { title: 'datasouth', image: img5, link: 'https://datasouth.co.uk/' },
    { title: 'framework', image: img6, link: 'http://framework57.c5box.com/' },
    { title: 'genesis', image: img7, link: 'http://genesis.c5box.com/' },
    { title: 'sidebar', image: img8, link: 'http://sidebar57.c5box.com/' },
    { title: 'brimstone', image: img9, link: 'http://brimstone57.c5box.com/' },
    { title: 'practicology', image: img10, link: 'https://www.practicology.com/' }
];

import img15 from '../../assets/images/wimbledon.jpeg';

const HeaderH1 = tw.h1`font-Gelasio text-2xl mb-5 sm:text-4xl lg:text-5xl text-center`;
const Page = tw.div`w-full text-left max-w-full sm:max-w-lg p-5 lg:max-w-4xl xl:max-w-6xl -mt-40`;
const Container = styled(animated.div)``;
const AnimatedContainer = tw(Container)`grid grid-cols-2 h-[500px] relative`;
const ProjectItem = styled(animated.div)``;
const AnimatedProjects = tw(
    ProjectItem
)`relative z-1 block width-full h-20 m-2 rounded-lg bg-fit group-hover:!opacity-100 transition-all cursor-pointer bg-center will-change-transform`;
const Title = styled(animated.h1)``;
const AnimatedTitle = tw(
    Title
)`font-sans absolute top-1/2 bottom-1/2 left-0 flex items-center text-base sm:text-lg md:text-4xl font-bold uppercase ml-5 italic group-hover:text-white cursor-pointer group-hover:h-8 group-hover:-mt-4 group-hover:bg-purple-600 -skew-x-12`;

export const Projects = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [projects, setProjects] = useState<Array<any>>([]);
    const containerAnimation = useSpring({
        height: toggle ? '600px' : '0px',
        config: {
            easing: easings.easeInOutQuart,
            duration: 300
        }
    });
    const transitions = useTransition(projects, {
        from: { opacity: 0, translateX: 50, height: 20 },
        enter: (item) => async (next, cancel) => {
            await next({ opacity: 0.3, translateX: 0, height: 20 });
        },
        leave: [{ opacity: 0, translateX: 50 }, {height: 0}],
        trail: 50,
        delay: 300,
        config: {
            easings: easings.easeInOutCubic,
            duration: 300
        }
    });
    const titleAnimation = useSpring({ opacity: toggle ? 1 : 0, delay: 1000 });

    useEffect(() => {
        if (toggle) {
            setProjects(PROJECT_LIST);
        }
    }, [toggle]);

    return (
        <Page>
            <HeaderH1>My projects</HeaderH1>
            <EnterView animationToggle={setToggle} onlyEnter >
                <AnimatedContainer>
                    {transitions(({ opacity, translateX }, item: any, t, i) => {
                        return (
                            <a target="_blank" rel="noreferrer noopener" href={item.link} className="relative group">
                                <AnimatedProjects
                                    style={{
                                        opacity: opacity,
                                        transform: translateX.to(
                                            (y) => `translateX(${i % 2 ? y : -y}px)`
                                        ),
                                        backgroundImage: `url(${item.image.src})`
                                    }}
                                ></AnimatedProjects>
                                <AnimatedTitle style={titleAnimation}>{item.title}</AnimatedTitle>
                            </a>
                        );
                    })}
                    
                </AnimatedContainer>
            </EnterView>
        </Page>
    );
};
