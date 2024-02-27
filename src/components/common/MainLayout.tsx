import React from 'react'
import styled from 'styled-components';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <MainLayOut>
      <BackgroundEffect />
      <EffectAnimation>
        <Outlet />
      </EffectAnimation>
    </MainLayOut>
  )
};

const MainLayOut = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #212226;
  position: relative;
  overflow: hidden;
`;

const EffectAnimation = styled.div`
  width: 100%;
  height: 100%;
  color: #d4b681;
  font-family: "GongGothicMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const BackgroundEffect = styled.div`
  width: 150%;
  height: 70%;
  background-color: #17181b;
  position: absolute;
  top: 25%;
  left: -25%;
  transform: rotate(45deg);
`;

export default MainLayout;