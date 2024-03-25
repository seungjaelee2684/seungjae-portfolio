import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { GuideFadeIn } from '../../styles/guide';

const GuideAnimation = () => {

  const guidePage = localStorage.getItem("guide_page");

  return (
    <GuideContainer>
      <GuideInWrapper>
        <GuideBack length='23%' transverse='50%'/>
        GuideAnimation
      </GuideInWrapper>
    </GuideContainer>
  )
};

const GuideContainer = styled.div`
  width: 100%;
  height: 100vh;
  color: #d4b681;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 23;
  font-family: "GongGothicMedium";
`;

const GuideInWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

const GuideBack = styled.div<{ length: string, transverse: string }>`
  width: 100%;
  height: 100%;
  background-color: #000000ca;
  mask: radial-gradient(circle at ${(props) => props.length} ${(props) => props.transverse}, transparent 10%, #000000db 10%);
  animation: ${GuideFadeIn} 1s ease-in forwards;
`;

export default GuideAnimation;