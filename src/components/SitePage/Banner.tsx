import React from 'react'
import styled from 'styled-components';
import Picture from '../../assets/images/picture.webp';

const Banner = () => {
  return (
    <BannerContainer>
      <ProfileImage src={Picture} alt=''/>
    </BannerContainer>
  )
};

const BannerContainer = styled.section`
  width: 100%;
  height: 700px;
  background-color: #222020;
  color: #FFFFFF;
  position: relative;

  @media screen and (max-width: 1320px) {
    height: 500px;
  }
`;

const ProfileImage = styled.img`
  width: auto;
  height: 80%;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  right: 10%;
`;

export default Banner;