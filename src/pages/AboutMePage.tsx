import React, { useEffect } from 'react'
import styled, { keyframes } from 'styled-components';
import CharactorImage from '../assets/images/picture.webp';
import CharactorBG from '../assets/images/nukki.webp';
import { BsFillStarFill } from "react-icons/bs";
import { GiBarbedSun } from "react-icons/gi";
import { GiCruiser } from "react-icons/gi";
import { GiSpiderWeb } from "react-icons/gi";
import { BsMinecartLoaded } from "react-icons/bs";
import { GiRaiseSkeleton } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { GiSmallFishingSailboat } from "react-icons/gi";
import { GiSpikesHalf } from "react-icons/gi";
import { GiSkullStaff } from "react-icons/gi";
import { useDispatch } from 'react-redux';
import { pageMove } from '../store/modules/pageState';
import Tistory from '../assets/icons/tistory.svg';
import Github from '../assets/icons/github.png';
import { useNavigate } from 'react-router-dom';

const BoxRotate = keyframes`
  0% {
    transform: rotate(-45deg);
  }

  100% {
    transform: rotate(-405deg);
  }
`;

const SecondBoxRotate = keyframes`
  0% {
    transform: rotate(-90deg);
  }

  100% {
    transform: rotate(-450deg);
  }
`;

const CharactorAppear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
`;

const AboutMePage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(pageMove("About Us"));
  }, []);

  return (
    <InBoxContainer>
      <BackgroundEffect />
      <SecondBackgroundEffect />
      <BackgroundCharactor src={CharactorBG} />
      <InBoxContent>
        <Charactor src={CharactorImage} alt='' />
        <RightWrapper>
          <LaneContainer>
            <StarWrapper>
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </StarWrapper>
          </LaneContainer>
          <UnderBar />
          <LaneContainer>
            <IntroduceWrapper>
              <Front>
                Frontend Developer
              </Front>
              <NameWrapper>
                이승재 (Lee SeungJae)
                <NameIconWrapper>
                  <SlMagnifier />
                </NameIconWrapper>
              </NameWrapper>
              <StatusText>
                <NameWrapper>
                  <GiSkullStaff style={{ fontSize: "28px" }} />
                  네크로맨서
                </NameWrapper>
                <NameWrapper>
                  <RiSwordFill style={{ fontSize: "28px" }} />
                  전투력
                  <div style={{ color: "#FFFFFF" }}>
                    01065325635
                  </div>
                </NameWrapper>
              </StatusText>
            </IntroduceWrapper>
          </LaneContainer>
          <UnderBar />
          <DefaultLane>
            <GiSpikesHalf style={{ color: "#e5cca0" }} />
            행동특성
            <StatusWrapper>
              <StatusIcon color="#294b94">
                <GiSmallFishingSailboat />
              </StatusIcon>
              <StatusIcon color="#237014">
                <GiSpiderWeb />
              </StatusIcon>
              <StatusIcon color="#999b13" style={{ fontSize: "28px" }}>
                <BsMinecartLoaded />
              </StatusIcon>
            </StatusWrapper>
          </DefaultLane>
          <UnderBar />
          <LaneContainer style={{ fontFamily: "EF_watermelonSalad", fontSize: "14px", fontWeight: "600" }}>
            <MyIntroBox>
              <IntroTopLane>
                <GiSpikesHalf style={{ color: "#e5cca0" }} />
                캐릭터 소개
              </IntroTopLane>
              <IntroContentWrapper>
                {"자신의 프로젝트에 활력을 불어넣을 수 있고 높은 책임감으로 업무에 끈질기게 달라붙을 수 있는\n프론트엔드 개발자이다."}
              </IntroContentWrapper>
              <IntroContentWrapper>
                {"업무에서는 항상 프로젝트의 성공을 최우선 과제로 여기며, 단순히 모든 작업에 순응하고 따라가는 것이 아닌\n개선했으면 하는 부분들을 팀원과 끊임없이 논의하고 함께 협력하여 목표 달성에 기여한 바가 있다."}
              </IntroContentWrapper>
              <IntroContentWrapper>
                {"자신에게 주어진 과제 및 기술영역뿐만이 아닌 다른 분야, 그리고 디자인의 영역까지 관심을 가지며\n그들과 사용자의 입장까지 고려하며 개발을 이어나가는 타입이다."}
              </IntroContentWrapper>
              <LocationButtonWrapper>
                <LocationButton onClick={() => window.open("https://github.com/seungjaelee2684")}>
                  <LocationIcon src={Github} alt=''/>
                  Github
                </LocationButton>
                <LocationButton onClick={() => window.open("https://sean2684.tistory.com/")}>
                  <LocationIcon src={Tistory} alt=''/>
                  Tistory
                </LocationButton>
                <LocationButton style={{fontSize: "22px"}} onClick={() => navigate("/stack")}>
                  스킬 장착하러 가기
                </LocationButton>
              </LocationButtonWrapper>
            </MyIntroBox>
          </LaneContainer>
        </RightWrapper>
      </InBoxContent>
    </InBoxContainer>
  )
};

export const InBoxContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  
  ::-webkit-scrollbar {
   opacity: 0;
  }
`;

