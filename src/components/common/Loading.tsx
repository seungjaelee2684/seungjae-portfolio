import React from 'react'
import LoadingGif from '../../assets/images/loading.gif';
import styled from 'styled-components';

const Loading = () => {
  return (
    <LoadingContainer>
        <LoadingImg src={LoadingGif} alt="Loading..." />
    </LoadingContainer>
  )
};

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
`;

const LoadingImg = styled.img`
    width: 300px;
    height: auto;
    object-fit: cover;
`;

export default Loading;