import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { IoGameControllerOutline } from "react-icons/io5";

interface WebHeaderProps {
  headerRef: React.RefObject<HTMLDivElement>;
  scrollValue: number;
  setScrollValue: React.Dispatch<React.SetStateAction<number>>;
  onClickMoveHandler: (id: number) => void;
};

const WebHeader : React.FC<WebHeaderProps> = ({ headerRef, scrollValue, setScrollValue, onClickMoveHandler }) => {

  const navigate = useNavigate();

  return (
    <HeaderLayout ref={headerRef}>
      <HeaderContainer>
        <HeaderLogo
          color={(scrollValue) ? "#222020" : "#FEFEFE"}
          hovercolor={(scrollValue) ? "#ADADAD" : "#ADADAD"}
          onClick={() => setScrollValue(1)}>
          import SeungJae
        </HeaderLogo>
        <RightContent>
          <Navigate
            color={(scrollValue) ? "#222020" : "#fefefea6"}
            hovercolor={(scrollValue) ? "#ADADAD" : "#FEFEFE"}
            onClick={() => onClickMoveHandler(2)}>
            ABOUT
          </Navigate>
          <Navigate
            color={(scrollValue) ? "#222020" : "#fefefea6"}
            hovercolor={(scrollValue) ? "#ADADAD" : "#FEFEFE"}
            onClick={() => onClickMoveHandler(3)}>
            SKILL
          </Navigate>
          <Navigate
            color={(scrollValue) ? "#222020" : "#fefefea6"}
            hovercolor={(scrollValue) ? "#ADADAD" : "#FEFEFE"}
            onClick={() => onClickMoveHandler(4)}>
            PROJECT
          </Navigate>
          <Navigate
            color={(scrollValue) ? "#222020" : "#fefefea6"}
            hovercolor={(scrollValue) ? "#ADADAD" : "#FEFEFE"}
            onClick={() => onClickMoveHandler(5)}>
            CONTACT
          </Navigate>
          <GameButton
            color={(scrollValue) ? "#222020" : "#fefefea6"}
            hovercolor={(scrollValue) ? "#ADADAD" : "#FEFEFE"}
            onClick={() => navigate("/")}>
              <IoGameControllerOutline size={20} />
              GAME
          </GameButton>
        </RightContent>
      </HeaderContainer>
    </HeaderLayout>
  )
};

const HeaderLayout = styled.header`
  width: 100%;
  height: 80px;
  top: 0;
  left: 0;
  z-index: 10;
  font-family: "D2Coding";
  user-select: none;
  transition: all 0.2s;
  position: fixed;
  backdrop-filter: blur(5px);

  &:hover {
    background-color: #222020b0;
  }
`;

const HeaderContainer = styled.div`
  width: 1320px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-sizing: border-box;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

const HeaderLogo = styled.div<{ color: string, hovercolor: string }>`
  font-size: 32px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => props.color};
  cursor: pointer;

  @media screen and (max-width: 1320px) {
    font-size: 24px;
  }

  &:hover {
    color: ${(props) => props.hovercolor};
  }
`;

const RightContent = styled.nav`
  font-size: 16px;
  line-height: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  gap: 70px;

  @media screen and (max-width: 1320px) {
    gap: 40px;
    font-size: 12px;
  }
`;

const Navigate = styled.a<{ color: string, hovercolor: string }>`
  font-size: 20px;
  font-weight: 700;
  height: 100%;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  color: ${(props) => props.color};
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hovercolor};
  }

  @media screen and (max-width: 1320px) {
    font-size: 18px;
  }
`;

const GameButton = styled.button<{ color: string, hovercolor: string }>`
  width: 100px;
  height: 38px;
  outline: none;
  border: 1px solid;
  border-radius: 20px;
  color: ${(props) => props.color};
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;

  &:hover {
    color: ${(props) => props.hovercolor};
  }
`;

export default WebHeader;