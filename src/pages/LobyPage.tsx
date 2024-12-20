import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Wrapper from '../components/common/Wrapper';
import { InBoxContainer } from './AboutMePage';
import CardBG from '../assets/images/picture.webp';
import { GoPlus } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { pageMove } from '../store/modules/pageState';
import { BsFillStarFill } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { modalOpen } from '../store/modules/globalModalOpen';
import { RootState } from '../store/config/configureStore';
import GuideAnimation from '../components/common/GuideAnimation';

const LobyPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isGuide = localStorage.getItem("guide");
  const guide = useSelector((state: RootState) => state.guide);

  type CharacterType = {
    id: number,
    content: string,
  }

  const Character : CharacterType[] = [
    {id: 1, content: "캐릭터 접속"},
    {id: 2, content: "새 캐릭터 추가"},
  ];
  const [selectCharacter, setSelectCharacter] = useState<number | undefined>();

  const onClickSelectHandler = (index: number) => {
    if (selectCharacter) {
      if (selectCharacter === index) {
        setSelectCharacter(undefined);
      } else {
        setSelectCharacter(index);
      };
    } else {
      setSelectCharacter(index);
    };
  };

  const selectSaveContainer = () => {
    if (selectCharacter === 1) {
      return (
        <SelectCardContainer
          onClick={() => onClickSelectHandler(1)}>
          <SelectBackgroundImage src={CardBG} alt=''/>
          <SelectFilterContainer />
          <CardContent>
            <CardTopBox>
              Frontend Developer
            </CardTopBox>
            <CardUnderBox>
              <CardUnderText>
                이승재
              </CardUnderText>
              <Stars>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </Stars>
            </CardUnderBox>
          </CardContent>
        </SelectCardContainer>
      )
    } else {
      return (
        <CardContainer
          onClick={() => onClickSelectHandler(1)} id='lobyContainer'>
          <CardBackgroundImage src={CardBG} alt=''/>
          <FilterContainer />
          <CardContent>
            <CardTopBox>
              Frontend Developer
            </CardTopBox>
            <CardUnderBox>
              <CardUnderText>
                이승재
              </CardUnderText>
              <Stars>
                <BsFillStarFill />
                <BsFillStarFill />
                <BsFillStarFill />
              </Stars>
            </CardUnderBox>
          </CardContent>
        </CardContainer>
      )
    };
  };

  const selectNewContainer = () => {
    if (selectCharacter === 2) {
      return (
        <SelectCardContainer
          style={{
            boxShadow: "#b2b47696 0px 0px 5px 0px",
            backgroundColor: "#27282d"
          }}
          onClick={() => onClickSelectHandler(2)}>
          <SelectFilterContainer />
          <GoPlus />
        </SelectCardContainer>
      )
    } else {
      return (
        <CardContainer
          style={{
            boxShadow: "#b2b47696 0px 0px 5px 0px",
            backgroundColor: "#27282d"
          }}
          onClick={() => onClickSelectHandler(2)}>
          <FilterContainer />
          <GoPlus />
        </CardContainer>
      )
    }
  };

  const selectButton = () => {
    if (selectCharacter) {
      return (
        <ChoiceButton onClick={() => {
          if (selectCharacter === 1) {
            if (isGuide) {
              localStorage.setItem("guide", "about");
            };
            navigate("/about");
          } else {
            dispatch(modalOpen({ kind: "addCharacter", isopen: true}))
          };
        }}>
          {Character[selectCharacter - 1]?.content}
        </ChoiceButton>
      );
    } else {
      return (
        <ChoiceButton>
          캐릭터 선택
        </ChoiceButton>
      )
    }
  };

  useEffect(() => {
    dispatch(pageMove("Character"));
  }, []);

  return (
    <LobyInBoxContainer>
      <CardWrapper>
        <CardInWrapper>
          {(guide) && <GuideAnimation />}
          {selectSaveContainer()}
          {selectNewContainer()}
          <NoneCardContainer>
            <IoIosPerson />
          </NoneCardContainer>
          <NoneCardContainer>
            <IoIosPerson />
          </NoneCardContainer>
        </CardInWrapper>
      </CardWrapper>
      <ChoiceButtonWrapper>
        {selectButton()}
        {(selectCharacter)
          && <ClickNavi>
            Click!
          </ClickNavi>}
      </ChoiceButtonWrapper>
    </LobyInBoxContainer>
  )
};

const ClickButtonAnimation = keyframes`
  0% {
    opacity: 0.6;
    color: #d4b681;
  }

  50% {
    opacity: 1;
    color: #e2dbb7;
  }

  100% {
    opacity: 0.6;
    color: #d4b681;
  }
`;

