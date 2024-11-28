import React from 'react'
import styled from 'styled-components';
import Picture from '../../assets/images/picture.webp';

const Profile = () => {
  return (
    <ProfileContainer>
      <ProfileImage
        src={Picture}
        alt='프로필 이미지' />
      <TextWrapper>
        <NameText>
          이승재 (Lee SeungJae)
        </NameText>
        <Role>
          프론트엔드 개발자
        </Role>
        <DetailDescription>
          {`React와 Typescript에 장점을 둔 높은 성장이 기대되는 개발자입니다.
            끊임없는 자기 계발과 문제 해결에 대한 열정으로 프로젝트 및 IT교육 과정의 경험을 통해 빠르게 성장 중입니다.
            실제 웹 서비스를 운영하거나 인턴 생활을 통해 사용자 중심의 솔루션을 개발하는 경험을 쌓으며, 가치 있는 개발자로 발전해 나가고 있습니다.`}
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
  padding: 24px 0px;
`;

const ProfileImage = styled.img`
  width: 150px;
  min-width: 150px;
  height: 150px;
  border-radius: 100%;
  object-fit: cover;
  object-position: top;
  background-color: #e8f4f5;
  user-select: none;
`;

const TextWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
`;

const NameText = styled.strong`
  font-size: 22px;
  font-weight: 700;
`;

const Role = styled.span`
  font-size: 12px;
  font-weight: 400;
  color: #696969;
`;

const DetailDescription = styled.p`
  font-size: 15px;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.4px;
  margin-top: 8px;
  text-align: start;
  white-space: pre-line;
`;

export default Profile;