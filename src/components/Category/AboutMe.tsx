import React from 'react'
import styled, { keyframes } from 'styled-components';
import CharactorImage from '../../assets/images/picture.png';
import CharactorBG from '../../assets/images/nukki.png';
import { GiWingedArrow } from "react-icons/gi";
import { BsFillStarFill } from "react-icons/bs";

const BoxRotate = keyframes`
    0% {
        transform: rotate(45deg);
    }

    100% {
        transform: rotate(405deg);
    }
`;

const AboutMe = () => {
  return (
    <AboutContainer>
        <AboutWrapper>
            <TopLaneContainer>
                <LeftText>
                    <Icon>
                        <GiWingedArrow />
                    </Icon>
                    Devloper
                </LeftText>
                AboutMe
            </TopLaneContainer>
            <InBoxContainer>
                <BackgroundEffect />
                <BackgroundCharactor src={CharactorBG}/>
                <InBoxContent>
                    <Charactor src={CharactorImage} alt=''/>
                    <RightWrapper>
                        <LaneContainer>
                            <StarWrapper>
                                <BsFillStarFill />
                                <BsFillStarFill />
                                <BsFillStarFill />
                            </StarWrapper>
                        </LaneContainer>
                        <LaneContainer>
                            <IntroduceWrapper>
                                <Front>
                                    Frontend
                                </Front>
                                이승재 (Lee SeungJae)
                            </IntroduceWrapper>
                        </LaneContainer>
                        <DefaultLane>
                            행동특성 : 
                        </DefaultLane>
                    </RightWrapper>
                </InBoxContent>
            </InBoxContainer>
        </AboutWrapper>
    </AboutContainer>
  )
};

const AboutContainer = styled.article`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const AboutWrapper = styled.div`
    width: 90%;
    height: 80%;
    background-color: #27282d;
    box-shadow: #0d0d0e 0px 0px 8px 0px;
`;

const TopLaneContainer = styled.div`
    width: 100%;
    height: 40px;
    background-color: #141519;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 20px;
    box-sizing: border-box;
`;

const LeftText = styled.div`
    color: #FFFFFF;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
`;

const Icon = styled.div`
    color: #d4b681;
    font-size: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const InBoxContainer = styled.div`
    width: 100%;
    height: calc(100% - 40px);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
`;

const BackgroundEffect = styled.div`
    width: 150%;
    height: 50%;
    background-color: #212226;
    position: absolute;
    top: 25%;
    left: -25%;
    animation: ${BoxRotate} 10s linear forwards infinite;
`;

const InBoxContent = styled.section`
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

const Charactor = styled.img`
    width: 400px;
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

const BackgroundCharactor = styled.img`
    width: 80%;
    height: 200%;
    object-fit: contain;
    opacity: 0.2;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9;
`;

const RightWrapper = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    padding-right: 20px;
`;

const LaneContainer = styled.div`
    width: 45%;
    display: flex;
    justify-content: start;
    align-items: center;
    border-bottom: 2px solid #d4b5818d;
    padding: 10px 5px;
    margin-top: 30px;
`;

const DefaultLane = styled(LaneContainer)`
    margin-top: 0px;
    color: #FFFFFF;
    font-size: 14px;
    font-weight: 100;
`;

const StarWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    font-size: 20px;
    color: #ecd1a4;
`;

const IntroduceWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    gap: 8px;
    font-size: 24px;
    color: #FFFFFF;
`;

const Front = styled.div`
    font-size: 16px;
`;

export default AboutMe;