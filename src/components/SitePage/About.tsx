import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { GuideFadeIn } from '../../styles/guide';

interface AboutProps {
    
};

const About: React.FC<AboutProps> = () => {

    return (
        <AboutMeContainer id="about us">
            about us
        </AboutMeContainer>
    )
};

const AboutMeContainer = styled.section`
  width: 100%;
  height: 100vh;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 40px 0px;
  gap: 40px;
  color: #222020;
`;

export default About;