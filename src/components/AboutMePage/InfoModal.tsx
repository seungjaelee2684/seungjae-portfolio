import React from 'react'
import styled from 'styled-components';

interface InfoModalProps {
  statusModal: {
    information: boolean,
    state: number | undefined
  };
};

const InfoModal : React.FC<InfoModalProps> = ({ statusModal }) => {

  const { information, state } = statusModal;

  return (
    <ModalContainer>
      <ModalInWrapper>
        {state}
      </ModalInWrapper>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  width: 300px;
  height: 400px;
  position: absolute;
  top: 50px;
  left: 0;
  overflow: hidden;
  z-index: 13;
  border: 1px solid #208bf0ab;
`;

const ModalInWrapper = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(to top, #3b80c0ef, #10395fee);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default InfoModal;