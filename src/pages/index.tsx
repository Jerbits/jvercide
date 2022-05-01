import * as THREE from 'three';
import type { NextPage } from 'next';
import React, { useRef, useState, Suspense, SetStateAction, Dispatch, useEffect } from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Model from '../Scene';
import { useSpring, animated } from 'react-spring';
import { Waypoint } from 'react-waypoint';
import { Html, OrbitControls, Scroll, ScrollControls } from '@react-three/drei';

// Styled components
const Container = tw.div`h-screen w-screen flex items-center justify-center text-white`;
const Page = tw.div`w-full text-left max-w-sm sm:max-w-lg p-5 lg:max-w-4xl xl:max-w-6xl `;
const HeaderH1 = tw.h1`font-WorkSans text-2xl mb-4 sm:text-4xl lg:text-6xl`;

const AnimatedParagraph = styled(animated.p)``;
const Paragraph = tw(
    AnimatedParagraph
)`text-white font-Gelasio border-green-700 border-b-4 pb-3 inline-block text-1xl sm:text-3xl lg:text-5xl`;

interface EnterView {
    children: JSX.Element;
    animationToggle: Dispatch<SetStateAction<boolean>>;
}

const EnterView = ({ children, animationToggle }: EnterView) => {
    const [isInView, setIsInView] = useState<boolean>(false);
    useEffect(() => {
        animationToggle(isInView);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isInView]);
    return (
        <Waypoint onEnter={() => setIsInView(true)} onLeave={() => setIsInView(false)}>
            {children}
        </Waypoint>
    );
};

const AnimatedBorder = () => {
    const [toggle, setToggle] = useState<boolean>(false);
    const borderAnimation = useSpring({
        width: toggle ? '100%' : '0%',
        display: 'block',
        backgroundColor: 'white',
        delay: 1000
    });
    return (
        <EnterView animationToggle={setToggle}>
            <animated.span style={borderAnimation}>a</animated.span>
        </EnterView>
    );
};

interface PagesProps {
    pages: number;
    damping: number;
}

const Pages = ({ pages, damping }: PagesProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const paragraphAnimation = useSpring({ opacity: toggle ? 1 : 0 });
    return (
        <ScrollControls pages={pages} damping={damping}>
            <Model />
            <Scroll html>
                <Container>
                    <Page>
                        <HeaderH1>Hi there, I’m Jerome Vercide.</HeaderH1>
                        <Paragraph>
                            Frontend engineer
                            <AnimatedBorder />
                        </Paragraph>
                    </Page>
                </Container>
                <Container>
                    <Page>
                        <HeaderH1>page1</HeaderH1>
                        <EnterView animationToggle={setToggle}>
                            <Paragraph style={paragraphAnimation}>world</Paragraph>
                        </EnterView>
                    </Page>
                </Container>
                <Container>
                    <Page>
                        <HeaderH1>page1</HeaderH1>
                        <Paragraph>world</Paragraph>
                    </Page>
                </Container>
            </Scroll>
        </ScrollControls>
    );
};

const Overview = () => {
    const light = useRef<any>(null);
    let lightDirection = 1;
    useFrame(() => {
        if (lightDirection > -1) {
            lightDirection -= 0.01;
        }
        light?.current?.position.set(0, lightDirection, 0);
    });
    return (
        <>
            <directionalLight color="#35133f" position={[0, 0, 5]} intensity={4} />
            <directionalLight color="#35133f" position={[-5, 0, 5]} intensity={4} />
            <directionalLight color="#35133f" position={[0, 5, 0]} intensity={4} />
            {/* <pointLight color="#84009e" intensity={3} distance={1} ref={light} /> */}
            {/* <OrbitControls /> */}
            <Suspense fallback={null}>
                <Pages pages={3} damping={10} />
            </Suspense>
            {/* <Controls zoom={zoom} focus={focus} /> */}
        </>
    );
};

const Home: NextPage = () => {
    const [value, setValue] = useState(false);
    const mouse = useRef([0, 0]);

    return (
        <>
            <div className="h-[100vh] bg-black">
                <Canvas camera={{ fov: 45, position: [0, 0, 1.1] }}>
                    <Overview />
                </Canvas>
            </div>
        </>
    );
};

export default Home;
