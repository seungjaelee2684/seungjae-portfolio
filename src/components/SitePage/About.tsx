import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { GuideFadeIn } from '../../styles/guide';

interface AboutProps {
    aboutRef: any;
};

const About: React.FC<AboutProps> = ({ aboutRef }) => {

    return (
        <AboutMeContainer id="about us">
            <Title>
                About Us
            </Title>
            <CardWrapper>
                <LaneContainer id="element1" ref={el => aboutRef.current[0] = el}>
                    <CardBox>
                        안녕
                    </CardBox>
                    <ContentBox>
                        나는 승재야
                    </ContentBox>
                </LaneContainer>
                <LaneContainer id="element2" ref={el => aboutRef.current[1] = el}>
                    <ContentBox>

                    </ContentBox>
                    <CardBox>

                    </CardBox>
                </LaneContainer>
                <LaneContainer id="element3" ref={el => aboutRef.current[2] = el}>
                    <CardBox>

                    </CardBox>
                    <ContentBox>

                    </ContentBox>
                </LaneContainer>
            </CardWrapper>
        </AboutMeContainer>
    )
};

const AboutMeContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 40px 0px;
    gap: 40px;
    color: #222020;
`;

const Title = styled.label`
    font-size: 34px;
    top: 100px;
`;

const CardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const LaneContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    padding: 20px 0px;
    transition: all 1.2s ease-in;
    opacity: 0;
    transform: translateY(-60px);
`;

const CardBox = styled.div`
    min-width: 400px;
    height: 300px;
    border: 1px solid;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ContentBox = styled.div`
    width: 100%;
    display: flex;
    justify-content: start;
    align-items: center;
`;

export default About;