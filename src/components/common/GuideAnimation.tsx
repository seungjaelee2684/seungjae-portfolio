import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { GuideFadeIn } from '../../styles/guide';
import { useDispatch } from 'react-redux';
import { guideOpen } from '../../store/modules/guide';
import { LuArrowBigDownDash } from "react-icons/lu";

const GuideAnimation = () => {

  const isGuide = localStorage.getItem("guide");
  const guidePage = localStorage.getItem("guide_page");
  const dispatch = useDispatch();

  return (
    <GuideContainer
      onClick={() => {
        dispatch(guideOpen(false));
      }}>
      <GuideBox
        onClick={(e) => {
          e.stopPropagation();
        }}>
        {guidePage}
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
  top: -10%;
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
  width: 250px;
  height: 100px;
  opacity: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 400;
  background-color: #FFFFFF;
  border-radius: 8px;
  animation: ${ModalFadeIn} 0.7s forwards 0.3s;
`;

const Arrow = styled.div`
  font-size: 50px;
  animation: ${ModalArrow} 1s infinite forwards 1s;
`;

export default GuideAnimation;