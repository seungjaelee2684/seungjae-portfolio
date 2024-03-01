import React from 'react'
import styled from 'styled-components';
import Tistory from '../../assets/icons/tistory.svg';
import Github from '../../assets/icons/github.png';
import { useNavigate } from 'react-router-dom';

const LocationBtn = () => {

  const navigate = useNavigate();

  return (
    <LocationButtonWrapper>
      <LocationButton size={0} onClick={() => window.open("https://github.com/seungjaelee2684")}>
        <LocationIcon src={Github} alt='' />
        Github
      </LocationButton>
      <LocationButton size={0} onClick={() => window.open("https://sean2684.tistory.com/")}>
        <LocationIcon src={Tistory} alt='' />
        Tistory
      </LocationButton>
      <LocationButton size={-4} onClick={() => navigate("/skill")}>
        스킬 장착하러 가기
      </LocationButton>
    </LocationButtonWrapper>
  )
};

const LocationButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 30px;

  @media screen and (max-width: 1320px) {
    gap: 20px;
  }

  @media screen and (max-width: 836px) {
    gap: 16px;
  }
`;

const LocationButton = styled.div<{ size: number }>`
  width: 200px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-family: "GongGothicMedium";
  font-size: ${(props) => props.size + 24}px;
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

  @media screen and (max-width: 1320px) {
    width: 160px;
    height: 60px;
    font-size: ${(props) => props.size + 18}px;
    gap: 10px;
  }

  @media screen and (max-width: 836px) {
    width: 100px;
    height: 40px;
    gap: 5px;
    font-size: ${(props) => props.size + 12}px;
  }
`;

const LocationIcon = styled.img`
  width: 40px;
  height: 40px;
  object-fit: cover;

  @media screen and (max-width: 1320px) {
    width: 30px;
    height: 30px;
  }

  @media screen and (max-width: 836px) {
    width: 20px;
    height: 20px;
  }
`;

export default LocationBtn;