import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import DropDownMenu from '../common/DropDownMenu';
import { FaRegPenToSquare } from "react-icons/fa6";
import 'react-quill/dist/quill.snow.css';
import { formats, modules } from '../../utils/Editor';
import ReactQuill from 'react-quill';
import { supabase } from '../../utils/Supabase';
import { useNavigate } from 'react-router-dom';
import { textLight } from '../../styles/colorToken';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/config/configureStore';

interface ProjectInsertProps {
  isPractice: boolean;
  option: any;
  dropdownValue: string | null;
  setDropdownValue: React.Dispatch<React.SetStateAction<string | null>>;
  stackOption: any;
  stackValue: number[];
  setStackValue: React.Dispatch<React.SetStateAction<number[]>>;
};

const ProjectInsert = ({
  isPractice,
  option,
  dropdownValue,
  setDropdownValue,
  stackOption,
  stackValue,
  setStackValue
}: ProjectInsertProps) => {

  const navigate = useNavigate();
  const theme = useSelector((state: RootState) => state.darkMode);

  const [insertData, setInsertData] = useState<{
    title: string,
    start_date: string,
    end_date: string,
    role: string,
    url: string,
    description: string,
    member: number,
    work: string,
    content: string
  }>({
    title: '',
    start_date: '',
    end_date: '',
    role: '',
    url: '',
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
    url,
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

  const onChangeContentHandler = (content: string) => {
    setInsertData({
      ...insertData,
      content: content
    });
  };

  const onClickSaveHandler = (e: any) => {
    e.preventDefault();
    if (title.length <= 0) return alert('프로젝트 명을 입력해주세요.');
    if (!dropdownValue) return alert('소속를 선택해주세요.');
    if (stackValue.length <= 0) return alert('기술 스택을 선택해주세요.');
    if (start_date.length <= 0) return alert('시작일을 입력해주세요.');
    if (end_date.length <= 0) return alert('종료일을 입력해주세요.');
    if (!member) return alert('팀원 수를 입력해주세요.');
    if (url.length <= 0) return alert('링크를 입력해주세요.');
    if (role.length <= 0) return alert('역할을 입력해주세요.');
    if (work.length <= 0) return alert('담당 업무를 입력해주세요.');

    const uploadData = {
      ...insertData,
      connection: dropdownValue,
      stack: stackValue,
      type: 'projects'
    };

    const isUpload = window.confirm('저장하시겠습니까?');

    const uploadFetch = async () => {
      const { data, error } = await supabase
        .from('projects_connection')
        .select('count')
        .eq('connection', dropdownValue)
        .single();

      if (error) {
        alert('저장에 실패하였습니다.');
        throw error;
      };

      const [project, connectionCount] = await Promise.all([
        supabase.from('projects').insert([uploadData]).select(),
        supabase.from('projects_connection').update({ count: data.count + 1 }).eq('connection', dropdownValue)
      ]);

      if (project.error || connectionCount.error) {
        alert('저장에 실패하였습니다.');
        throw error;
      };

      navigate(`/jaelog/projects`);
    };

    if (isUpload) {
      uploadFetch();
    };
  };

  console.log(stackValue);

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
          소속 추가/수정
        </DropdownLink>
      </FormLane>
      <FormLane>
        <Expired>
          기술스택
          <Important>
            *
          </Important>
        </Expired>
        <TagWrapper>
          {stackOption?.map((item: any, index: number) =>
            <TagButton
              key={index}
              $color={(stackValue.includes(item?.id)) ? '#ffffff' : textLight[theme]}
              $bgcolor={(stackValue.includes(item?.id)) ? '#ee6e6e' : 'transparent'}
              onClick={() => {
                if (stackValue.includes(item?.id)) {
                  const stacks = stackValue.filter((v: any) => v !== item?.id);
                  setStackValue(stacks);
                } else {
                  setStackValue([...stackValue, item?.id]);
                };
              }}>
              {item?.stack}
            </TagButton>
          )}
        </TagWrapper>
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
      </FormLane>
      <FormLane>
        <Expired>
          주요링크
          <Important>
            *
          </Important>
        </Expired>
        <LaneInput
          $width='100%'
          name='url'
          value={url}
          placeholder='링크를 입력해주세요.'
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
        <ReactQuill
          theme="snow"
          value={content}
          onChange={onChangeContentHandler}
          modules={modules}
          formats={formats}
          style={{
            width: '100%',
            height: '500px'
          }} />
      </FormLane>
      <ButtonWrapper>
        <Button onClick={onClickSaveHandler}>
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
  
  @media screen and (max-width: 980px) {
    width: 100%;
    padding: 16px 0px;
    gap: 12px;
  }
`;

export const FormLane = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: start;
  gap: 24px;

  @media screen and (max-width: 980px) {
    flex-direction: column;
    gap: 4px;
  }
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

  @media screen and (max-width: 980px) {
    min-width: 80px;
    width: 80px;
    height: 28px;
    font-size: 12px;
    padding-left: 4px;
  }
`;

export const Important = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #ee6e6e;

  @media screen and (max-width: 980px) {
    font-size: 9px;
  }
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

  @media screen and (max-width: 980px) {
    height: 28px;
    font-size: 10px;
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

  @media screen and (max-width: 980px) {
    min-width: fit-content;
    width: fit-content;
    height: 28px;
    font-size: 10px;
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

  @media screen and (max-width: 980px) {
    min-height: 400px;
    padding: 8px;
  }
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 24px;
  margin: 60px 0px;

  @media screen and (max-width: 980px) {
    gap: 12px;
    margin: 100px 0px;
  }
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

  @media screen and (max-width: 980px) {
    width: 70px;
    height: 28px;
    font-size: 12px;
  }
`;

export const TagWrapper = styled.ul`
  width: 100%;
  padding-left: 0px;
  display: flex;
  justify-content: start;
  align-items: start;
  flex-wrap: wrap;
  gap: 8px;

  @media screen and (max-width: 980px) {
    gap: 4px;
  }
`;

export const TagButton = styled.li<{ $color: string, $bgcolor: string }>`
  width: fit-content;
  height: 32px;
  padding: 0px 16px;
  font-size: 14px;
  font-weight: 700;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  border-radius: 20px;
  transition: all 0.3s;
  color: ${(props) => props.$color};
  background-color: ${(props) => props.$bgcolor};
  cursor: pointer;

  &:hover {
    opacity: 0.6;
  }

  @media screen and (max-width: 980px) {
    height: 24px;
    padding: 0px 10px;
    font-size: 10px;
    border-radius: 16px;
  }
`;

export default ProjectInsert;