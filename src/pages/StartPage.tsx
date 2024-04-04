import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled, { keyframes } from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import Background from '../assets/images/main_background.webp';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pageMove("Main"));
    localStorage.removeItem("guide");
  }, []);

  return (
    <StartGameContainer>
      <StartGameOutWrapper>
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
          <ButtonWrapper>
            <DefaultButton
              onClick={() => {
                localStorage.setItem("guide", "loby");
                navigate("/loby");
              }}>
              <HoverButton />
              <ButtonText >
                New Game
              </ButtonText>
            </DefaultButton>
            <DefaultButton
              onClick={() => {
                navigate("/loby");
              }}>
              <HoverButton />
              <ButtonText >
                Continue
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
    transform: scaleX(0);
  }

  100% {
    opacity: 1;
    transform: scaleX(1);
  }
`;

const FadeIn = keyframes`
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
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
  height: calc(100% - 100px);
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
`;

const TitleContainer = styled.div`
  font-size: 100px;
  transform: skewX(-25deg);
  position: relative;
  opacity: 0;
  animation: ${TitleAppear} 1s forwards 0.2s;
`;

const TitleBar = styled.div`
  width: 100%;
  height: 3px;
  background-image: linear-gradient(to right, #55799b9e, #bfe0ff);
  position: absolute;
  bottom: 0;
  left: 10px;
  opacity: 0;
  animation: ${TitleAppear} 0.8s forwards 0.5s;
`;

const SubTitle = styled.div`
  font-size: 24px;
  line-height: 150%;
  color: #55799b;
  margin: 20px 0px 200px 0px;
  opacity: 0;
  animation: ${FadeIn} 0.8s forwards 1.2s;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  opacity: 0;
  animation: ${FadeIn} 1s forwards 1.7s;
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
  font-size: 28px;
  line-height: 140%;
  transition: all 0.3s;
  z-index: 25;
`;

const DefaultButton = styled.button`
  width: 160px;
  height: 40px;
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
`;

export default StartPage;