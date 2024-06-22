import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Image1 from '../../assets/images/about_1.jpg';
import Image2 from '../../assets/images/about_2.jpg';

interface AboutProps {
    
};

const About: React.FC<AboutProps> = () => {

    return (
        <AboutMeContainer id="about us">
            <MainTitle>About Us</MainTitle>
            <AboutContentWrapper>
                <AboutLaneContainer>
                    <LeftWrapper>
                        <LaneTitle>끊임없는 끈기</LaneTitle>
                        <LaneContent>
                            아우
                        </LaneContent>
                        <Button>자세히보기</Button>
                    </LeftWrapper>
                    <CardImage src={Image1} alt='about 이미지1' />
                </AboutLaneContainer>
                <AboutLaneContainer>
                    <CardImage src={Image2} alt='about 이미지1' />
                    <LeftWrapper>
                        <LaneTitle>끊임없는 끈기</LaneTitle>
                        <LaneContent>
                            아우
                        </LaneContent>
                        <Button>자세히보기</Button>
                    </LeftWrapper>
                </AboutLaneContainer>
            </AboutContentWrapper>
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

const AboutContentWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

const AboutLaneContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 150px;
`;

const LeftWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
`;

const LaneTitle = styled.strong`
    font-size: 24px;
    line-height: normal;
`;

const LaneContent = styled.p`
    font-size: 18px;
    line-height: 120%;
`;

const CardImage = styled.img`
    min-width: 500px;
    height: 300px;
    object-fit: cover;
`;

const Button = styled.button`
    width: 140px;
    height: 48px;
`;

export default About;