import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Wrapper from '../components/common/Wrapper';
import { InBoxContainer } from './AboutMePage';
import CardBG from '../assets/images/picture.webp';
import { GoPlus } from "react-icons/go";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { pageMove } from '../store/modules/pageState';
import { BsFillStarFill } from "react-icons/bs";
import { IoIosPerson } from "react-icons/io";
import { TbArrowBadgeLeft, TbArrowBadgeRight } from "react-icons/tb";
import { modalOpen } from '../store/modules/globalModalOpen';

const LobyPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  type CharactorType = {
    id: number,
    content: string,
  }

  const charactor : CharactorType[] = [
    {id: 1, content: "캐릭터 접속"},
    {id: 2, content: "새 캐릭터 추가"},
  ];
  const [selectCharactor, setSelectCharactor] = useState<number | undefined>();
  console.log("선택 캐릭터", selectCharactor);

  const onClickSelectHandler = (index: number) => {
    if (selectCharactor) {
      if (selectCharactor === index) {
        setSelectCharactor(undefined);
      } else {
        setSelectCharactor(index);
      };
    } else {
      setSelectCharactor(index);
    };
  };

  const selectSaveContainer = () => {
    if (selectCharactor === 1) {
      return (
        <SelectCardContainer onClick={() => onClickSelectHandler(1)}>
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
        <CardContainer onClick={() => onClickSelectHandler(1)}>
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
    if (selectCharactor === 2) {
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
    if (selectCharactor) {
      return (
        <ChoiceButton onClick={() => {
          if (selectCharactor === 1) {
            navigate("/about");
          } else {
            dispatch(modalOpen({ kind: "addCharactor", isopen: true}))
          };
        }}>
          {charactor[selectCharactor - 1]?.content}
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
    dispatch(pageMove("Charactor"));
  }, []);

  return (
    <LobyInBoxContainer>
      <CardWrapper>
        {selectSaveContainer()}
        {selectNewContainer()}
        <NoneCardContainer>
          <IoIosPerson />
        </NoneCardContainer>
        <NoneCardContainer>
          <IoIosPerson />
        </NoneCardContainer>
      </CardWrapper>
      <ChoiceButtonWrapper>
        <PrevNextButton xy="-50%">
          <TbArrowBadgeLeft />
        </PrevNextButton>
        {selectButton()}
        <PrevNextButton xy="50%">
          <TbArrowBadgeRight />
        </PrevNextButton>
      </ChoiceButtonWrapper>
    </LobyInBoxContainer>
  )
};

export const PrevNextButtonMove = keyframes`
  0% {
    opacity: 1;
    transform: translateX(0%);
  }

  100% {
    opacity: 0;
    transform: translateX(var(--xy));
  }
`;

const LobyInBoxContainer = styled(InBoxContainer)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;

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
  gap: 16px;
  padding: 0px 20px;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
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
    max-width: 150px;
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
    max-width: 150px;
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

export const PrevNextButton = styled.div<{ xy : string }>`
  font-size: 50px;
  color: #d4b681;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${PrevNextButtonMove} 1.5s linear infinite;
  cursor: pointer;

  --xy: ${(props) => props.xy};
`;

export default LobyPage;