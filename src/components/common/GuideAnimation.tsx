import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { GuideFadeIn } from '../../styles/guide';
import { useDispatch } from 'react-redux';
import { guideOpen } from '../../store/modules/guide';
import { LuArrowBigDownDash } from "react-icons/lu";
import { guideContent } from '../../utils/GuideContent';

const GuideAnimation = () => {

  const guide = localStorage.getItem("guide");
  const dispatch = useDispatch();

  const guideList = guideContent?.filter((item) => item?.id === guide);
  const guideInfo = guideList ? guideList[0] : null;

  return (
    <GuideContainer
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

const GuideContainer = styled.div`
  color: #d4b681;
  position: absolute;
  top: -20%;
  left: 0;
  z-index: 23;
  font-family: "GongGothicMedium";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  gap: 10px;
  font-size: 12px;
  font-weight: 400;
  background-color: #FFFFFF;
  border-radius: 8px;
  animation: ${ModalFadeIn} 0.7s forwards 0.3s;
  padding: 20px 10px;
  white-space: pre-line;
`;

const Arrow = styled.div`
  font-size: 50px;
  opacity: 0;
  animation: ${ModalArrow} 1s infinite forwards 1s;
`;

export default GuideAnimation;