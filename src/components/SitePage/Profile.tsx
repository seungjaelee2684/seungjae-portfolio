import React from 'react'
import styled from 'styled-components';
import Picture from '../../assets/images/picture.webp';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';
import { textLight } from '../../styles/colorToken';
import { FaGithub } from "react-icons/fa";

const Profile = () => {

  const theme = useSelector((state: RootState) => state.darkMode);

  return (
    <ProfileContainer>
      <ProfileWrapper>
        <ProfileImage
          src={Picture}
          alt='프로필 이미지' />
        <Link
          href='https://github.com/seungjaelee2684'
          target='_blank'
          title='github 프로필 바로가기'>
          <FaGithub />
          Github 프로필
        </Link>
      </ProfileWrapper>
      <TextWrapper>
        <NameText>
          이승재 (Lee SeungJae)
        </NameText>
        <Role $color={textLight[theme]}>
          프론트엔드 개발자 | 신입
        </Role>
        <DetailDescription>
          {`React와 Typescript에 장점을 둔, UI/UX 구현에 능숙하며 높은 성장이 기대되는 개발자입니다.
            끊임없는 자기 계발과 문제 해결에 대한 열정으로 프로젝트 및 IT교육 과정의 경험을 통해 빠르게 성장 중입니다.
            주어진 프로젝트에 집중하며, 타 직군과의 커뮤니케이션을 능숙하게 수행합니다.
            실제 웹 서비스를 운영하며, 사용자 중심의 솔루션을 개발하는 경험을 쌓았습니다.
            3개월 간의 인턴 생활을 통해 실전 경험을 익히며, 가치있는 개발자로 거듭나고 있습니다.`}
        </DetailDescription>
      </TextWrapper>
    </ProfileContainer>
  )
};

const ProfileContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: start;
  gap: 32px;
  padding: 44px 0px 24px 0px;
  border-bottom: 1px solid #e9e9e9;

  @media screen and (max-width: 1140px) {
    flex-direction: column;
    align-items: center;
    gap: 24px;
    padding: 16px 0px;
  }
`;

const ProfileWrapper = styled.div`
  width: 150px;
  min-width: 150px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  @media screen and (max-width: 1140px) {
    gap: 8px;
  }
`;

const ProfileImage = styled.img`
  width: 140px;
  height: 140px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  background-color: #e8f4f5;
  user-select: none;
`;

const Link = styled.a`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 700;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }

  @media screen and (max-width: 1140px) {
    font-size: 9px;
  }
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;

  @media screen and (max-width: 1140px) {
    width: 90%;
    gap: 4px;
  }
`;

const NameText = styled.strong`
  font-size: 22px;
  font-weight: 700;

  @media screen and (max-width: 1140px) {
    font-size: 15px;
  }
`;

const Role = styled.span<{ $color: string }>`
  font-size: 14px;
  font-weight: 300;
  color: ${(props) => props.$color};

  @media screen and (max-width: 1140px) {
    font-size: 9px;
  }
`;

const DetailDescription = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.4px;
  margin-top: 8px;
  text-align: start;
  white-space: pre-line;

  @media screen and (max-width: 1140px) {
    font-size: 10px;
    margin-top: 4px;
  }
`;

export default Profile;