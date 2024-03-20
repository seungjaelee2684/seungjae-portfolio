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
    dispatch(pageMove(""));
  }, []);

  return (
    <StartGameContainer>
      <StartGameOutWrapper>
        <BackgroundImage src={Background} alt=''/>
        <Effect />
        <StartGameWrapper>
          Start Game
          <ButtonWrapper>
            <Button onClick={() => navigate("/loby")}>
              New Game
            </Button>
            <DefaultButton>
              Continue
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

const DefaultButton = styled.button`
  width: 240px;
  height: 60px;
  outline: none;
  border: none;
  background: none;
  color: #4876a0;
  font-family: "GongGothicMedium";
  font-size: 28px;
  line-height: 140%;
  cursor: none;
`;

const Button = styled(DefaultButton)`
  background: none;
  color: #85c4ff;
`;

export default StartPage;