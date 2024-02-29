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

const LobyPage = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(pageMove("About Us"));
  }, []);

  return (
    <InBoxContainer>
      <CardWrapper>
        <CardContainer onClick={() => navigate("/about")}>
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
        <CardContainer
          style={{
            boxShadow: "#b2b47696 0px 0px 5px 0px",
            backgroundColor: "#27282d"
          }}>
          <FilterContainer />
          <GoPlus />
        </CardContainer>
        <NoneCardContainer>
          <SlashBar />
        </NoneCardContainer>
        <NoneCardContainer>
          <SlashBar />
        </NoneCardContainer>
      </CardWrapper>
    </InBoxContainer>
  )
};

const CardWrapper = styled.div`
  width: calc(100% - 40px);
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0px 20px;
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

const StatusContent = styled.div`
  font-size: 20px;
  line-height: 100%;

`;

const CardContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 80%;
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
`;

const NoneCardContainer = styled.div`
  max-width: 250px;
  width: 100%;
  height: 80%;
  border: 1px solid #64652c;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s;
  position: relative;
  overflow: hidden;
  background-color: #1c1c1f;
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
`;

const CardTopBox = styled.div`
  width: 100%;
  font-size: 18px;
  color: #FFFFFF;
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
`;

const Stars = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: #e2dbb7;
`;

const SlashBar = styled.div`
  width: 4px;
  height: 140%;
  position: absolute;
  top: -25%;
  left: 50%;
  transform: rotate(20deg);
  background-color: #64652c;
`;

export default LobyPage;