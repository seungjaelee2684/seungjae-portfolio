import React from 'react'
import styled, { keyframes } from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
      <LoadingBox $delay='0.1s' />
      <LoadingBox $delay='0.4s' />
      <LoadingBox $delay='0.7s' />
    </LoadingContainer>
  )
};

const LoadingAnimation = keyframes`
  0% {
    background-color: #0c5ba5;
    transform: scale(1);
  }

  50% {
    background-color: #177edf;
    transform: scale(1.5);
  }

  100% {
    background-color: #0c5ba5;
    transform: scale(1);
  }
`;

const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 25;
  backdrop-filter: blur(3px);
  background-color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

const LoadingBox = styled.div<{ $delay: string }>`
  width: 18px;
  height: 18px;
  border-radius: 100%;
  background-color: #177edf;
  animation: ${LoadingAnimation} 1.5s linear infinite forwards;
  animation-delay: ${(props) => props.$delay};
`;

export default Loading;