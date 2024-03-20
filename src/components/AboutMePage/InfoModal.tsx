import React from 'react'
import styled from 'styled-components';
import { CharacterStatus } from '../../utils/Status';

interface InfoModalProps {
  statusModal: {
    information: boolean,
    state: number | undefined
  };
};

const InfoModal : React.FC<InfoModalProps> = ({ statusModal }) => {

  const { information, state } = statusModal;

  const modalChange = () => {
    if (information) {
      return (
        <ModalInWrapper style={{gap: "10px"}}>
          <InformationTitle>
            캐릭터 배경
          </InformationTitle>
          <InformationContent style={{marginTop: "10px"}}>
            탄생: 1997.01.21 (27)
          </InformationContent>
          <InformationContent>
            코드네임: sean2684@naver.com
          </InformationContent>
        </ModalInWrapper>
      )
    } else {
      return (
        <ModalInWrapper>
          <Icons>
            {(state) && CharacterStatus[state - 1]?.icon}
          </Icons>
          <TitleBox>
            {(state) && CharacterStatus[state - 1]?.title}
          </TitleBox>
          <Content>
            {(state) && CharacterStatus[state - 1]?.content}
          </Content>
        </ModalInWrapper>
      )
    };
  };

  return (
    <ModalContainer left={(information) ? 60 : 0}>
      {modalChange()}
    </ModalContainer>
  )
};

const ModalContainer = styled.div<{ left: number }>`
  width: 300px;
  height: 200px;
  position: absolute;
  top: 30px;
  left: ${(props) => props.left}px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 13;
  border: 1px solid #208bf0ab;
  background-image: linear-gradient(to top, #3b80c0ef, #10395fee);

  @media screen and (max-width: 500px) {
    left: ${(props) => props.left - 40}px;
  }
`;

const ModalInWrapper = styled.div`
  width: 75%;
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
  top: 8%;
  left: -15%;
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
  font-size: 11px;
  line-height: 140%;
  white-space: pre-line;
`;

const InformationTitle = styled(TitleBox)`
  justify-content: start;
  font-size: 20px;
`;

const InformationContent = styled(Content)`
  justify-content: start;
  font-size: 14px;
`;

export default InfoModal;