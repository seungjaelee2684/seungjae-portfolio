import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { SiteContainer } from './SitePage';
import { IoBackspaceOutline } from "react-icons/io5";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";
import DropDownMenu from '../components/common/DropDownMenu';
import { supabase } from '../utils/Supabase';
import ProjectInsert from '../components/InsertPostPage/ProjectInsert';
import PracticeInsert from '../components/InsertPostPage/PracticeInsert';

const InsertPostPage = () => {

  const [isPractice, setIsPractice] = useState<boolean>(false);
  const [option, setOption] = useState<any>(null);
  const [stackOption, setStackOption] = useState<any>(null);
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [stackValue, setStackValue] = useState<number[]>([]);

  const onClickCheckHandler = (e: any, param: boolean) => {
    e.preventDefault();
    setIsPractice(param);
  };

  useEffect(() => {
    const projectFetch = async () => {
      try {
        const [optionData, stackData] = await Promise.all([
          supabase.from('projects_connection').select('connection').order('created_at', { ascending: false }),
          supabase.from('stacks').select('*'),
        ]);

        if (optionData.error) throw optionData.error;
        if (stackData.error) throw stackData.error;

        setOption(optionData.data);
        setStackOption(stackData.data);
      } catch (error) {
        console.error("Error fetching paginated data from Supabase: ", error);
      };
    };

    const practiceFetch = async () => {
      try {
        const { data, error } = await supabase
          .from('practices_category')
          .select('category')
          .order('created_at', { ascending: false });

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
        {(isPractice)
          ? <PracticeInsert
            isPractice={isPractice}
            option={option}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue} />
          : <ProjectInsert
            isPractice={isPractice}
            option={option}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue}
            stackOption={stackOption}
            stackValue={stackValue}
            setStackValue={setStackValue} />}
      </InsertContainer>
    </SiteContainer>
  )
};

export const InsertContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 40px;
`;

export const InsertTitleWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const BackIcon = styled.a`
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

export const InsertTitle = styled.h1`
  font-size: 20px;
  font-weight: 700;
`;

export const CheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CheckBox = styled.button<{ $color: string }>`
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

export default InsertPostPage;