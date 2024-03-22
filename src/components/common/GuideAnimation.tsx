import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

const GuideAnimation = () => {

  return (
    <GuideContainer>
      GuideAnimation
    </GuideContainer>
  )
};

const GuideContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  color: #d4b681;
  font-family: "GongGothicMedium";
`;

export default GuideAnimation;