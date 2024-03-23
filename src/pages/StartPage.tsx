import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { pageMove } from '../store/modules/pageState';
import Background from '../assets/images/start_back.jpg';
import { useNavigate } from 'react-router-dom';

const StartPage = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(pageMove("Main"));
  }, []);

  return (
    <StartGameContainer>
      <StartGameOutWrapper>
        <BackgroundImage src={Background} alt=''/>
        <Effect />
        <StartGameWrapper>
          Start Game
          <ButtonWrapper>
            <DefaultButton
              onClick={() => {
                localStorage.setItem("guide", "true");
                navigate("/loby");
              }}>
              <HoverButton />
              <ButtonText >
                New Game
              </ButtonText>
            </DefaultButton>
            <DefaultButton>
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

const StartGameContainer = styled.article`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 20;
  color: #85c4ff;
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
  position: absolute;
  top: 0;
  left: 0;
  z-index: 23;
`;

const Effect = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #000000b0;
  backdrop-filter: blur(4px);
  top: 0;
  left: 0;
  z-index: 24;
`;

const StartGameWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 25;
  font-size: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 100px;
`;

const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const HoverButton = styled.div`
  width: 20%;
  height: 60%;
  background-color: #8dc8ffd6;
  position: absolute;
  bottom: 0;
  left: 0;
  opacity: 0;
  transition: all 0.3s;
  z-index: 24;
  clip-path: polygon(0% 0%, 100% 50%, 100% 100%, 0% 100%);
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
  width: 180px;
  height: 40px;
  position: relative;
  outline: none;
  border: none;
  background: none;
  font-family: "GongGothicMedium";
  color: #4876a0;
  cursor: pointer;

  &:hover ${HoverButton} {
    opacity: 1;
    width: 110%;
  }

  &:hover {
    color: #FFFFFF;
  }
`;

export default StartPage;