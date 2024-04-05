import React from 'react'
import styled from 'styled-components';
import * as Contact from '../GameStartPage/Contact';
import { MdArrowRight } from 'react-icons/md';

interface InformationProps {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

const Information : React.FC<InformationProps> = ({ step, setStep }) => {
  return (
    <ContainerBox>
      <Contact.LaneContainer onClick={() => {
        window.location.href = "mailto:sean2684@naver.com";
      }}>
        <Contact.Icon>
          <MdArrowRight />
        </Contact.Icon>
        프로젝트 소개
      </Contact.LaneContainer>
      <Contact.LaneContainer onClick={() => {
      }}>
        <Contact.Icon>
          <MdArrowRight />
        </Contact.Icon>
        다시 시작하기
      </Contact.LaneContainer>
      <Contact.LaneContainer onClick={() => {
        window.location.href = "mailto:sean2684@naver.com";
      }}>
        <Contact.Icon>
          <MdArrowRight />
        </Contact.Icon>
        대답하기
      </Contact.LaneContainer>
      <Contact.LaneContainer onClick={() => {
      }}>
        <Contact.Icon>
          <MdArrowRight />
        </Contact.Icon>
        다시 시작하기
      </Contact.LaneContainer>
    </ContainerBox>
  )
};

const ContainerBox = styled(Contact.ContactContainer)`
  top: -100%;

  @media screen and (max-width: 500px) {
    top: -80%;
  }
`;

const SelectedIcon = styled(Contact.Icon)`

`;

export default Information;