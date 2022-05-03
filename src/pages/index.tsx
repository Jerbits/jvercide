import * as THREE from 'three';
import type { NextPage } from 'next';
import React, {
    useRef,
    useState,
    Suspense,
    SetStateAction,
    Dispatch,
    useEffect,
    ReactFragment
} from 'react';
import tw from 'tailwind-styled-components';
import styled from 'styled-components';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import Model from '../Scene';
import { useSpring, animated, easings } from 'react-spring';
import { Scroll, ScrollControls, Stars, useScroll } from '@react-three/drei';

import { EnterView } from '../components/EnterView';

import { Landing } from '../components/Landing';
import { Projects } from "../components/Projects";
import { Tools } from "../components/Tools";

interface ScrollFrameProps {
    children: JSX.Element | Element;
    setPosition: Dispatch<SetStateAction<Array<number>>>;
    setRotationSpeed: Dispatch<SetStateAction<number>>;
}

const getRange = (max: number, min: number, proportion: number) => {
    return proportion * (max - min) + min;
};

const ScrollFrame = ({ children, setPosition, setRotationSpeed }: ScrollFrameProps) => {
    const data = useScroll();
    useFrame(() => {
        const pointA = data.range(0, 1 / 4);
        const isPageA = data.visible(0, 1 / 4);
        const pointB = data.range(2 / 4, 2 / 4);
        const isPageB = data.visible(2 / 4, 2 / 4);

        if (isPageA) {
            setPosition([getRange(-0.05, 1, pointA), getRange(-1.3, 0, pointA), -1]);

        }
        if(isPageB) {
            setPosition([getRange(-1.1, 0.05, pointB), getRange(0, -1.3, pointB), -1]);

        }
    });
    return <>{children}</>;
};

interface PagesProps {
    pages: number;
    damping: number;
}
// Styled components
const Container = tw.div`h-screen w-screen flex items-center justify-center text-white`;
const Page = tw.div`w-full text-left max-w-sm sm:max-w-lg p-5 lg:max-w-4xl xl:max-w-6xl `;
const HeaderH1 = tw.h1`font-Gelasio text-2xl mb-2 sm:text-4xl lg:text-5xl`;
const AnimatedParagraph = styled(animated.p)``;
const TagLine = tw(
    AnimatedParagraph
)`text-white font-Sora pb-3 mb-5 inline-block text-lg sm:text-2xl lg:text-3xl`;

const Pages = ({ pages, damping }: PagesProps) => {
    const [toggle, setToggle] = useState<boolean>(false);
    const [position, setPosition] = useState<Array<number>>([1, 0, -1]);
    const [rotationSpeed, setRotationSpeed] = useState<number>(0.0005);
    const paragraphAnimation = useSpring({ opacity: toggle ? 1 : 0 });

    return (
        <ScrollControls pages={pages} damping={damping}>
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade />
            <Model position={position} rotationSpeed={rotationSpeed} />
            <Scroll html>
                <ScrollFrame setPosition={setPosition} setRotationSpeed={setRotationSpeed}>
                    <>
                        <Container>
                            <Landing />
                        </Container>
                        <Container>
                            <Projects />
                        </Container>
                        <Container>
                            <Tools />
                        </Container>
                    </>
                </ScrollFrame>
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
                <Pages pages={3} damping={4} />
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
