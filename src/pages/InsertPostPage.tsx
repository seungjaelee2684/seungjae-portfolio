import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { SiteContainer } from './SitePage';
import { IoBackspaceOutline } from "react-icons/io5";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import DropDownMenu from '../components/common/DropDownMenu';
import { supabase } from '../utils/Supabase';

const InsertPostPage = () => {

  const [isPractice, setIsPractice] = useState<boolean>(false);
  const [option, setOption] = useState<any>(null);
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [insertData, setInsertData] = useState<{
    title: string,
    start_date: string,
    end_date: string,
    role: string,
    description: string,
    member: string,
    work: string,
    content: string
  }>({
    title: '',
    start_date: '',
    end_date: '',
    role: '',
    description: '',
    member: '',
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

  const onChangeInsertHandler = (e: any) => {
    const { name, value } = e.target;
    setInsertData({
      ...insertData,
      [name]: value
    });
  };

  const onClickCheckHandler = (e: any, param: boolean) => {
    e.preventDefault();
    setIsPractice(param);
  };

  useEffect(() => {
    const projectFetch = async () => {
      try {
        const { data, error } = await supabase
          .from('projects_connection')
          .select('connection')

        if (error) throw error;

        setOption(data);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    const practiceFetch = async () => {
      try {
        const { data, error } = await supabase
          .from('practices_category')
          .select('category')

        if (error) throw error;

        setOption(data);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    if (isPractice) {
      practiceFetch();
    } else {
      projectFetch();
    };
    setDropdownValue(null);
  }, [isPractice]);

  console.log('드롭다운 메뉴', option);

  return (
    <SiteContainer>
      <InsertContainer>
        <InsertTitleWrapper>
          <BackIcon
            href="javascript:void(0)"
            onClick={() => window.history.back()}>
            <IoBackspaceOutline />
          </BackIcon>
          <InsertTitle>
            새로운 글쓰기
          </InsertTitle>
          <CheckBoxWrapper>
            <CheckBox
              $color={(!isPractice) ? '#ee6e6e' : '#656565'}
              onClick={(e) => onClickCheckHandler(e, false)}>
              {(!isPractice) ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              프로젝트
            </CheckBox>
            <CheckBox
              $color={(isPractice) ? '#ee6e6e' : '#656565'}
              onClick={(e) => onClickCheckHandler(e, true)}>
              {(isPractice) ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
              공부
            </CheckBox>
          </CheckBoxWrapper>
        </InsertTitleWrapper>
        <InsertFormContainer>
          <FormLane>
            <Expired>
              {(isPractice) ? '제목' : '프로젝트명'}
              <Important>
                *
              </Important>
            </Expired>
            <LaneInput
              $width='100%'
              name='title'
              value={title}
              placeholder={(isPractice) ? '제목을 입력해주세요.' : '프로젝트 명을 입력해주세요.'}
              onChange={onChangeInsertHandler} />
          </FormLane>
          <FormLane>
            <Expired>
              {(isPractice) ? '카테고리' : '소속'}
              <Important>
                *
              </Important>
            </Expired>
            <DropDownMenu
              option={option}
              value={dropdownValue}
              setValue={setDropdownValue}
              type={isPractice} />
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
              value={member}
              placeholder='0 명 (숫자만 입력)'
              onChange={onChangeInsertHandler} />
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
        </InsertFormContainer>
      </InsertContainer>
    </SiteContainer>
  )
};

const InsertContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 40px;
`;

const InsertTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const BackIcon = styled.a`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 32px;
  color: #656565;
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #222020;
  }
`;

const InsertTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const CheckBox = styled.button<{ $color: string }>`
  display: flex;
  align-items: center;
  gap: 4px;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  line-height: 100%;
  color: ${(props) => props.$color};
  transition: all 0.3s;
  cursor: pointer;

  &:hover {
    color: #ee6e6e;
  }
`;

const InsertFormContainer = styled.form`
  width: 100%;
  padding: 30px 0px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 24px;
`;

const FormLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 24px;
`;

const Expired = styled.label`
  min-width: 100px;
  width: 100px;
  height: 32px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 4px;
  font-size: 14px;
  font-weight: 700;
`;

const Important = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #ee6e6e;
`;

const LaneInput = styled.input<{ $width: string }>`
  width: ${(props) => props.$width};
  height: 38px;
  padding: 0px 12px;
  border: 1px solid #b8b8b8;
  outline: none;
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

const LaneTextarea = styled.textarea`
  width: 100%;
  min-height: 80px;
  padding: 12px;
  border: 1px solid #b8b8b8;
  outline: none;
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

export default InsertPostPage;