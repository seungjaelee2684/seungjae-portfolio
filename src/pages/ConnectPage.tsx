import React from 'react'
import styled from 'styled-components';

const ConnectPage = () => {
  return (
    <ConnectLayout>
      <InContainer>
        <Title>
          The End
        </Title>
      </InContainer>
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

const InContainer = styled.section`
  width: 80%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 80px;
  font-weight: 700;
  line-height: 150%;
  user-select: none;
`;

export default ConnectPage;