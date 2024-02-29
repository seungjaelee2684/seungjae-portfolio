import React from 'react'
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { GiWingedArrow } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';

const MainLayout = () => {

  const location = useLocation();

  const windowPath = useSelector((state : RootState) => state.pageState);

  const pagePathname = () => {
    if (location.pathname.includes ("/about")) {
      return "About Us";
    } else if (location.pathname.includes ("/stack")) {
      return "Stacks";
    } else {
      return ;
    };
  };

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
  background-color: #17181b;
  position: absolute;
  top: 25%;
  left: -25%;
  transform: rotate(45deg);
`;

export const AboutContainer = styled.article`
  width: 1320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1320px) {
    width: 100%;
  }
`;

const AboutWrapper = styled.div`
  width: 90%;
  height: 80%;
  background-color: #27282d;
  box-shadow: #0d0d0e 0px 0px 8px 0px;

  @media screen and (max-width: 1320px) {
    height: 90%;
  }
`;

const TopLaneContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #141519;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  font-size: 24px;
`;

const LeftText = styled.div`
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 18px;
`;

const Icon = styled.div`
  color: #d4b681;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default MainLayout;