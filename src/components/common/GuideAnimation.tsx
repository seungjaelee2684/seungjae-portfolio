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
      <GuideBox
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {guideInfo?.content.map((item: any) => {
          return (
            <div>
              {item}
            </div>
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
  }

  100% {
    opacity: 1;
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
  color: #d4b681;
  position: absolute;
  top: ${(props) => (props.path === "dungeon") ? "-150px" : "-100px"};
  left: ${(props) => (props.path === "dungeon") ? "42%" : "10%"};
  z-index: 23;
  font-family: "GongGothicMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 10px;
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
  font-size: 16px;
  font-weight: 400;
  line-height: 150%;
  background-color: #FFFFFF;
  border-radius: 8px;
  animation: ${ModalFadeIn} 0.7s forwards 0.3s;
  padding: 30px 16px;
  white-space: pre-line;

  @media screen and (max-width: 500px) {
    font-size: 10px;
    line-height: 120%;
    padding: 16px 8px;
  }
`;

const Arrow = styled.div`
  margin-left: 30px;
  font-size: 50px;
  opacity: 0;
  animation: ${ModalArrow} 1s infinite forwards 1s;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

export default GuideAnimation;