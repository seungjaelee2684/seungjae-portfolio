import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const GuideAnimation = () => {

  return (
    <GuideContainer>
      <GuideInWrapper>
        <GuideBack />
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

const GuideBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000ca;
  mask: radial-gradient(circle at 23% 50%, transparent 10%, #000000ca 10%);
`;

export default GuideAnimation;