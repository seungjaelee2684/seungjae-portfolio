import React from 'react'
import styled from 'styled-components';

const ConnectPage = () => {
  return (
    <ConnectLayout>
      <Title>
        The End
      </Title>
    </ConnectLayout>
  )
};

const ConnectLayout = styled.article`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #222020;
  color: #FFFFFF;
  font-family: "Nanum Brush Script";
`;

const Title = styled.section`
  font-size: 70px;
  font-weight: 700;
  line-height: 150%;
`;

export default ConnectPage;