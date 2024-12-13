import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { supabase } from '../utils/Supabase';
import { SiteContainer } from './SitePage';
import { BackIcon, CheckBox, CheckBoxWrapper, InsertContainer, InsertTitle, InsertTitleWrapper } from './InsertPostPage';
import { IoBackspaceOutline } from 'react-icons/io5';
import { MdCheckBox, MdCheckBoxOutlineBlank } from 'react-icons/md';
import PracticeUpdate from '../components/UpdatePostsPage/PracticeUpdate';
import ProjectUpdate from '../components/UpdatePostsPage/ProjectUpdate';
import { useParams } from 'react-router-dom';

const UpdatePostsPage = () => {

  const { post, postId } = useParams() as { post: string, postId: string };
  const isPractice = post === 'practices'

  const [option, setOption] = useState<any>(null);
  const [stackOption, setStackOption] = useState<any>(null);
  const [dropdownValue, setDropdownValue] = useState<string | null>(null);
  const [stackValue, setStackValue] = useState<number[]>([]);

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
  }, []);

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
            {(!isPractice)
              ? <CheckBox
                $color={(!isPractice) ? '#ee6e6e' : '#656565'}>
                <MdCheckBox />
                프로젝트
              </CheckBox>
              : <CheckBox
                $color={(isPractice) ? '#ee6e6e' : '#656565'}>
                <MdCheckBox />
                공부
              </CheckBox>}
          </CheckBoxWrapper>
        </InsertTitleWrapper>
        {(isPractice)
          ? <PracticeUpdate
            postId={postId}
            isPractice={isPractice}
            option={option}
            dropdownValue={dropdownValue}
            setDropdownValue={setDropdownValue} />
          : <ProjectUpdate
            postId={postId}
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

export default UpdatePostsPage;