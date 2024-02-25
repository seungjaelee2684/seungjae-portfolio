import React from 'react'
import styled from 'styled-components';
import Wrapper from '../components/common/Wrapper';

const MainPage = () => {
  return (
    <Wrapper>
        <Button onClick={() => window.location.href = "/about"}>
            MainPage
        </Button>
    </Wrapper>
  )
};

const Button = styled.button`
    width: 120px;
    height: 36px;
`

export default MainPage;