export const BackgroundEffect = styled.div`
  width: 200%;
  height: 250%;
  background-color: #212226ac;
  border-radius: 90%;
  position: absolute;
  top: 50%;
  right: -50%;
  animation: ${BoxRotate} 20s linear forwards infinite;
`;

export const SecondBackgroundEffect = styled.div`
  width: 200%;
  height: 300%;
  background-color: #2d2f3657;
  border-radius: 80%;
  position: absolute;
  top: 30%;
  right: -25%;
  animation: ${SecondBoxRotate} 20s linear forwards infinite;
`;

export const InBoxContent = styled.section`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: end;
`;

export const Charactor = styled.img`
  width: 600px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: ${CharactorAppear} 0.5s forwards 0.2s;

  @media screen and (max-width: 1600px) {
    width: 400px;
  }

  @media screen and (max-width: 836px) {
    width: 300px;
  }

  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;

export const BackgroundCharactor = styled.img`
  width: 80%;
  height: 150%;
  object-fit: contain;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9;
`;

export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding-right: 20px;
`;

export const LaneContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 40px 20px;
  gap: 10px;
`;

export const DefaultLane = styled(LaneContainer)`
  padding: 5px 20px;
  color: #FFFFFF;
  font-family: "EF_watermelonSalad";
  font-size: 18px;
  font-weight: 600;
`;

export const UnderBar = styled.div`
  width: calc(50% + 20px);
  height: 1px;
  background-image: linear-gradient(to right, #e6ca9b, #967c4d, transparent);
`;

export const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 32px;
  color: #ecd1a4;
`;

export const IntroduceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  font-size: 40px;
  color: #FFFFFF;
`;

export const Front = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const StatusText = styled(Front)`
  margin-top: 8px;
  color: #acb2c9;
  font-size: 18px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-left: 20px;
`;

export const NameWrapper = styled(StatusWrapper)`
  margin-left: 0px;
  gap: 5px;
  justify-content: start;
  text-align: start;
`;

export const NameIconWrapper = styled.div`
  min-width: 40px;
  height: 40px;
  border: 1px solid #adadadba;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    color: #ADADAD;
  }
`;

export const StatusIcon = styled.div<{ color: string }>`
  color: #FFFFFF;
  font-size: 32px;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #00000090 0px 0px 8px 0px;
  cursor: pointer;
`;

export const IntroTopLane = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  color: #FFFFFF;
`;

export const MyIntroBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;
`;

export const IntroContentWrapper = styled.div`
  width: 90%;
  font-family: "EF_watermelonSalad";
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  text-align: start;
  color: #FFFFFF;
  white-space: pre-line;
`;

const LocationButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;
`;

const LocationButton = styled.div`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-family: "GongGothicMedium";
  font-size: 24px;
  color: #FFFFFF;
  box-shadow: #177edf6a 0px 0px 4px 0px;
  border: 1px solid #177edf6a;
  background-image: linear-gradient(to top, #3b7fc06a, transparent);
  transition: all 0.2s;
  cursor: pointer;

  &:hover {
    box-shadow: #177edf 0px 0px 4px 0px;
    border: 1px solid #177edf;
    background-image: linear-gradient(to top, #3b7fc0, transparent);
  }
`;

const LocationIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;
`;

export default AboutMePage;