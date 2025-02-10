import React from 'react'
import styled from 'styled-components';
import { DateText, RoleText } from './Experience';
import { textLightBlue, textMedium } from '../../styles/colorToken';

interface EducationProps {
  theme: number;
};

const Education = ({ theme }: EducationProps) => {
  return (
    <EducationContainer>
      <EducationLane>
        <ExpiredWrapper>
          <Expired>데브캠프</Expired>
          <DateText $color={textMedium[theme]}>
            2024.03 - 2024.03
          </DateText>
          <RoleText $color={textLightBlue[theme]}>
            팀 스파르타
          </RoleText>
        </ExpiredWrapper>
        <EducationContent>
          <Chapter>
            Chapter 1. 라이브러리 이해(shadcn-ui, zod, React-Hook-Form)
          </Chapter>
          <Chapter>
            Chapter 2. 회원가입, 로그인 기능 구현
          </Chapter>
          <Chapter>
            Chapter 3. 결제시스템 구상
          </Chapter>
        </EducationContent>
      </EducationLane>
      <EducationLane>
        <ExpiredWrapper>
          <Expired>이노베이션 캠프</Expired>
          <DateText $color={textMedium[theme]}>
            2023.05 - 2024.09
          </DateText>
          <RoleText $color={textLightBlue[theme]}>
            팀 스파르타
          </RoleText>
        </ExpiredWrapper>
        <EducationContent>
          <Chapter>
            Chapter 1. 웹 미니 프로젝트
          </Chapter>
          <Chapter>
            Chapter 2. 프로그래밍 기초
          </Chapter>
          <Chapter>
            Chapter 3. 주특기(React)
          </Chapter>
          <Chapter>
            Chapter 4. 클론 코딩 프로젝트
          </Chapter>
          <Chapter>
            Chapter 5. 실전 프로젝트
          </Chapter>
        </EducationContent>
      </EducationLane>
      <EducationLane>
        <ExpiredWrapper>
          <Expired>계명대학교</Expired>
          <DateText $color={textMedium[theme]}>
            2016.03 - present
          </DateText>
        </ExpiredWrapper>
        <Chapter>
          휴학 중
        </Chapter>
      </EducationLane>
      <EducationLane>
        <ExpiredWrapper>
          <Expired>매천고등학교</Expired>
          <DateText $color={textMedium[theme]}>
            2013.03 - 2016.02
          </DateText>
        </ExpiredWrapper>
        <Chapter>
          고등학교 졸업
        </Chapter>
      </EducationLane>
    </EducationContainer>
  )
};

const EducationContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 60px;

  @media screen and (max-width: 1140px) {
    gap: 40px;
  }
`;

const EducationLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;

  @media screen and (max-width: 1140px) {
    flex-direction: column;
    gap: 20px;
  }
`;

const ExpiredWrapper = styled.div`
  min-width: 240px;
  width: 240px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;

  @media screen and (max-width: 1140px) {
    min-width: 90px;
    width: 90px;
    gap: 4px;
  }
`;

const Expired = styled.h3`
  width: 100%;
  font-size: 18px;
  font-weight: 700;
  text-align: start;

  @media screen and (max-width: 1140px) {
    font-size: 13px;
  }
`;

const EducationContent = styled.ol`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 8px;
  padding-left: 0px;

  @media screen and (max-width: 1140px) {
    gap: 4px;
  }
`;

const Chapter = styled.li`
  width: 100%;
  text-align: start;
  white-space: pre-line;
  list-style-type: none;

  @media screen and (max-width: 1140px) {
    font-size: 10px;
  }
`;

export default Education;