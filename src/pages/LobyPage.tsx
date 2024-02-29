import React, { useEffect, useState } from 'react'
import styled, { keyframes } from 'styled-components';
import Wrapper from '../components/common/Wrapper';
import { InBoxContainer } from './AboutMePage';
import CardBG from '../assets/images/picture.webp';
import { GoPlus } from "react-icons/go";
import { useNavigate } from 'react-router-dom';

const LobyPage = () => {

  const navigate = useNavigate();

  return (
    <InBoxContainer>
      <CardWrapper>
        <CardContainer onClick={() => navigate("/about")}>
          <CardBackgroundImage src={CardBG} alt=''/>
          <FilterContainer />
          <CardContent>
            이승재
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
  position: absolute;
  bottom: 20px;
  left: 0;
  font-size: 26px;
  line-height: 100%;
  color: #FFFFFF;
  text-shadow: 0px 0px 4px #616227;
  z-index: 11;
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