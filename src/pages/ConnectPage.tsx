import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import { MdContentCopy } from "react-icons/md";
import CopyAlert from '../components/ConnectPage/CopyAlert';
import { GuideFadeIn } from '../styles/guide';
import { useNavigate } from 'react-router-dom';

const ConnectPage = () => {

  const navigate = useNavigate();
  const [isCopy, setIsCopy] = useState<boolean>(false);

  const onClickCopyHandler = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setIsCopy(true);
    } catch (e) {
      alert("복사에 실패하였습니다.");
    };
  };

  return (
    <ConnectLayout>
      <InContainer>
        <Title>
          The End
        </Title>
        <SubTitle>
          Thanks for watching
        </SubTitle>
        <ButtonWrapper>
          <Button>
            <ButtonTitle onClick={() => navigate("/jaelog/contact")}>
              이메일 보내기
            </ButtonTitle>
          </Button>
          <Button>
            <ButtonTitle>
              연락하기
            </ButtonTitle>
            <ButtonInfo>
              010-6532-5635
              <ButtonIcon onClick={() => onClickCopyHandler("01065325635")}>
                <MdContentCopy />
              </ButtonIcon>
            </ButtonInfo>
          </Button>
        </ButtonWrapper>
        <ContentWrapper>
          <Content>
            made by 이승재
          </Content>
        </ContentWrapper>
      </InContainer>
      {(isCopy)
        && <CopyAlert setIsCopy={setIsCopy}/>}
    </ConnectLayout>
  )
};

const Appear = keyframes`
  0% {
    transform: translateY(110%);
  }

  100% {
    transform: translateY(0%);
  }
`;

const ConnectLayout = styled.article`
  width: 100%;
  height: 100vh;
  position: relative;
  background-color: #1f1e22;
  color: #FFFFFF;
  font-family: "Nanum Brush Script";
  overflow: hidden;
`;

const InContainer = styled.section`
  width: 60%;
  height: 100%;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  animation: ${Appear} 6s linear forwards;

  @media screen and (max-width: 836px) {
    width: 90%;
  }
`;

const Title = styled.div`
  font-size: 90px;
  font-weight: 700;
  line-height: 150%;
  user-select: none;

  @media screen and (max-width: 500px) {
    font-size: 60px;
  }
`;

const SubTitle = styled(Title)`
  font-size: 54px;

  @media screen and (max-width: 500px) {
    font-size: 30px;
  }
`;

const ButtonWrapper = styled.div`
  width: 100%;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 20px;
  opacity: 0;
  animation: ${GuideFadeIn} 0.4s forwards 6.4s;
`;

const Button = styled.div`
  width: 160px;
  height: 50px;
  font-size: 36px;
  line-height: 120%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 60px;
  overflow: hidden;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    width: 600px;

    @media screen and (max-width: 500px) {
      width: 300px;
    }
  }

  @media screen and (max-width: 836px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    height: 30px;
    font-size: 20px;
    width: 300px;
    gap: 30px;
  }
`;

const ButtonTitle = styled.div`
  font-size: 36px;
  min-width: 140px;
  display: flex;
  justify-content: start;
  align-items: center;

  @media screen and (max-width: 836px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
    min-width: 60px;
  }
`;

const ButtonInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 500px) {
    gap: 10px;
  }
`;

const ButtonIcon = styled.div`
  font-size: 28px;

  @media screen and (max-width: 836px) {
    font-size: 20px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
`;

const ContentWrapper = styled.div`
  width: 100%;
  margin-top: 120px;
  font-family: "KCCChassam";
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 10px;

  @media screen and (max-width: 500px) {
    margin-top: 250px;
  }
`;

const Content = styled.div`
  font-size: 28px;
  line-height: 120%;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export default ConnectPage;