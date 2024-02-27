import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Wrapper from '../components/common/Wrapper';
import AboutMe from '../components/Category/AboutMe';

const MainPage = () => {

  return (
    <MainLayOut>
      <EffectAnimation>
        <AboutMe />
      </EffectAnimation>
    </MainLayOut>
  )
};

const MainLayOut = styled.main`
  width: 100%;
  height: 100vh;
  background-color: #212226;
  position: relative;
`;

const EffectAnimation = styled.div`
  width: 1320px;
  height: 100%;
  color: #d4b681;
  font-family: "GongGothicMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0px auto;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

export default MainPage;