import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import Background from '../assets/images/main_background.webp';
import { useNavigate } from 'react-router-dom';
import { GuideFadeIn } from '../styles/guide';
import { modalOpen } from '../store/modules/globalModalOpen';
import { FaQuestion } from "react-icons/fa6";

const StartPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const start = localStorage.getItem("start");
  const information = [
    "시작하기에 앞서 오른쪽 하단에 위치한 안내 버튼을 눌러주세요.",
    "가이드의 안내에 따라 새로운 게임(New Game)을 시작하세요!",
    "'Load Game'를 누르면 가이드 없이 시작하실 수 있습니다.",
    "웹 블로그 형태의 포트폴리오를 확인하려면 이곳을 눌러주세요.",
    "채용문의: sean2684@naver.com"
  ];
  const [info, setInfo] = useState<number | undefined>(0);

  useEffect(() => {
    dispatch(pageMove("Main"));
    localStorage.removeItem("guide");
  }, []);

  return (
    <StartGameContainer>
      <StartGameOutWrapper>
        <GuideButton onClick={() => dispatch(modalOpen({ kind: "startGame", isopen: true }))}>
          <QuestionMark>
            <FaQuestion />
          </QuestionMark>
        </GuideButton>
        <BackgroundImage src={Background} alt=''/>
        <Effect />
        <StartGameWrapper>
          <TitleContainer>
            Start Game
            <TitleBar />
          </TitleContainer>
          <SubTitle>
            SeungJae's Portfolio
          </SubTitle>
          <InfoContainer>
            {(info !== undefined) && information[info]}
          </InfoContainer>
          <ButtonWrapper>
            <DefaultButton
              onMouseOver={() => setInfo(1)}
              onMouseLeave={() => setInfo(undefined)}
              onClick={() => {
                localStorage.setItem("guide", "loby");
                navigate("/loby");
              }}>
              <HoverButton />
              <ButtonText>
                New Game
              </ButtonText>
            </DefaultButton>
            <DefaultButton
              onMouseOver={() => setInfo(2)}
              onMouseLeave={() => setInfo(undefined)}
              onClick={() => {
                navigate("/loby");
              }}>
              <HoverButton />
              <ButtonText>
                Load Game
              </ButtonText>
            </DefaultButton>
            <DefaultButton
              onMouseOver={() => setInfo(3)}
              onMouseLeave={() => setInfo(undefined)}
              onClick={() => {
                navigate("/jaelog");
              }}>
              <HoverButton />
              <ButtonText >
                Blog
              </ButtonText>
            </DefaultButton>
            <DefaultButton
              onMouseOver={() => setInfo(4)}
              onMouseLeave={() => setInfo(undefined)}
              onClick={() => {
                navigate("/contact");
              }}>
              <HoverButton />
              <ButtonText>
                Contact
              </ButtonText>
            </DefaultButton>
          </ButtonWrapper>
        </StartGameWrapper>
      </StartGameOutWrapper>
    </StartGameContainer>
  )
};

const TitleAppear = keyframes`
  0% {
    opacity: 0;
    transform: scaleX(0) skewX(-25deg);
  }

  100% {
    opacity: 1;
    transform: scaleX(1) skewX(-25deg);
  }
`;

const TitleBarAppear = keyframes`
  0% {
    opacity: 0;
    transform: translateX(-50%) scaleX(0);
  }

  100% {
    opacity: 1;
    transform: translateX(0%) scaleX(1);
  }
`;

const ButtonMove = keyframes`
  0% {
    opacity: 1;
    transform: rotate(0deg) scale(100%);
  }

  30% {
    opacity: 1;
    transform: rotate(0deg) scale(100%);
  }

  35% {
    opacity: 1;
    transform: rotate(30deg) scale(110%);
  }

  40% {
    opacity: 1;
    transform: rotate(0deg) scale(100%);
  }

  45% {
    opacity: 1;
    transform: rotate(30deg) scale(110%);
  }

  50% {
    opacity: 1;
    transform: rotate(0deg) scale(100%);
  }

  100% {
    opacity: 1;
    transform: rotate(0deg) scale(100%);
  }
`;

