import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Image from '../../assets/images/picture.webp';

interface AboutProps {
    
};

const About: React.FC<AboutProps> = () => {

    return (
        <AboutMeContainer id="about us">
            <MainTitle>About Us</MainTitle>
            <AboutLaneContainer>
                <ContentWrapper>
                    <LaneTitle>헌신적인 태도</LaneTitle>
                    <LaneContent>
                       {"비전공자로 부트캠프를 수료, 우수학생으로 마무리.\n"}
                    </LaneContent>
                </ContentWrapper>
                <ImageBox src={Image} alt="라인_1" />
            </AboutLaneContainer>
            <AboutLaneContainer>
                <ImageBox src={Image} alt="라인_1" />
                <ContentWrapper style={{ alignItems: "end" }}>
                    <LaneTitle>헌신적인 태도</LaneTitle>
                    <LaneContent style={{ textAlign: "end" }}>
                        비전공자로 부트캠프를 수료해 우수학생으로 마무리.
                    </LaneContent>
                </ContentWrapper>
            </AboutLaneContainer>
        </AboutMeContainer>
    )
};

const AboutMeContainer = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  position: relative;
  padding: 30px 0px;
  color: #222020;
`;

const MainTitle = styled.h1`
    font-size: 32px;
    font-weight: 800;
    line-height: 100%;
`;

const AboutLaneContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
`;

const ContentWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 12px;
`;

const LaneTitle = styled.strong`
    font-size: 30px;
    font-weight: 700;
    line-height: 120%;
`;

const LaneContent = styled.p`
    width: 100%;
    font-size: 20px;
    font-weight: 500;
    line-height: 120%;
    text-align: start;
    color: #575757;
    white-space: pre-line;
`;

const ImageBox = styled.img`
    min-width: 350px;
    height: 300px;
    object-fit: cover;
`;

export default About;