import React from 'react'
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { GiWingedArrow } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';

const MainLayout = () => {

  const location = useLocation();

  const windowPath = useSelector((state : RootState) => state.pageState);

  return (
    <MainLayOut>
      <BackgroundEffect />
      <EffectAnimation>
        <AboutContainer>
          <AboutWrapper>
            <TopLaneContainer>
              <LeftText>
                <Icon>
                  <GiWingedArrow />
                </Icon>
                Developer
              </LeftText>
              {windowPath}
            </TopLaneContainer>
            <Outlet />
          </AboutWrapper>
        </AboutContainer>
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
`;

const BackgroundEffect = styled.div`
  width: 150%;
  height: 70%;
  background-color: #0e0e13;
  position: absolute;
  top: 25%;
  left: -70%;
  transform: rotate(75deg);
`;

export const AboutContainer = styled.article`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AboutWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: #27282db0;
`;

const TopLaneContainer = styled.div`
  width: 100%;
  height: 60px;
  background-color: #141519c7;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  font-size: 32px;
  user-select: none;
`;

const LeftText = styled.div`
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 26px;
`;

const Icon = styled.div`
  color: #d4b681;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainLayout;