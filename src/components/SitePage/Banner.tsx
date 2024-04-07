import React from 'react'
import styled from 'styled-components';
import Picture from '../../assets/images/picture.webp';

const Banner = () => {
  return (
    <BannerContainer>
      <ProfileImage src={Picture} alt=''/>
      Banner
    </BannerContainer>
  )
};

const BannerContainer = styled.section`
  width: 100%;
  height: 450px;
  background-color: #222020;
  color: #FFFFFF;
  position: relative;
`;

const ProfileImage = styled.img`
  width: 32%;
  height: auto;
  object-fit: cover;
  position: absolute;
  bottom: 0;
  right: 10%;
`;

export default Banner;