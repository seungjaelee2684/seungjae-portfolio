import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components';
import { Outlet, useLocation } from 'react-router-dom';
import { GiWingedArrow } from "react-icons/gi";
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import ModalContainer from './ModalContainer';
import GuideAnimation from './GuideAnimation';

const MainLayout = () => {

  const followRef = useRef<HTMLDivElement>(null);
  const cursorPointer = useRef<HTMLDivElement>(null);
  const windowPath = useSelector((state: RootState) => state.pageState);
  const isGuide = localStorage.getItem("guide");
  const guidePage = localStorage.getItem("guide_page");
  const [guide, setGuide] = useState<boolean>(false);
  const [guideStep, setGuideStep] = useState<boolean>(false);
  console.log("가이드 여부 -> ", guide, guideStep);

  useEffect(() => {
    setGuide(!!isGuide);
    setGuideStep(!!guidePage);
  }, [isGuide, guidePage]);

  // const cursorMove = (e: any) => {
  //   let x = e.clientX;
  //   let y = e.clientY;
  //   console.log(x, y);

  //   if (cursorPointer.current && followRef.current) {
  //     cursorPointer.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  //     followRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`
  //   };
  // };

  // window.addEventListener("mousemove", cursorMove);

  return (
    <MainLayOut>
      {/* <CursorContainer ref={cursorPointer} />
      <FollowCursor ref={followRef} /> */}
      {(guide && guideStep)
        && <GuideAnimation />}
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
      <ModalContainer />
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

  @media screen and (max-width: 1320px) {
    font-size: 28px;
  }

  @media screen and (max-width: 836px) {
    font-size: 22px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
    height: 40px;
  }
`;

const LeftText = styled.div`
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 26px;

  @media screen and (max-width: 1320px) {
    font-size: 24px;
  }

  @media screen and (max-width: 836px) {
    font-size: 18px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const Icon = styled.div`
  color: #d4b681;
  font-size: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 1320px) {
    font-size: 28px;
  }

  @media screen and (max-width: 836px) {
    font-size: 24px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

const CursorContainer = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #be2e2e;
  position: absolute;
  z-index: 30;
`;

const FollowCursor = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 100%;
  background-color: #db6e6ed1;
  position: absolute;
  z-index: 29;
  transition: all 0.2s;
`;

export default MainLayout;