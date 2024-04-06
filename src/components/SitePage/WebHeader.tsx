import React from 'react'
import styled from 'styled-components';

const WebHeader = () => {
  return (
    <HeaderLayout>
      <HeaderContainer>
        WebHeader
      </HeaderContainer>
    </HeaderLayout>
  )
};

const HeaderLayout = styled.header`
  width: 100%;
  height: 70px;
  position: fixed;
  top: 0;
  left: 0;
`;

const HeaderContainer = styled.nav`
  width: 1320px;
  height: 100%;
  margin: 0px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #FFFFFF;

  @media screen and (max-width: 1320px) {
    width: 96%;
  }
`;

export default WebHeader;