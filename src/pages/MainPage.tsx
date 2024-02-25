import React from 'react'
import styled from 'styled-components';
import Wrapper from '../components/common/Wrapper';

const MainPage = () => {
  return (
    <Wrapper>
      <MainLayOut>
        MainPage
      </MainLayOut>
    </Wrapper>
  )
};

const MainLayOut = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
`;

const EffectAnimation = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #000000;
  position: absolute;
  top: 0;
  left: 0;
`;

const Button = styled.button`
  width: 120px;
  height: 36px;
`

export default MainPage;