import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Wrapper from '../components/common/Wrapper';

const TypingAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const MainPage = () => {

  const [title, setTitle] = useState("");
  const [count, setCount] = useState(0);
  const completionWord = 'Frontend Dveloper SeungJae';

  useEffect(() => {
    const typingInterval = setInterval(() => {
      setTitle((prevTitleValue) => {
        let result = prevTitleValue ? prevTitleValue + completionWord[count] : completionWord[0];
        setCount(count + 1);

        if (count >= completionWord.length) {
          setCount(0)
          setTitle("")
        }

        return result;
      });
    }, (count >= completionWord.length) ? 1000 : 100);

    return () => {
      clearInterval(typingInterval);
    };
  });

  return (
    <MainLayOut>
      <EffectAnimation>  
        <TitleContainer>
          {title}
          <Bar />
        </TitleContainer>
      </EffectAnimation>
    </MainLayOut>
  )
};

const MainLayOut = styled.div`
  width: 100%;
`;

const EffectAnimation = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #000000;
  color: #FFFFFF;
  position: relative;
  font-family: "GongGothicMedium";
  font-size: 32px;
`;

const TitleContainer = styled.div`
  width: fit-content;
  display: flex;
  align-items: center;
`;

const Bar = styled.div`
  opacity: 0;
  width: 4px;
  height: 32px;
  background-color: #FFFFFF;
  animation: ${TypingAnimation} 1.2s forwards infinite;
  margin-left: 3px;
`;

const Button = styled.div`
  width: 120px;
  height: 120px;
  background-color: pink;
  position: sticky;
  top: 0;
`;

const Button2 = styled.div`
  width: 120px;
  height: 120px;
  background-color: blue;
  position: sticky;
  top: 20%;
`;

export default MainPage;