const LobyInBoxContainer = styled(InBoxContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  overflow: visible;

  @media screen and (max-width: 500px) {
    height: 94%;
    gap: 40px;
  }
`;

const CardWrapper = styled.div`
  width: calc(100% - 40px);
  height: 65%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  position: relative;
  gap: 16px;
  padding: 0px 20px;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
  }
`;

const CardInWrapper = styled.div`
  width: 1048px;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 1048px) {
    width: 100%;
  }

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    gap: 8px;
  }
`;

const CardBackgroundImage = styled.img`
  width: 100%;
  height: 80%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.2s;
`;

const SelectBackgroundImage = styled(CardBackgroundImage)`
  width: 105%;
  height: 85%;
  left: -2.5%;
`;

const FilterContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  background-image: linear-gradient(to top, #000000b1, transparent);
  transition: all 0.2s;
`;

const SelectFilterContainer = styled(FilterContainer)`
  background-image: linear-gradient(to top, #d3d4a433, transparent);
`;

const CardContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100%;
  border: 1px solid #a5a675;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: #dfe0b5c4 0px 0px 8px 1px;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  color: #bcad6a;
  background-color: #393a43;
  font-size: 90px;
  cursor: pointer;

  &:hover {
    box-shadow: #dfe0b5c4 0px 0px 10px 2px;
    border: 1px solid #d3d4a4;
    transform: scale(105%);
    color: #d1c797;
  }

  &:hover ${CardBackgroundImage} {
    width: 105%;
    height: 85%;
    left: -2.5%;
  }

  &:hover ${FilterContainer} {
    background-image: linear-gradient(to top, #d3d4a433, transparent);
  }

  @media screen and (max-width: 1320px) {
    max-height: 80%;
  }

  @media screen and (max-width: 500px) {
    max-width: 140px;
    max-height: 50%;
  }
`;

const SelectCardContainer = styled(CardContainer)`
  box-shadow: #dfe0b5c4 0px 0px 10px 2px;
  border: 1px solid #d3d4a4;
  transform: scale(105%);
  color: #d1c797;
`;

const NoneCardContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 100%;
  border: 1px solid #64652c;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(circle at center, #2a2a30, #1c1c1f);
  color: #15151660;
  font-size: 200px;

  @media screen and (max-width: 1320px) {
    max-height: 80%;
  }

  @media screen and (max-width: 500px) {
    max-width: 140px;
    max-height: 50%;
  }
`;

const CardContent = styled.div`
  width: 100%;
  height: calc(100% - 60px);
  padding: 30px 0px;
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  line-height: 100%;
  z-index: 11;

  @media screen and (max-width: 500px) {
    height: calc(100% - 20px);
    padding: 10px 0px;
  }
`;

const CardTopBox = styled.div`
  width: 100%;
  font-size: 18px;
  color: #FFFFFF;

  @media screen and (max-width: 1320px) {
    font-size: 16px;
  }

  @media screen and (max-width: 836px) {
    font-size: 14px;
  }

  @media screen and (max-width: 500px) {
    font-size: 12px;
  }
`;

const CardUnderBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const CardUnderText = styled.div`
  width: 100%;
  height: 40px;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #e2dbb7;
  background-image: radial-gradient(circle at bottom center, #e2dbb761 0%, transparent 100%);
  text-shadow: 0px 0px 4px #616227;

  @media screen and (max-width: 500px) {
    font-size: 18px;
    height: 20px;
  }
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #e2dbb7;

  @media screen and (max-width: 500px) {
    font-size: 10px;
  }
`;

export const ChoiceButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  user-select: none;
  position: relative;

  @media screen and (max-width: 500px) {
    gap: 10px;
  }
`;

export const ChoiceButton = styled.div`
  width: 240px;
  height: 50px;
  /* background-color: #e2dbb7; */
  border: 1px solid #d4b681;
  border-radius: 30px;
  box-shadow: #aca480 0px 0px 8px 0px;
  text-shadow: 0px 0px 8px #cac5ac;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  color: #d4b681;
  background-image: radial-gradient(circle at bottom center, #0a090ec5, #201d31c5);
  cursor: pointer;

  &:hover {
    color: #e2dbb7;
    border: 1px solid #e2dbb7;
    background-image: radial-gradient(circle at bottom center, #e2dbb724, #201d31c5);
  }

  @media screen and (max-width: 500px) {
    width: 150px;
    height: 40px;
    font-size: 16px;
  }
`;

const ClickNavi = styled.div`
  width: 100%;
  font-size: 24px;
  font-weight: 500;
  line-height: 100%;
  position: absolute;
  top: -60%;
  left: 0;
  z-index: 10;
  letter-spacing: 3px;
  animation: ${ClickButtonAnimation} 1s linear forwards infinite;

  @media screen and (max-width: 500px) {
    font-size: 16px;
  }
`;

export default LobyPage;