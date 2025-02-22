import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { GuideFadeIn } from '../../styles/guide';
import { useDispatch, useSelector } from 'react-redux';
import { guideOpen } from '../../store/modules/guide';
import { LuArrowBigDownDash } from "react-icons/lu";
import { guideContent } from '../../utils/GuideContent';
import { RootState } from '../../store/config/configureStore';

const GuideAnimation = () => {

  const guide = localStorage.getItem("guide");
  const dispatch = useDispatch();
  const isMobile = useSelector((state: RootState) => state.isMobile);
  const guideList = guideContent?.filter((item) => item?.id === guide);
  const guideInfo = guideList ? guideList[0] : null;

  return (
    <GuideContainer
      path={guide}
      onClick={() => {
        dispatch(guideOpen(false));
      }}>
      <GuideBox>
        {guideInfo?.content.map((item: any) => {
          return (
            <Text>
              {item}
            </Text>
          )
        })}
      </GuideBox>
      <Arrow>
        <LuArrowBigDownDash />
      </Arrow>
    </GuideContainer>
  )
};

const ModalFadeIn = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const ModalArrow = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-50%);
  }

  100% {
    opacity: 1;
    transform: translateY(0%);
  }
`;

const GuideContainer = styled.div<{ path: string | null }>`
  color: #FFFFFF;
  position: absolute;
  top: ${(props) => (props.path === "skill") ? "0" : "-120px"};
  left: ${(props) => (props.path === "dungeon") ? "43%" : "5%"};
  z-index: 23;
  font-family: "GongGothicMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;

  @media screen and (max-height: 780px) {
    top: 0;
  }
`;

const GuideBox = styled.div`
  width: fit-content;
  height: fit-content;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 3px;
  animation: ${ModalFadeIn} 0.7s forwards 0.3s;
  padding: 30px 16px;
  box-shadow: #17df9c 0px 0px 4px 0px;
  border: 1px solid #17df9c;
  background-image: linear-gradient(to top, #34d49f, transparent);
  background-color: #115a42a2;

  @media screen and (max-width: 500px) {
    font-size: 10px;
    line-height: 120%;
    padding: 16px 8px;
  }
`;

const Text = styled.div`
  opacity: 0;
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  white-space: pre-line;
  animation: ${GuideFadeIn} 0.8s forwards 1s;

  @media screen and (max-width: 500px) {
    font-size: 10px;
    line-height: 120%;
  }
`;

const Arrow = styled.div`
  margin-left: 30px;
  font-size: 50px;
  opacity: 0;
  animation: ${ModalArrow} 1s infinite forwards 1s;

  @media screen and (max-height: 780px) {
    display: none;
  }

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export default GuideAnimation;