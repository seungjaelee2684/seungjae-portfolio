import React from 'react'
import styled from 'styled-components';

const InfoModal = () => {
  return (
    <ModalContainer>
        InfoModal
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
    width: 300px;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
`;

export default InfoModal;