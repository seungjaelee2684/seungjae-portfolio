import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Image from '../../assets/images/picture.webp';

interface AboutProps {
    
};

const About: React.FC<AboutProps> = () => {

    return (
        <AboutMeContainer id="about us">
            <MainTitle>About Us</MainTitle>
            <AboutContentWrapper>
                <AboutCardBox>
                    
                </AboutCardBox>
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
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
`;

const AboutCardBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
`;

export default About;