const StartGameContainer = styled.article`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  color: #a3d3ff;
  font-family: "GongGothicMedium";
`;

const StartGameOutWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
`;

const GuideButton = styled.div`
  width: 60px;
  height: 60px;
  opacity: 0;
  border-radius: 100%;
  position: absolute;
  bottom: 10%;
  right: 5%;
  z-index: 26;
  box-shadow: #177edf 0px 0px 4px 0px;
  border: 1px solid #177edf;
  background-image: linear-gradient(to top, #3b7fc0, #33526f);
  animation: ${GuideFadeIn} 0.6s forwards 1.7s;
  color: #FFFFFF;
  cursor: pointer;

  &:hover {
    box-shadow: #1f4f7c 0px 0px 4px 0px;
    border: 1px solid #1f4f7c;
    background-image: linear-gradient(to top, #386fa3, transparent);
  }

  @media screen and (max-width: 500px) {
    width: 40px;
    height: 40px;
    bottom: 2%;
    right: 4%;
  }
`;

const QuestionMark = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  animation: ${ButtonMove} 2.4s linear infinite forwards;

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 23;
  user-select: none;
`;

const Effect = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #00000090;
  background-image: linear-gradient(to top, #1e88eb49, #000000be);
  backdrop-filter: blur(1px);
  top: 0;
  left: 0;
  z-index: 24;
`;

const StartGameWrapper = styled.section`
  width: 100%;
  height: calc(100% - 80px);
  margin-top: 80px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 25;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  user-select: none;

  @media screen and (max-width: 1320px) {
    height: calc(100% - 40px);
    margin-top: 40px;
  }

  @media screen and (max-width: 500px) {
    height: calc(100% - 20px);
    margin-top: 20px;
  }
`;

const TitleContainer = styled.div`
  font-size: 100px;
  position: relative;
  opacity: 0;
  animation: ${TitleAppear} 1s forwards 0.2s;

  @media screen and (max-width: 1320px) {
    font-size: 80px;
  }

  @media screen and (max-width: 500px) {
    font-size: 50px;
  }
`;

const TitleBar = styled.div`
  width: 100%;
  height: 3px;
  border-radius: 3px;
  background-image: linear-gradient(to right, #55799b66, #bfe0ff);
  position: absolute;
  bottom: 0;
  left: 10px;
  opacity: 0;
  animation: ${TitleBarAppear} 0.6s forwards 0.7s;
`;

const SubTitle = styled.div`
  font-size: 24px;
  line-height: 150%;
  color: #55799b;
  margin: 20px 0px 0px 0px;
  opacity: 0;
  animation: ${GuideFadeIn} 0.8s forwards 1.2s;

  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const InfoContainer = styled.div`
  color: #FFFFFF;
  min-height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  opacity: 0;
  animation: ${GuideFadeIn} 0.6s forwards 2s;

  @media screen and (max-width: 1320px) {
    font-size: 18px;
    min-height: 160px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
    min-height: 100px;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  opacity: 0;
  animation: ${GuideFadeIn} 1s forwards 1.7s;

  @media screen and (max-width: 500px) {
    gap: 16px;
  }
`;

const HoverButton = styled.div`
  width: 20%;
  height: 30%;
  background-color: #8dc8ffd6;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s ease-in-out;
  z-index: 24;
  clip-path: polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%);
  border-radius: 5px;
`;

const ButtonText = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  font-size: 24px;
  line-height: 140%;
  transition: all 0.3s;
  z-index: 25;

  @media screen and (max-width: 1320px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

const DefaultButton = styled.button`
  width: 160px;
  height: 36px;
  position: relative;
  outline: none;
  border: none;
  background: none;
  font-family: "GongGothicMedium";
  color: #6d96bd;
  cursor: pointer;

  &:hover ${HoverButton} {
    opacity: 1;
    width: 100%;
  }

  &:hover {
    color: #FFFFFF;
  }

  @media screen and (max-width: 1320px) {
    width: 150px;
    height: 28px;
  }

  @media screen and (max-width: 500px) {
    width: 110px;
    height: 30px;
  }
`;

export default StartPage;