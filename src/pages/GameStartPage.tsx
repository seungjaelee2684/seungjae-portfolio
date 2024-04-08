import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import BG from '../assets/images/main_background.webp';
import CharacterImage from '../assets/images/picture.webp';
import { MdArrowDropDown } from "react-icons/md";
import Contact from '../components/GameStartPage/Contact';
import { GuideFadeIn } from '../styles/guide';

const GameStartPage = () => {

  const searchParams = new URLSearchParams(window.location.search);
  const dungeonValue = searchParams.get("dungeon");
  const talk: string = "저는 프론트엔드 개발자로서 다양한 유저들을 대상으로 연구 및 분석하여 결과를 얻어내는 개발자가 되겠습니다! 또한, 급변하는 기술과 니즈 속에서 자발적으로 학습하고 연구하는 모습을 보이겠습니다!!!";
  const [talkText, setTalkText] = useState<string>("");
  const [count, setCount] = useState<number>(0);
  const [talkStart, setTalkStart] = useState<boolean>(false);
  const [complete, setComplete] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => {
      setTalkStart(true)
    }, 3000);

    const interval = setInterval(() => {
      if (!talkStart) return;
      setTalkText(talkText + talk[count]);
      setCount(count + 1);
    }, 50);

    if (count === talk.length) {
      clearInterval(interval);
      setComplete(true);
    };

    return () => {
      clearInterval(interval);
    }
  }, [talkStart, count]);

  return (
    <ContentContainer>
      <DungeonInfo>
        던전: {dungeonValue}
      </DungeonInfo>
      <Character src={CharacterImage} alt='' />
      <ContentWrapper>
        이승재 (Frontend Developer) - 27세
        <Text>
          {talkText}
          <TypingBar>
            <MdArrowDropDown />
          </TypingBar>
        </Text>
        {(complete) && <Contact />}
      </ContentWrapper>
    </ContentContainer>
  )
};

const Twinkle = keyframes`
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100%{
    opacity: 0;
  }
`;

export const DungeonInfo = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 19;
  font-size: 12px;
  color: #ADADAD;
  padding: 10px;
  user-select: none;
`;

export const ContentContainer = styled.section`
  width: 100%;
  height: calc(100% - 120px);
  position: absolute;
  top: 0;
  left: 0;
  z-index: 18;
  color: #FFFFFF;
  font-family: "GongGothicMedium";
  padding: 60px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
  user-select: none;

  @media screen and (max-width: 500px) {
    height: calc(100% - 160px);
    padding: 80px 0px;
  }
`;

export const Character = styled.img`
  width: 300px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  animation: ${GuideFadeIn} 1s forwards 1s;

  @media screen and (max-width: 1320px) {
    width: 240px;
  }

  @media screen and (max-width: 500px) {
    width: 180px;
  }
`;

export const ContentWrapper = styled.div`
  width: calc(100% - 200px);
  height: 250px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
  padding: 50px 100px;
  font-size: 28px;
  font-weight: 400;
  line-height: 150%;
  opacity: 0;
  position: relative;
  background-image: linear-gradient(to top, #293347b2, #1a1d20b2);
  animation: ${GuideFadeIn} 2s forwards 1.8s;

  @media screen and (max-width: 1320px) {
    width: calc(100% - 160px);
    height: 200px;
    font-size: 20px;
    line-height: 120%;
    padding: 40px 80px;
  }

  @media screen and (max-width: 500px) {
    width: calc(100% - 40px);
    height: 190px;
    font-size: 16px;
    padding: 30px 20px;
    gap: 20px;
  }
`;

export const Text = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  text-align: start;
  white-space: pre-line;
  font-size: 20px;

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

export const TypingBar = styled.div`
  font-size: 40px;
  color: #FFFFFF;
  position: absolute;
  bottom: 10%;
  right: 5%;
  opacity: 0;
  animation: ${Twinkle} 0.8s linear infinite forwards;

  @media screen and (max-width: 500px) {
    font-size: 28px;
  }
`;

export default GameStartPage;