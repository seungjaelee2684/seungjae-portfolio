import React from 'react'
import styled from 'styled-components';
import { charactorStatus } from '../../utils/Status';

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
        <Icons>
          {(state) && charactorStatus[state - 1]?.icon}
        </Icons>
        <TitleBox>
          {(state) && charactorStatus[state - 1]?.title}
        </TitleBox>
        <Content>
          {(state) && charactorStatus[state - 1]?.content}
        </Content>
      </ModalInWrapper>
    </ModalContainer>
  )
};

const ModalContainer = styled.div`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 50px;
  left: 0;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 13;
  border: 1px solid #208bf0ab;
  background-image: linear-gradient(to top, #3b80c0ef, #10395fee);
`;

const ModalInWrapper = styled.div`
  width: 90%;
  height: 96%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  color: #FFFFFF;
  position: relative;
`;

const Icons = styled.div`
  font-size: 40px;
  position: absolute;
  top: 30px;
  left: 10px;
`;

const TitleBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 17px;
  line-height: 120%;
  white-space: pre-line;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 12px;
  line-height: 120%;
  white-space: pre-line;
`;

export default InfoModal;