import React from 'react'
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';
import { GuideFadeIn } from '../../styles/guide';
import BG from '../../assets/images/main_background.webp';

const SubLayout = () => {
  return (
    <GamePageLayout>
      <Background src={BG} alt=''/>
      <Effect />
      <Outlet />
    </GamePageLayout>
  )
};

const GamePageLayout = styled.article`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const Background = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 16;
`;

const Effect = styled.div`
  width: 100%;
  height: 100%;
  background-color: #000000a9;
  backdrop-filter: blur(1px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 17;
  opacity: 0;
  animation: ${GuideFadeIn} 0.8s forwards 0.3s;
`;

export default SubLayout;