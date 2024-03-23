import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const GuideAnimation = () => {

  return (
    <GuideContainer>
      <GuideInWrapper>
        <GuideBack />
        <SelectBox />
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
  position: relative;
`;

const GuideBack = styled.div`
  width: 100%;
  height: 100%;
  background-color: #00000070;
`;

const SelectBox = styled.div`
  width: 500px;
  height: 500px;
  background-color: none;
  border-radius: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 23;
`;

export default GuideAnimation;