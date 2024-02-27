import React from 'react'
import styled, { keyframes } from 'styled-components';
import CharactorImage from '../assets/images/picture.png';
import CharactorBG from '../assets/images/nukki.png';
import { GiWingedArrow } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";
import { GiBarbedSun } from "react-icons/gi";
import { GiCruiser } from "react-icons/gi";
import { GiSpiderWeb } from "react-icons/gi";
import { BsMinecartLoaded } from "react-icons/bs";
import { GiRaiseSkeleton } from "react-icons/gi";
import { RiSwordFill } from "react-icons/ri";
import { SlMagnifier } from "react-icons/sl";

const BoxRotate = keyframes`
    0% {
        transform: rotate(-45deg);
    }

    100% {
        transform: rotate(-405deg);
    }
`;

const AboutMePage = () => {
  return (
    <AboutContainer>
      <AboutWrapper>
        <TopLaneContainer>
          <LeftText>
            <Icon>
              <GiWingedArrow />
            </Icon>
            Developer
          </LeftText>
          About Me
        </TopLaneContainer>
        <InBoxContainer>
          <BackgroundEffect />
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
                      <GiRaiseSkeleton style={{ fontSize: "24px" }} />
                      네크로맨서
                    </NameWrapper>
                    <NameWrapper>
                      <RiSwordFill style={{ fontSize: "24px" }} />
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
                <GiBarbedSun style={{ color: "#e5cca0" }} />
                행동특성
                <StatusWrapper>
                  <StatusIcon color="#294b94">
                    <GiCruiser />
                  </StatusIcon>
                  <StatusIcon color="#237014" style={{ fontSize: "22px" }}>
                    <GiSpiderWeb />
                  </StatusIcon>
                  <StatusIcon color="#999b13" style={{ fontSize: "20px" }}>
                    <BsMinecartLoaded />
                  </StatusIcon>
                </StatusWrapper>
              </DefaultLane>
              <UnderBar />
              <LaneContainer>
                <MyIntroBox>
                  <IntroTopLane>
                    <GiBarbedSun style={{ color: "#e5cca0" }} />
                    캐릭터 소개
                  </IntroTopLane>
                </MyIntroBox>
              </LaneContainer>
            </RightWrapper>
          </InBoxContent>
        </InBoxContainer>
      </AboutWrapper>
    </AboutContainer>
  )
};

export const AboutContainer = styled.article`
  width: 1320px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const AboutWrapper = styled.div`
  width: 90%;
  height: 80%;
  background-color: #27282d;
  box-shadow: #0d0d0e 0px 0px 8px 0px;
`;

export const TopLaneContainer = styled.div`
  width: 100%;
  height: 50px;
  background-color: #141519;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 20px;
  box-sizing: border-box;
  font-size: 24px;
`;

export const LeftText = styled.div`
  color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 18px;
`;

export const Icon = styled.div`
  color: #d4b681;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const InBoxContainer = styled.div`
  width: 100%;
  height: calc(100% - 50px);
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

export const BackgroundEffect = styled.div`
  width: 100%;
  height: 150%;
  background-color: #212226;
  position: absolute;
  top: 10%;
  right: -25%;
  animation: ${BoxRotate} 10s linear forwards infinite;
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
  width: 500px;
  height: auto;
  object-fit: cover;
  opacity: 0.8;
  position: absolute;
  bottom: 0;
  left: 0;

  @media screen and (max-width: 836px) {
    width: 300px;
  }
`;

export const BackgroundCharactor = styled.img`
  width: 80%;
  height: 200%;
  object-fit: contain;
  opacity: 0.2;
  position: absolute;
  top: 0;
  right: 0;
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
  width: 45%;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 20px 5px;
  gap: 10px;
`;

export const DefaultLane = styled(LaneContainer)`
  padding: 8px 5px;
  color: #FFFFFF;
  font-size: 16px;
  font-weight: 100;
`;

export const UnderBar = styled.div`
  width: calc(45% + 10px);
  height: 1px;
  background-image: linear-gradient(to right, #d4b581, transparent);
`;

export const StarWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  font-size: 26px;
  color: #ecd1a4;
`;

export const IntroduceWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  gap: 8px;
  font-size: 32px;
  color: #FFFFFF;
`;

export const Front = styled.div`
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const StatusText = styled(Front)`
  margin-top: 8px;
  color: #acb2c9;
  font-size: 14px;
`;

export const StatusWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-left: 10px;
`;

export const NameWrapper = styled(StatusWrapper)`
  margin-left: 0px;
  gap: 5px;
`;

export const NameIconWrapper = styled.div`
  width: 34px;
  height: 34px;
  border: 1px solid #adadadba;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 22px;
  cursor: pointer;
  margin-left: 5px;

  &:hover {
    color: #ADADAD;
  }
`;

export const StatusIcon = styled.div<{ color: string }>`
  color: #FFFFFF;
  font-size: 28px;
  width: 30px;
  height: 30px;
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
`;

export default AboutMePage;