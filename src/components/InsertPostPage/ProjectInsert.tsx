import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DropDownMenu from '../common/DropDownMenu';
import { FaRegPenToSquare } from "react-icons/fa6";
import 'react-quill/dist/quill.snow.css';

interface ProjectInsertProps {
  isPractice: boolean;
  option: any;
  dropdownValue: string | null;
  setDropdownValue: React.Dispatch<React.SetStateAction<string | null>>;
};

const ProjectInsert = ({ isPractice, option, dropdownValue, setDropdownValue }: ProjectInsertProps) => {

  const [insertData, setInsertData] = useState<{
    title: string,
    start_date: string,
    end_date: string,
    role: string,
    description: string,
    member: number,
    work: string,
    content: string
  }>({
    title: '',
    start_date: '',
    end_date: '',
    role: '',
    description: '',
    member: 0,
    work: '',
    content: ''
  });
  const {
    title,
    start_date,
    end_date,
    role,
    description,
    member,
    work,
    content
  } = insertData;
  console.log('입력값', insertData);

  const onChangeInsertHandler = (e: any) => {
    const { name, value } = e.target;
    if (name === 'member') {
      const input = value.replace(/[^0-9]/g, '');
      setInsertData({
        ...insertData,
        member: input
      });
    } else {
      setInsertData({
        ...insertData,
        [name]: value
      });
    };
  };

  return (
    <InsertFormContainer>
      <FormLane>
        <Expired>
          프로젝트명
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='title'
          value={title}
          placeholder='프로젝트 명을 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          소속
          <Important>
            *
          </Important>
        </Expired>
        <DropDownMenu
          option={option}
          value={dropdownValue}
          setValue={setDropdownValue}
          type={isPractice} />
        <DropdownLink href='/jaelog/option/update'>
          <FaRegPenToSquare />
          소속 업데이트
        </DropdownLink>
      </FormLane>
      <FormLane>
        <Expired>
          시작일
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='200px'
          name='start_date'
          value={start_date}
          placeholder="'.' 포함 [0000.00.00]"
          onChange={onChangeInsertHandler} />
        <Expired>
          종료일
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='200px'
          name='end_date'
          value={end_date}
          placeholder="'.' 포함 [0000.00.00]"
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          팀원수
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='200px'
          name='member'
          value={(member === 0) ? '' : member}
          placeholder='0명 (숫자만 입력 가능)'
          onChange={onChangeInsertHandler} />
        <Expired>
          명
        </Expired>
      </FormLane>
      <FormLane>
        <Expired>
          역할
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='role'
          value={role}
          placeholder='역할을 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          프로젝트 설명
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='description'
          value={description}
          placeholder='프로젝트에 대한 설명을 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          담당 업무
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='work'
          value={work}
          placeholder='담당한 업무에 대해 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <FormLane>
        <Expired>
          세부 내용
          <Important>
            *
          </Important>
        </Expired>
        <LaneTextarea
          name='content'
          value={content}
          placeholder='내용을 입력해주세요.'
          onChange={onChangeInsertHandler} />
      </FormLane>
      <ButtonWrapper>
        <Button>
          저장
        </Button>
      </ButtonWrapper>
    </InsertFormContainer>
  )
};

export const InsertFormContainer = styled.form`
  width: 850px;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 24px;
`;

export const FormLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 24px;
`;

export const Expired = styled.label`
  min-width: 100px;
  width: 100px;
  height: 34px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 700;
  user-select: none;
`;

export const Important = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #ee6e6e;
`;

export const LaneInput = styled.input<{ $width: string }>`
  width: ${(props) => props.$width};
  height: 38px;
  padding: 0px 12px;
  border: 1px solid #b8b8b8;
  outline: none;
  background-color: transparent;
  font-size: 14px;
  transition: all 0.3s;

  &::placeholder {
    color: #b8b8b8;
  }

  &:hover {
    border: 1px solid #525050;
  }

  &:focus {
    border: 1px solid #222020;
  }
`;

export const DropdownLink = styled.a`
  min-width: 140px;
  width: 140px;
  height: 34px;
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
`;

export const LaneTextarea = styled.textarea`
  width: 100%;
  min-height: 600px;
  padding: 12px;
  border: 1px solid #b8b8b8;
  outline: none;
  font-family: "SUIT_Regular";
  background-color: transparent;
  font-size: 14px;
  transition: all 0.3s;

  &::placeholder {
    color: #b8b8b8;
  }

  &:hover {
    border: 1px solid #525050;
  }

  &:focus {
    border: 1px solid #222020;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
  margin: 60px 0px;
`;

export const Button = styled.div`
  width: 110px;
  height: 38px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-weight: 700;
  color: #ffffff;
  background-color: #ee6e6e;
  border-radius: 4px;
  user-select: none;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    background-color: #ee9595;
  }
  
  &:active {
    background-color: #972727;
  }
`;

export default ProjectInsert;