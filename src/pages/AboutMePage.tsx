import React, { useEffect, useRef, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import CharacterImage from '../assets/images/picture.webp';
import CharacterBG from '../assets/images/nukki.webp';
import { BsFillStarFill } from "react-icons/bs";
import { GiSpikesHalf, GiLifeSupport } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";
import { useDispatch, useSelector } from 'react-redux';
import { pageMove } from '../store/modules/pageState';
import LocationBtn from '../components/AboutMePage/LocationBtn';
import InfoModal from '../components/AboutMePage/InfoModal';
import StatusLane from '../components/AboutMePage/StatusLane';
import GuideAnimation from '../components/common/GuideAnimation';
import { RootState } from '../store/config/configureStore';

const AboutMePage = () => {

  const dispatch = useDispatch();
  const guide = useSelector((state: RootState) => state.guide);
  const infoModalRef = useRef<HTMLDivElement>(null);

  const [statusModal, setStatusModal] = useState<{
    information: boolean,
    state: number | undefined
  }>({
    information: false,
    state: undefined
  });
  const { information, state } = statusModal;

  useEffect(() => {
    dispatch(pageMove("About Us"));

    const handleClickOutside = (event: any) => {
      if (infoModalRef.current && !infoModalRef.current.contains(event.target)) {
        setStatusModal({ ...statusModal, information: false, state: undefined });
      };
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <InBoxContainer>
      <BackgroundEffect />
      <SecondBackgroundEffect />
      <BackgroundCharacter src={CharacterBG} />
      <InBoxContent>
        <Character src={CharacterImage} alt='' />
        <RightWrapper>
          <LaneContainer>
            <StarWrapper>
              <BsFillStarFill />
              <BsFillStarFill />
              <BsFillStarFill />
            </StarWrapper>
          </LaneContainer>
          <LaneContainer>
            {(guide) && <GuideAnimation />}
            <IntroduceWrapper>
              <Front>
                Frontend Developer
              </Front>
              <NameWrapper>
                이승재 (Lee SeungJae)
                <NameIconWrapper
                  ref={infoModalRef}
                  onClick={() => {
                    setStatusModal({ ...statusModal, information: !information, state: 4 });
                  }}>
                  <SlMagnifier />
                </NameIconWrapper>
              </NameWrapper>
              <StatusText>
                <NameWrapper>
                  <StatusIcons>
                    <GiLifeSupport />
                  </StatusIcons>
                  불멸자
                </NameWrapper>
                <NameWrapper>
                  <StatusIcons>
                    <RiSwordFill />
                  </StatusIcons>
                  전투력
                  <div style={{ color: "#FFFFFF" }}>
                    01065325635
                  </div>
                </NameWrapper>
                {(information) && <InfoModal statusModal={statusModal} />}
              </StatusText>
            </IntroduceWrapper>
          </LaneContainer>
          <StatusLane statusModal={statusModal} setStatusModal={setStatusModal} />
          <LaneContainer
            style={{
              fontFamily: "EF_watermelonSalad",
              fontSize: "14px",
              fontWeight: "600",
              borderBottom: "none"
            }}>
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
              <LocationBtn />
            </MyIntroBox>
          </LaneContainer>
        </RightWrapper>
      </InBoxContent>
    </InBoxContainer>
  )
};

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

const CharacterAppear = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.8;
  }
`;

export const InBoxContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
  
  ::-webkit-scrollbar {
   opacity: 0;
  }

  @media screen and (max-width: 500px) {
    padding-bottom: 60px;
    height: calc(100% - 60px);
  }
`;

export const BackgroundEffect = styled.div`
  width: 200%;
  height: 350%;
  background-color: #212226ac;
  border-radius: 90%;
  position: absolute;
  top: 50%;
  right: -50%;
  animation: ${BoxRotate} 20s linear forwards infinite;
`;

export const SecondBackgroundEffect = styled.div`
  width: 200%;
  height: 400%;
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
  display: flex;
  justify-content: center;
  align-items: end;

  @media screen and (max-width: 500px) {
    height: calc(100% - 60px);
  }
`;

export const Character = styled.img`
  width: 600px;
  height: auto;
  object-fit: cover;
  opacity: 0;
  position: absolute;
  bottom: 0;
  left: 10%;
  animation: ${CharacterAppear} 0.5s forwards 0.2s;

  @media screen and (max-width: 1320px) {
    width: 400px;
    left: 5%;
  }

  @media screen and (max-width: 836px) {
    width: 300px;
  }

  @media screen and (max-width: 500px) {
    width: 160px;
    bottom: auto;
    top: 20px;
    left: calc(50% - 80px);
  }
`;

export const BackgroundCharacter = styled.img`
  width: 80%;
  height: 150%;
  object-fit: contain;
  opacity: 0.2;
  position: absolute;
  top: 0;
  left: 0;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const RightWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  padding-right: 20px;

  @media screen and (max-width: 836px) {
    height: 70%;
    align-items: center;
  }
`;

export const LaneContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: start;
  align-items: center;
  border-bottom: 1px solid #e6ca9b;
  padding: 40px 20px 40px 0px;
  gap: 10px;
  position: relative;

  @media screen and (max-width: 1600px) {
    padding: 20px 10px 20px 0px;
  }

  @media screen and (max-width: 1320px) {
    width: 55%;
  }

  @media screen and (max-width: 500px) {
    width: calc(100% - 20px);
    padding: 10px;
  }
`;

export const DefaultLane = styled(LaneContainer)`
  padding: 5px 20px 5px 0px;
  color: #FFFFFF;
  font-family: "EF_watermelonSalad";
  font-size: 18px;
  font-weight: 600;

  @media screen and (max-width: 1600px) {
    padding: 5px 10px 5px 0px;
    font-size: 16px;
  }

  @media screen and (max-width: 1320px) {
    padding: 3px 10px 3px 0px;
    font-size: 14px;
  }

  @media screen and (max-width: 836px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  font-size: 32px;
  color: #ecd1a4;

  @media screen and (max-width: 1600px) {
    font-size: 28px;
    gap: 8px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 24px;
  }

  @media screen and (max-width: 500px) {
    font-size: 14px;
  }
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

  @media screen and (max-width: 1600px) {
    font-size: 34px;
    gap: 5px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 30px;
  }

  @media screen and (max-width: 500px) {
    font-size: 20px;
  }
`;

export const Front = styled.div`
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 1600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const StatusText = styled(Front)`
  margin-top: 8px;
  color: #acb2c9;
  font-size: 18px;
  position: relative;

  @media screen and (max-width: 1600px) {
    font-size: 14px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 8px;
    margin-top: 3px;
  }
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  margin-left: 20px;
  position: relative;

  @media screen and (max-width: 836px) {
    gap: 5px;
    margin-left: 10px;
  }
`;

const StatusIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28px;

  @media screen and (max-width: 1600px) {
    font-size: 24px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 22px;
  }

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export const NameWrapper = styled(StatusWrapper)`
  margin-left: 0px;
  gap: 5px;
  justify-content: start;
  text-align: start;

  @media screen and (max-width: 500px) {
    gap: 3px;
  }
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

  @media screen and (max-width: 1600px) {
    min-width: 32px;
    height: 32px;
    font-size: 22px;
  }

  @media screen and (max-width: 1320px) {
    min-width: 28px;
    height: 28px;
    font-size: 18px;
  }
`;

export const StatusIcon = styled.div<{ color: string, size: number }>`
  color: #FFFFFF;
  font-size: ${(props) => props.size + 32}px;
  width: 40px;
  height: 40px;
  background-color: ${(props) => props.color};
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #00000090 0px 0px 8px 0px;
  cursor: pointer;

  @media screen and (max-width: 1600px) {
    width: 32px;
    height: 32px;
    font-size: ${(props) => props.size + 26}px;
  }

  @media screen and (max-width: 1320px) {
    width: 24px;
    height: 24px;
    font-size: ${(props) => props.size + 20}px;
  }
`;

export const IntroTopLane = styled.div`
  width: 100%;
  font-size: 18px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  color: #FFFFFF;

  @media screen and (max-width: 1600px) {
    font-size: 16px;
  }

  @media screen and (max-width: 1320px) {
    font-size: 14px;
  }

  @media screen and (max-width: 836px) {
    font-size: 12px;
  }

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const MyIntroBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 30px;

  @media screen and (max-width: 1600px) {
    gap: 24px;
  }

  @media screen and (max-width: 1320px) {
    gap: 20px;
  }

  @media screen and (max-width: 836px) {
    gap: 16px;
  }

  @media screen and (max-width: 500px) {
    gap: 8px;
  }
`;

export const IntroContentWrapper = styled.div`
  width: 90%;
  font-family: "GongGothicMedium";
  font-size: 18px;
  font-weight: 400;
  line-height: 140%;
  text-align: start;
  color: #FFFFFF;
  white-space: pre-line;

  @media screen and (max-width: 1600px) {
    font-size: 16px;
    line-height: 120%;
  }

  @media screen and (max-width: 1320px) {
    font-size: 14px;
    line-height: 120%;
  }

  @media screen and (max-width: 836px) {
    font-size: 12px;
    line-height: 110%;
  }

  @media screen and (max-width: 500px) {
    font-size: 9px;
  }
`;

export default AboutMePage;